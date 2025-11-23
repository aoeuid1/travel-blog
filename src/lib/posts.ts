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
    title: 'Hagia Sophia',
    summary: 'History facts and visiting information about Hagia Sophia.',
    date: '2025-11-22',
    imageId: 'hagia-sophia-3',
    content: `
{{collapsible:title="Tickets and Entrance Info"}}
<p> Tickets are 25€ and available in person at the ticket counter at the Sultan Ahmed III Fountain. This is the ONLY official source of tickets despite what many sites online want you to believe. Tickets include access to the upper floor the mosque where the mosaics are as well as the "Hagia Sophia Experience Museum" nearby. The lower floor of the mosque is </p>
<p> Hours: The ticket window opens at 9, but the lines can be long so try to arrive at 8:30 or so. </p>

{{/collapsible}}

<p>
{{image:hagia-sophia-1}}
{{collapsible:title="Why do christian mosaics in the hagia sophia still exist in the mosque"}}
<p> The fact that these mosaics exist at all is surprisingly rare in history. Usually, when a city was conquered in the ancient world, the victors would destroy the religious symbols of the defeated to assert their dominance. Furthermore, the mosaics were made with real gold leaf and semi-precious stones, making them tempting targets for soldiers looking to loot valuable materials. On top of that, strict Islamic laws forbid images of people in prayer spaces. By all historical odds, these Christian images should have been scraped off the walls immediately in 1453. </p>
<p> Instead, Sultan Mehmed II made the unusual choice to protect the building’s heritage. While the images were eventually covered with plaster to make the space suitable for a mosque, this coating ironically acted as a "time capsule." It shielded the delicate glass and gold from centuries of dust, light, and decay. The mosaics were briefly rediscovered during renovations in the 1800s but were hidden again until the building became a museum in 1935. Today, even though Hagia Sophia is an active mosque again, the mosaics remain; they are simply covered by curtains during prayer times, allowing a 1,500-year-old Christian legacy to survive inside a major Islamic site. </p>
{{/collapsible}}
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

export function getUniqueTags() {
  const tags = allPosts
    .map((post) => post.tag)
    .filter((tag): tag is string => !!tag);
  return Array.from(new Set(tags));
}

export function getPostBySlug(slug: string) {
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let processedContent = post.content.replace(/{{image:(.*?)}}/g, (match, imageId) => {
    const image = Images.find((img) => img.id === imageId.trim());
    if (image) {
      const imageTag = `<img src="${image.imageUrl}" alt="${image.description}" class="blog-image mx-auto block" />`;
      const figcaption = image.description ? `<figcaption class="text-center text-sm italic text-muted-foreground mt-2">${image.description}</figcaption>` : '';
      return `<figure class="my-8">${imageTag}${figcaption}</figure>`;
    }
    return '';
  });

  const collapsibleRegex = /{{collapsible:title="(.*?)"}}([\s\S]*?){{\/collapsible}}/g;
  processedContent = processedContent.replace(
    collapsibleRegex,
    (match, title, content) => {
      return `<div data-collapsible="true" data-title="${title}">${content}</div>`;
    }
  );


  return { ...post, content: processedContent };
}
