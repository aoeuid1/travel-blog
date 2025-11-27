
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Images } from '@/lib/images';
import { Collapsible } from '@/components/Collapsible';
import React from 'react';
import { PostHeader } from '@/components/PostHeader';

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
    <div>
      <PostHeader
        imageUrl={image.imageUrl}
        imageDescription={image.description}
        imageHint={image.imageHint || ''}
        title={post.title}
        date={post.date}
      />
      <div className="h-[400px] md:h-[600px]" />
      <div className="bg-background relative z-10">
        <article className="max-w-3xl mx-auto px-4 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-2xl mx-auto text-stone-800 dark:text-zinc-300 text-lg prose-p:my-6 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left font-serif prose-headings:text-stone-800 prose-headings:dark:text-zinc-100">
            {renderContent()}
          </div>
        </article>
      </div>
    </div>
  );
}
