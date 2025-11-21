import { Images } from './images';

export interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string;
  imageId: string;
  content: string;
}

const allPosts: Post[] = [
  {
    slug: 'a-Parisian-adventure',
    title: 'A Parisian Adventure',
    summary: 'Exploring the romantic streets and iconic landmarks of Paris.',
    date: '2024-05-15',
    imageId: 'istanbul-cat-1',
    content: `
<p>Our journey began in the heart of Paris, with a visit to the magnificent Eiffel Tower. The view from the top was breathtaking, offering a panoramic vista of the city's charming rooftops and winding streets. We spent the afternoon getting lost in the Louvre, marveling at masterpieces like the Mona Lisa and the Venus de Milo.</p>
{{image:istanbul-cat-1}}
<p>Evenings were for romantic strolls along the Seine, watching the city lights dance on the water. We indulged in delicious pastries from a local patisserie and enjoyed a classic French dinner in a cozy bistro in Montmartre. Paris truly is a feast for the senses.</p>
`,
  },
  {
    slug: 'tokyo-neon-nights',
    title: 'Tokyo: Neon Nights & Ancient Traditions',
    summary: 'A journey through the bustling city of Tokyo, from Shibuya Crossing to ancient temples.',
    date: '2024-04-22',
    imageId: 'tokyo',
    content: `
<p>Tokyo is a city of stunning contrasts. One moment you're swept up in the electric energy of Shibuya Crossing, the busiest intersection in the world, and the next you're finding tranquility in the serene grounds of the Meiji Shrine. We explored the vibrant markets, sampled incredible street food, and got a taste of the city's famous nightlife.</p>
<p>We also took a day trip to see the majestic Mount Fuji, its snow-capped peak a perfect cone against the blue sky. The blend of ultra-modern technology and deep-rooted cultural traditions makes Tokyo a truly unforgettable destination.</p>
`,
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
