import { PostForm } from "@/components/PostForm";
import placeholderData from '@/lib/placeholder-images.json';

export default function NewPostPage() {
  const images = placeholderData.placeholderImages.map(p => ({
    value: p.imageUrl,
    label: p.description
  }));

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8 animate-in fade-in duration-500">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline md:text-5xl">
          Share a New Journey
        </h1>
        <p className="text-lg text-muted-foreground">
          Tell us about your latest travel experience.
        </p>
      </div>

      <div className="mt-12">
        <PostForm images={images} />
      </div>
    </div>
  );
}
