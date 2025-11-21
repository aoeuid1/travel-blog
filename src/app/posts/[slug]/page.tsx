import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

// This function is required for static site generation
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find(p => p.id === post.imageId) ?? PlaceHolderImages[0];

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">{post.title}</h1>
        <p className="text-muted-foreground text-lg">{post.date}</p>
      </header>

      <Image
        src={image.imageUrl}
        alt={image.description}
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg mb-8"
        data-ai-hint={image.imageHint}
      />

      <div
        className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 text-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
