import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Calendar } from 'lucide-react';

// This function is required for static site generation
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
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
        <div className="flex items-center text-muted-foreground">
          <Calendar className="h-5 w-5 mr-2" />
          <p className="text-lg">{formatDate(post.date)}</p>
        </div>
      </header>

      <Image
        src={image.imageUrl}
        alt={image.description}
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg mb-8 shadow-lg"
        data-ai-hint={image.imageHint}
      />

      <div
        className="prose prose-lg dark:prose-invert max-w-2xl mx-auto text-foreground/90 text-lg prose-img:rounded-lg prose-img:shadow-md first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left font-serif"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
