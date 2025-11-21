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
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default async function Home() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-center font-headline md:text-5xl">
        WanderLogger
      </h1>
      <div className="text-center text-muted-foreground">
        <p className="text-lg">Welcome to your travel blog.</p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const image = PlaceHolderImages.find(p => p.id === post.imageId) ?? PlaceHolderImages[0];
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
                  <CardTitle className="text-2xl font-headline group-hover:text-primary">
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
    </div>
  );
}
