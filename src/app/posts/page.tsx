import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Images } from '@/lib/images';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => {
         const image = Images.find(p => p.id === post.imageId) ?? Images[0];
        return (
          <Link href={`/posts/${post.slug}`} key={post.slug} className="group">
            <Card className="h-full overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={image.imageHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-headline group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription className="mt-2 text-base">
                  {post.summary}
                </CardDescription>
                 <p className="mt-4 text-sm text-muted-foreground">{post.date}</p>
              </CardContent>
            </Card>
          </Link>
        )
      })}
    </div>
  );
}
