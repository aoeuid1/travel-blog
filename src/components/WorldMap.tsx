'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Post } from '@/lib/posts';
import Link from 'next/link';
import L from 'leaflet';

// Hack to fix the default icon path in Leaflet
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function WorldMap({ posts }: { posts: Post[] }) {
  return (
    <MapContainer center={[20, 0]} zoom={2} className="h-96 w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {posts.map((post) => (
        post.location && (
          <Marker key={post.slug} position={[post.location.lat, post.location.lng]}>
            <Popup>
              <Link href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
}
