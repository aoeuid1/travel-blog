import { Images } from './images';

export interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string;
  imageId: string;
  content: string;
  location?: {
    lat: number;
    lng: number;
  };
}

const allPosts: Post[] = [
  {
    slug: 'cats-of-istanbul',
    title: 'Cats of Istanbul',
    summary: 'cat.',
    date: '2024-05-15',
    imageId: 'istanbul-cat-1',
    content: `
<p> CAT </p>
{{image:istanbul-cat-2}}
{{image:istanbul-cat-3}}
{{image:istanbul-cat-4}}
{{image:istanbul-cat-5}}
{{image:istanbul-cat-6}}
`,
    location: {
      lat: 41.0082,
      lng: 28.9784,
    },
  },
  {
    slug: 'grand-canyon-majesty',
    title: 'The Grand Canyon\'s Majesty',
    summary: 'Witnessing the awe-inspiring scale and beauty of the Grand Canyon.',
    date: '2024-03-10',
    imageId: 'canyon',
    content: `
<p>Standing on the rim of the Grand Canyon at sunrise is a spiritual experience. The sheer scale of it is impossible to capture in photos. As the sun rose, it painted the canyon walls in shifting shades of orange, red, and purple. We hiked a portion of the Bright Angel Trail, descending into the canyon to get a different perspective of its immense size.</p>
<p>The vastness of the landscape and the quiet of the desert were a powerful reminder of nature's artistry. It's a place that makes you feel small in the best possible way, filling you with a sense of wonder and awe.</p>
`,
    location: {
      lat: 36.0592,
      lng: -112.1401,
    },
  },
];

export function getAllPosts() {
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  const processedContent = post.content.replace(/{{image:(.*?)}}/g, (match, imageId) => {
    const image = Images.find((img) => img.id === imageId.trim());
    if (image) {
      const imageTag = `<img src="${image.imageUrl}" alt="${image.description}" class="blog-image mx-auto block" />`;
      const figcaption = image.description ? `<figcaption class="text-center text-sm italic text-muted-foreground mt-2">${image.description}</figcaption>` : '';
      return `<figure class="my-8">${imageTag}${figcaption}</figure>`;
    }
    return '';
  });

  return { ...post, content: processedContent };
}
