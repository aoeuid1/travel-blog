'use client';

import dynamic from 'next/dynamic';
import { Post } from '@/lib/posts';

const WorldMap = dynamic(() => import('@/components/WorldMap'), {
  ssr: false,
  loading: () => <div className="h-96 w-full bg-stone-200 dark:bg-zinc-700 animate-pulse" />
});

export default function MapLoader({ posts }: { posts: Post[] }) {
  return <WorldMap posts={posts} />;
}
