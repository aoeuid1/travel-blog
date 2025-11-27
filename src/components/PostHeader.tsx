"use client";

import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PostHeaderProps {
  imageUrl: string;
  imageDescription: string;
  imageHint: string;
  title: string;
  date: string;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function PostHeader({
  imageUrl,
  imageDescription,
  imageHint,
  title,
  date,
}: PostHeaderProps) {
  return (
    <div className="sticky top-0 h-[400px] md:h-[600px] w-full -z-10">
      <Image
        src={imageUrl}
        alt={imageDescription}
        fill
        className={cn('object-cover', 'blog-image')}
        data-ai-hint={imageHint}
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <header className="text-center mx-auto max-w-3xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">{title}</h1>
          <div className="flex items-center justify-center">
            <Calendar className="h-4 w-4 mr-2" />
            <p className="text-sm font-medium uppercase tracking-widest">
              {formatDate(date)}
            </p>
          </div>
        </header>
      </div>
    </div>
  );
}
