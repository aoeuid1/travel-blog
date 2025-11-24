import {slugify, formatDate} from './utils';

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  imageId?: string;
  location?: {
    lat: number;
    lng: number;
  };
  tag?: string;
}

const allPosts: Post[] = [
  {
    slug: 'istanbul-welcome',
    title: 'Welcome to Istanbul',
    date: '2025-11-20',
    summary: 'An introduction to my time in Istanbul, Turkey.',
    content: `
<p>As a city that straddles two continents, Istanbul is a captivating blend of history, culture, and modernity. From the bustling markets to the serene mosques, there is something for everyone in this vibrant metropolis. In this series of posts, I will share my experiences exploring the city, from the must-see sights to the hidden gems.</p>
`,
    imageId: 'hagia-sophia-2',
    location: {
      lat: 41.0082,
      lng: 28.9784,
    },
    tag: 'Istanbul',
  },
  {
    slug: 'hagia-sophia',
    title: 'Hagia Sophia',
    date: '2025-11-21',
    summary: 'A visit to the iconic Hagia Sophia, one of the most important landmarks in Istanbul.',
    content: `
      <p>Hagia Sophia is a must-see for any visitor to Istanbul. With a history stretching back almost 1500 years, it has been a cathedral, a mosque, a museum, and now a mosque again. The building is a stunning example of Byzantine architecture, and its massive dome is a marvel of engineering.</p>

      <h3> Tickets </h3>
      <p> Tickets are available in person at the ticket counter at the Sultan Ahmed III Fountain. For 25€, you get access to the upper floor the mosque where the mosaics are. The lower floor of the mosque is closed for visitors and is for Turkish Muslims for prayer only.</p>
      <p> Skip-the-line tickets are also available online for an additional fee, but keep in mind there are separate lines to buy a ticket and for the security line to enter the mosque. You still have to wait in the security line even if you have a skip-the-line ticket. </p>

      <h3> Hours </h3>
      <p> The ticket window opens at 9, but the lines can be long so try to arrive at 8:30 or so. The mosque closes at 19:30 at night.</p>

      <h3> Dress Code </h3>
      <p> Women must cover their hair (headscarf). Both men and women must cover shoulders and knees. Scarves are available for purchase nearby. </p>

      <h3> Inside Hagia Sophia </h3>
      {{image:hagia-sophia-5}}
      <p> The visiting area is the upper floor of the mosque and is a ∩ shape around what is pictured here. It is pretty small considering the 25€ admission fee.</p>

      <p> In Nov 2025, the scaffolding definitely detracts from the visual appeal of the building but it was the only way to keep the building open during renovations. The ground floor is for Turkish Muslims to pray only.</p>
      {{image:hagia-sophia-4}}

      {{image:hagia-sophia-1}}

      {{collapsible:title="Why do christian mosaics in the hagia sophia still exist in the mosque"}}
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
    slug: 'eminonu',
    title: 'Eminönü',
    date: '2025-11-22',
    summary: 'Exploring the bustling district of Eminönü, the heart of historic Istanbul.',
    content: `
        <p>Eminönü is a chaotic, vibrant, and utterly captivating district at the heart of old Istanbul. It is the southern end of the Galata Bridge and a major transportation hub, with ferry docks, bus stations, and a tram line all converging in one place. The area is a sensory overload in the best possible way, with the smell of roasting chestnuts and grilling fish, the cries of street vendors, and the constant flow of people.</p>

        <h3>The Spice Bazaar (Mısır Çarşısı)</h3>
        <p>One of the main attractions in Eminönü is the Spice Bazaar, a covered market that dates back to the 17th century. Here you can find a dazzling array of spices, teas, Turkish delight, nuts, and dried fruits. The air is thick with the scent of cinnamon, saffron, and a hundred other exotic aromas. It's a great place to pick up souvenirs or simply wander and take in the sights and smells.</p>

        <h3>The New Mosque (Yeni Cami)</h3>
        <p>Dominating the Eminönü skyline is the New Mosque, an impressive example of Ottoman imperial architecture. Despite its name, the mosque was completed in 1665. It is open to visitors outside of prayer times, and its interior is adorned with beautiful Iznik tiles.</p>

        <h3>Galata Bridge</h3>
        <p>The Galata Bridge spans the Golden Horn and connects Eminönü with the Karaköy (Galata) district. The upper level of the bridge is always crowded with fishermen, while the lower level is lined with seafood restaurants. It's a great place to watch the ferries go by and enjoy the view of the Bosphorus.</p>
        {{image:istanbul-cat-8}}
        <p>The cats of Istanbul are a famous and beloved part of the city, and you'll find them everywhere, including here, often hoping for a share of the fishermen's catch.</p>
      `,
    location: {
      lat: 41.0171,
      lng: 28.9760,
    },
    tag: 'Istanbul',
  }
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
  return [...new Set(tags)];
}

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug);
}
