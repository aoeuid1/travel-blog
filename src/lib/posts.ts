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
    summary: 'Pictures of cute cats',
    date: '2025-11-21',
    imageId: 'istanbul-cat-1',
    content: `
<p> Istanbul has been know for its cats since Ottoman times. They are well fed, well cared for, and most importantly well loved by all the local population and tourists alike. It is said that they even helped the city survive the plague through their important work catching rats! </p>
{{image:istanbul-cat-4}}
{{image:istanbul-cat-5}}
{{image:istanbul-cat-6}}
{{image:istanbul-cat-7}}
{{image:istanbul-cat-8}}
{{image:istanbul-cat-9}}
{{image:istanbul-cat-10}}
{{image:istanbul-cat-11}}
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
<p>If one silhouette defines the Istanbul skyline, it is the Hagia Sophia. Standing for nearly 1,500 years, this architectural marvel with its massive "floating" dome and pencil-thin minarets is more than just a beautiful building—it is a living timeline of human history.</p>

  <h2>A Chameleon of History</h2>
  <p>What makes the Hagia Sophia unique is its ability to adapt. While the stones remain the same, its spirit has evolved alongside the city:</p>

  <ul>
    <li><strong>Byzantine Cathedral (537–1453):</strong> Commissioned by Emperor Justinian, it was the world’s largest building and the heart of Eastern Orthodox Christianity for over 900 years.</li>
    <li><strong>Ottoman Mosque (1453–1935):</strong> After the conquest of Constantinople, Sultan Mehmed II converted it into a mosque, adding the iconic minarets and Islamic calligraphy alongside the original Christian mosaics.</li>
    <li><strong>Museum to Modern Mosque (1935–Present):</strong> It stood as a secular museum for decades, symbolizing a bridge between cultures, before returning to its status as an active mosque in 2020.</li>
  </ul>

{{collapsible:title="Visitor Info"}}

<h3> Tickets </h3>
<p> Tickets are available in person at the ticket counter at the Sultan Ahmed III Fountain. For 25€, you get access to the upper floor the mosque where the mosaics are. The lower floor of the mosque is closed for visitors and is for Turkish Muslims for prayer only.</p>
<p> Skip-the-line tickets are also available online for an additional fee, but keep in mind there are separate lines to buy a ticket and for the security line to enter the mosque. You still have to wait in the security line even if you have a skip-the-line ticket. </p>

<h3> Hours </h3>
<p> The ticket window opens at 9, but the lines can be long so try to arrive at 8:30 or so. The mosque closes at 19:30 at night.</p>

<h3> Dress Code </h3>
<p> Women must cover their hair (headscarf). Both men and women must cover shoulders and knees. Scarves are available for purchase nearby. </p>
{{/collapsible}}

<h3> Inside Hagia Sophia </h3>
{{image:hagia-sophia-5}}
<p> The visiting area is the upper floor of the mosque and is a ∩ shape around what is pictured here. I was expecting more for the 25€ admission fee.</p>

<p> In Nov 2025, the scaffolding definitely detracts from the visual appeal of the building but it was the only way to keep the building open during renovations. The ground floor is for Turkish Muslims to pray only.</p>
{{image:hagia-sophia-4}}

<h3> Mosaics </h3>
{{image:hagia-sophia-1}}
{{collapsible:title="Why were its christian mosaics preserved?"}}
<p> The fact that these mosaics exist at all is surprisingly rare in history. Usually, when a city was conquered in the ancient world, the victors would destroy the religious symbols of the defeated to assert their dominance. Furthermore, the mosaics were made with real gold leaf and semi-precious stones, making them tempting targets for soldiers looking to loot valuable materials. On top of that, strict Islamic laws forbid images of people in prayer spaces. By all historical odds, these Christian images should have been scraped off the walls immediately in 1453. </p>
<p> Instead, Sultan Mehmed II made the unusual choice to protect the building’s heritage. While the images were eventually covered with plaster to make the space suitable for a mosque, this coating ironically acted as a "time capsule." It shielded the delicate glass and gold from centuries of dust, light, and decay. The mosaics were briefly rediscovered during renovations in the 1800s but were hidden again until the building became a museum in 1935. Today, even though Hagia Sophia is an active mosque again, the mosaics remain; they are simply covered by curtains during prayer times, allowing a 1,500-year-old Christian legacy to survive inside a major Islamic site. </p>
{{/collapsible}}

{{image:hagia-sophia-2}}
`,
    location: {
      lat: 41.0086,
      lng: 28.9800,
    },
    tag: 'Istanbul',
  },
  {
    slug: 'walls-of-constantinople',
    title: 'Walls of Constantinople',
    summary: 'Stuff',
    date: '2025-11-25',
    imageId: 'eminonu-1',
    content: `
      <h2>Eminönü: Where History and Commerce Collide</h2>
      <p>Eminönü is a chaotic and captivating district nestled at the mouth of the Golden Horn, where the old city of Istanbul meets the Bosphorus. It's a place where you can feel the pulse of the city, with its bustling crowds, historic landmarks, and vibrant markets. Whether you're a history buff, a foodie, or a shopaholic, Eminönü has something to offer everyone.</p>
      {{image:eminonu-1}}
      <h3>A Feast for the Senses</h3>
      <p>One of the first things that will strike you about Eminönü is the sheer energy of the place. The air is filled with the sounds of seagulls, ferry horns, and the chatter of a thousand different conversations. The aromas of roasting chestnuts, grilled fish, and exotic spices waft from the street food stalls and markets, tempting you to indulge in a culinary adventure.</p>
      <h3>Historic Landmarks</h3>
      <p>Eminönü is home to some of Istanbul's most iconic landmarks, including the magnificent New Mosque (Yeni Cami) and the historic Spice Bazaar (Mısır Çarşısı). The New Mosque, with its grand dome and elegant minarets, is a stunning example of Ottoman architecture. The Spice Bazaar, on the other hand, is a sensory overload, with its colorful displays of spices, teas, sweets, and other Turkish delights.</p>
      <h3>A Shopper's Paradise</h3>
      <p>If you're looking to do some shopping, Eminönü is the place to be. From the traditional handicrafts and souvenirs at the Grand Bazaar to the latest fashion trends in the modern shopping streets, you'll find everything you're looking for and more. Don't be afraid to haggle for a good price, as it's all part of the fun!</p>
    `,
    location: {
      lat: 41.017,
      lng: 28.971,
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
