'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { Post } from '@/lib/posts';

export default function MapLoader({ posts, fitBounds }: { posts: Post[], fitBounds?: boolean }) {
  const WorldMap = useMemo(() => dynamic(() => import('@/components/WorldMap'), {
    ssr: false,
    loading: () => <div className="h-96 w-full bg-stone-200 dark:bg-zinc-700 animate-pulse" />
  }), []);

  return <WorldMap posts={posts} fitBounds={fitBounds} />;
}
