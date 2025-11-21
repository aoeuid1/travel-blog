'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { createPostAction, type FormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Creating Post...' : 'Create Post'}
    </Button>
  );
}

type PostFormProps = {
  images: { value: string; label: string }[];
};

export function PostForm({ images }: PostFormProps) {
  const initialState: FormState = undefined;
  const [state, formAction] = useFormState(createPostAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message && state.errors) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction}>
      <Card>
        <CardHeader>
          <CardTitle>New Post Details</CardTitle>
          <CardDescription>Fill in the details of your new blog post.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="e.g., My Amazing Trip to the Mountains"
              required
            />
            {state?.errors?.title && (
              <p className="text-sm text-destructive">{state.errors.title[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Tell your story..."
              className="min-h-[150px]"
              required
            />
            {state?.errors?.content && (
              <p className="text-sm text-destructive">{state.errors.content[0]}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="imageUrl">Cover Image</Label>
             <Select name="imageUrl" required>
              <SelectTrigger id="imageUrl">
                <SelectValue placeholder="Select an image" />
              </SelectTrigger>
              <SelectContent>
                {images.map(image => (
                  <SelectItem key={image.value} value={image.value}>
                    {image.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
             {state?.errors?.imageUrl && (
              <p className="text-sm text-destructive">{state.errors.imageUrl[0]}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton />
        </CardFooter>
      </Card>
    </form>
  );
}
