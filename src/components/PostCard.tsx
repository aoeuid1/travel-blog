import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';
import type { Post } from '@/types';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const postDate = new Date(post.date);

  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/posts/${post.slug}`} className="flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
            />
          </div>
        </CardHeader>
        <div className="flex flex-col flex-grow p-6">
          <CardTitle className="font-headline text-2xl mb-2 leading-tight">
            {post.title}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={post.date}>
              {format(postDate, 'MMMM d, yyyy')}
            </time>
          </CardDescription>
          <CardContent className="p-0 flex-grow">
            <p className="line-clamp-3 text-base text-muted-foreground">
              {post.content}
            </p>
          </CardContent>
          <CardFooter className="p-0 pt-6 mt-auto">
            <Button variant="link" className="p-0 h-auto text-primary">
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </div>
      </Link>
    </Card>
  );
}
