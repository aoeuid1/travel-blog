import { getPosts } from '@/lib/posts';
import { PostCard } from '@/components/PostCard';
import { type Post } from '@/types';

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-center font-headline md:text-5xl">
        Latest Adventures
      </h1>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: Post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground">
          <p className="text-lg">No posts yet.</p>
          <p>Why not create one?</p>
        </div>
      )}
    </div>
  );
}
