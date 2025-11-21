'use server';

import { z } from 'zod';
import { addPost } from '@/lib/posts';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const postSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters long.' }),
  content: z.string().min(10, { message: 'Content must be at least 10 characters long.' }),
  imageUrl: z.string().url({ message: 'Please select a valid image.' }),
});

export type FormState = {
  message: string;
  errors?: {
    title?: string[];
    content?: string[];
    imageUrl?: string[];
  };
} | undefined;

export async function createPostAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = postSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
    imageUrl: formData.get('imageUrl'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Failed to create post. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const newPost = await addPost(validatedFields.data);
    revalidatePath('/');
    revalidatePath(`/posts/${newPost.slug}`);
  } catch (error) {
    return {
      message: 'An unexpected error occurred while creating the post.',
    };
  }
  
  redirect('/');
}
