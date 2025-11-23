
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Images } from '@/lib/images';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible } from '@/components/Collapsible';
import React from 'react';

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

  const image = Images.find(p => p.id === post.imageId) ?? Images[0];

  const renderContent = () => {
    const parts = post.content.split(/<div data-collapsible="true" data-title="(.*?)">([\s\S]*?)<\/div>/g);
    return parts.map((part, i) => {
      if (i % 3 === 1) {
        const title = parts[i];
        const content = parts[i + 1];
        return (
          <Collapsible key={i} title={title}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Collapsible>
        );
      } else if (i % 3 === 0) {
        return <div key={i} dangerouslySetInnerHTML={{ __html: part }} />;
      }
      return null;
    });
  };

  return (
    <article className="max-w-4xl mx-auto">
      <header className="text-center mx-auto max-w-3xl pb-8 mb-8 border-b">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{post.title}</h1>
        <div className="flex items-center justify-center text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          <p className="text-sm font-medium uppercase tracking-widest">
            {formatDate(post.date)}
          </p>
        </div>
      </header>

      <figure className="mb-12">
        <Image
          src={image.imageUrl}
          alt={image.description}
          width={1200}
          height={600}
          className={cn('w-full h-auto', 'blog-image')}
          data-ai-hint={image.imageHint}
        />
      </figure>

      <div className="prose prose-lg dark:prose-invert max-w-2xl mx-auto text-stone-800 dark:text-zinc-300 text-lg prose-p:my-6 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left font-serif prose-headings:text-stone-800 prose-headings:dark:text-zinc-100">
        {renderContent()}
      </div>
    </article>
  );
}
