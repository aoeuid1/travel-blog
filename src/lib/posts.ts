import type { Post } from '@/types';
import placeholderData from '@/lib/placeholder-images.json';

const { placeholderImages } = placeholderData;

let posts: Post[] = [
  {
    slug: 'a-wonderful-trip-to-paris-1',
    title: 'A Wonderful Trip to Paris',
    content: `Our journey to Paris was nothing short of magical. We saw the Eiffel Tower sparkle at night, a sight I'll never forget. We spent hours wandering through the Louvre, getting lost in art and history. Of course, we indulged in countless croissants and pastries, each one better than the last. The city is full of life, from the charming streets of Montmartre to the bustling banks of the Seine. Every corner holds a new discovery, a new story. I left a piece of my heart in Paris and can't wait to return.`,
    date: '2024-05-15T10:00:00.000Z',
    imageUrl: placeholderImages[0].imageUrl,
    imageHint: placeholderImages[0].imageHint,
  },
  {
    slug: 'exploring-the-neon-streets-of-tokyo-2',
    title: 'Exploring the Neon Streets of Tokyo',
    content: `Tokyo is a city of contrasts. One moment you're in a serene, ancient temple, and the next you're crossing the world's busiest intersection, Shibuya Crossing. The food was a highlight - from fresh sushi at the Tsukiji fish market to hearty bowls of ramen in Shinjuku. We explored the vibrant pop culture of Akihabara and found peace in the Meiji Shrine's forested grounds. The efficiency of the public transport and the politeness of the people made navigating this megacity a breeze.`,
    date: '2024-04-22T14:30:00.000Z',
    imageUrl: placeholderImages[1].imageUrl,
    imageHint: placeholderImages[1].imageHint,
  },
  {
    slug: 'majesty-of-the-grand-canyon-3',
    title: 'Majesty of the Grand Canyon',
    content: `No picture can prepare you for the sheer scale and grandeur of the Grand Canyon. We hiked along the South Rim trail, with each viewpoint offering a more breathtaking vista than the last. The changing colors of the canyon walls as the sun moved across the sky were mesmerizing. We watched the sunset paint the landscape in hues of orange, pink, and purple. It’s a humbling experience to stand at the edge of such a vast, natural wonder, a powerful reminder of the Earth's long history.`,
    date: '2024-03-10T08:00:00.000Z',
    imageUrl: placeholderImages[2].imageUrl,
    imageHint: placeholderImages[2].imageHint,
  },
  {
    slug: 'relaxing-on-a-tropical-paradise-4',
    title: 'Relaxing on a Tropical Paradise',
    content: `This was the ultimate escape. We spent our days with our toes in the white sand, listening to the gentle lapping of turquoise waves. The island was a slice of paradise, with lush palm trees providing shade from the warm sun. We went snorkeling and discovered a vibrant underwater world filled with colorful coral and tropical fish. Evenings were spent watching spectacular sunsets with a cool drink in hand. It was the perfect place to disconnect and recharge.`,
    date: '2024-02-18T16:45:00.000Z',
    imageUrl: placeholderImages[3].imageUrl,
    imageHint: placeholderImages[3].imageHint,
  },
];

export async function getPosts(): Promise<Post[]> {
  // Return a copy sorted by date
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find(post => post.slug === slug);
}
