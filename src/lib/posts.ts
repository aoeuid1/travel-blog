
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
    title: 'Theodosian Walls of Constantinople',
    summary: 'A walk along the ancient land walls of Istanbul',
    date: '2025-11-23',
    imageId: 'walls-of-constantinople-1',
    content: `
    <p>The Walls of Constantinople are a series of defensive stone walls that surrounded and protected the city of Constantinople since its founding as the new capital of the Roman Empire by Constantine the Great. The most famous part of the walls is the triple line of the Theodosian Walls, built in the 5th century by Emperor Theodosius II. </p>
    <p> With numerous additions and modifications during their history, they were considered impregnable for nearly a millenia and survived over 20 sieges before finally succumbing to the cannons of cannons of the Ottoman Sultan Mehmed II in 1453, leading to the fall of the city. </p>
    <p> Pictured above is a depiction from Fausto Zonaro (1854-1929) of Sultan Mehmed II entering the city.</p>
    {{image:walls-of-constantinople-2}}
      <p>Today, much of the Theodosian Walls still stand, and a walk along their length is a journey through history. You can see the original gates, towers, and fortifications, and imagine what it must have been like to defend the city against invaders. Along the way, you'll also encounter parks, cemeteries, and vibrant neighborhoods, offering a glimpse into the daily life of Istanbul.</p>
      <p> The best way to see the walls is to start from the Yedikule Fortress on the southern end of the walls, and follow the walls northwards. Yedikule Fortress and some of the gates are designed for tourists, but much of the path along the walls follows a small road with some industrial activity alongside it. It was also a pretty long trek, so unless you're like me and really enjoy walking, you might prefer to go by taxi or find a tour group to drive you to key sites.</p>

      {{image:walls-of-constantinople-3}}
      {{image:walls-of-constantinople-4}}
      <p> Sosyal Tesisleri is a chain of government sponsored, non profit restaurants opened to ensure people can still enjoy a nice meal despite the tourism-driven inflation in Istanbul. This one, near the Belgrade Gate (Belgradkapi), is part of a push to revive this area. At these restaurants, you can find local Turkish fare at prices 30-50% less than an equivalent restaurant. The Belgrade Gate and nearby walls are also the subject of extensive restoration efforts. </p>
      {{image:walls-of-constantinople-5}}


      <p> The Gate of St. Romanus, located in a low point in the valley, was the weak point in the walls of Constantinople. On 29 May 1453, after weeks of bombardment, Ottoman cannons finally opened up an opening here. As Ottoman janissaries charged into the gap, in desperation, the last Byzantine emperor Constantine XI Palaiologos stripped off his regalia and charged into the melee here. Despite his heroic last stand, he was never seen again. With him, the city fell, the Byzantine empire fell, and the Roman empire was no more. </p>
      `,
    location: {
      lat: 41.026,
      lng: 28.922,
    },
    tag: 'Istanbul',
  },
  {
    slug: 'stalin-museum-gori',
    title: 'Stalin Museum in Gori: Man, Myth, Legend?',
    summary: 'The controversial Stalin Museum in Gori celebrates Stalin\'s life and accomplishments.',
    date: '2025-12-01',
    imageId: 'stalin-museum-1',
    content: `
      <p>Gori, a small city in Georgia, holds the controversial distinction of being the birthplace of Joseph Stalin, Soviet leader from 1924-1953. Dominating the town square is the Joseph Stalin Museum, a shrine dedicated to his life and accomplishments.</p>

      <p>In Gori, Stalin is revered as a hometown hero: the local boy from humble origins who made it big, not only accumulating a vast amount of power, but also saving his country and the world by defeating the Nazis and winning WWII. This is also how he is portrayed at the museum. The museum was opened during Soviet times and has remained largely unchanged.</p>

      <p>Outside of Georgia, Stalin is of course a far more controversial character. Between the Gulags, the purges, and the Holodomor, there are certainly many darker aspects of his rule. The museum largely glosses over all of these topics to focus on the positives. The museum added a small room recently that discusses his controversies but I only learned of it after leaving the museum - it was not clearly marked.</p>

      <p>In my opinion, the Stalin Museum was very worth visiting despite the historical omissions: not as a place to find an accurate history lesson about Stalin's life, but more as a fascinating look at how history is written and remembered. The museum paints a believable, cohesive view of his life, and if you visited the museum without outside knowledge of Stalin's controversial policies, I believe the museum would convince you Stalin was indisputably a hero or even a saint.</p>

      <p>The museum complex consists of three parts: the main building, which houses a vast collection of artifacts related to Stalin's life; the small wooden house where Stalin was born and spent his first four years; and his personal armored railway carriage, which he used for travel, including his trip to the Yalta Conference.</p>

      {{image:stalin-museum-5}}
      {{image:stalin-museum-4}}

      {{image:stalin-museum-3}}
      <p> The museum is largely inaccessible for English speakers, as most of the text is written in Georgian and Russian (pictured above). There are some labels in English, but I found them largely unhelpful. For example, a newspaper article about Stalin might have a Russian original and a Georgian translation with only an English label next to it like: "Newspaper article about Stalin: 1937" with no explanation about the contents or significance of the piece. </p>

      <p> Thankfully, there is perfect SIM coverage at the museum so I was able to ask Gemini/ChatGPT to read and translate the displays. It was able to not only translate, but also would often add some fascinating and much needed additional context to the displays. For example, the museum has a panel about how Stalin wasn't power hungry because he tried repeatedly to resign but the Central Committee wouldn't let him. In addition to translating the panel, Gemini was able to add some important context not mentioned in the museum that the resignation votes were really loyalty tests and everyone knew voting to let him resign would lead to getting purged for disloyalty. I did not have a guide, but I doubt a guide hired at the Stalin Museum would tell you about the purges.</p>

      <p> After leaving the museum, I asked my Georgian taxi driver what he thought of the museum. He said Stalin was popular in Gori as a strong leader who did a lot of good especially in winning WWII. I suggested that some people such as the Ukrainians might disagree with that view, and he started a monologue about how the current war in Ukraine is Zelensky's fault, how it is Russia punishing Ukraine for "bad behavior", and how it never would have happened if Stalin was president of Ukraine.</p>
      
      <p> He then asked me who I thought was a better leader, Zelensky or Stalin. Not wanting to stir up any more controversy, I answered that Zelensky's legacy would be written when he left office. He didn't seem satisfied with that answer, but I was relieved that was the end of that conversation. It was an important reminder that not everyone sees the world as I do from the US. It also reiterated my main takeaway from the museum: history and current events are written the way people want to see them.</p>

      {{image:stalin-museum-6}}
    `,
    location: {
      lat: 41.9863,
      lng: 44.1156,
    },
    tag: 'Georgia',
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
