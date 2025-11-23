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
  tag?: string;
}

const allPosts: Post[] = [
  {
    slug: 'cats-of-istanbul',
    title: 'Cats of Istanbul (pics)',
    summary: 'Pictures of cats',
    date: '2024-05-15',
    imageId: 'istanbul-cat-1',
    content: `
<p> CAT </p>
{{image:istanbul-cat-2}}
{{image:istanbul-cat-3}}
{{image:istanbul-cat-4}}
{{image:istanbul-cat-5}}
{{image:istanbul-cat-6}}
{{image:istanbul-cat-7}}
{{image:istanbul-cat-8}}
`,
    location: {
      lat: 41.0082,
      lng: 28.9784,
    },
    tag: 'Istanbul',
  },
  {
    slug: 'hagia-sophia',
    title: 'The Timeless Wonder of Hagia Sophia',
    summary: 'Exploring the architectural marvel and rich history of Istanbul\'s iconic landmark.',
    date: '2024-11-20',
    imageId: 'hagia-sophia-1',
    content: `
<p>Hagia Sophia, with its immense dome and stunning mosaics, stands as a testament to centuries of history. Originally a cathedral, later a mosque, and now a museum, its walls whisper tales of empires and faiths. Walking through its grand hall is a journey through time, where Byzantine and Ottoman art coexist.</p>
{{image:hagia-sophia-1}}
{{image:hagia-sophia-2}}
{{image:hagia-sophia-3}}
{{image:hagia-sophia-4}}
{{image:hagia-sophia-5}}
<p>The play of light through the high windows illuminates the intricate details of the interior, creating a serene and contemplative atmosphere. It is a place of profound beauty and historical significance, a must-see for any visitor to Istanbul.</p>
`,
    location: {
      lat: 41.0086,
      lng: 28.9800,
    },
    tag: 'Istanbul',
  },
];

export function getAllPosts() {
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByTag(tag: string) {
  return allPosts.filter((post) => post.tag === tag);
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
