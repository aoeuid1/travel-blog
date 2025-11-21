import { getAllPosts } from "@/lib/posts";
import { Images } from "@/lib/images";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const posts = getAllPosts();
  const images = Images;

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const image = images.find((img) => img.id === post.imageId);
          return (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <div className="block border border-stone-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-stone-50 dark:bg-zinc-800">
                <div className="relative h-48 w-full">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 font-headline text-stone-800 dark:text-zinc-100">{post.title}</h2>
                  <p className="text-stone-600 dark:text-zinc-400 text-sm">{post.summary}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
