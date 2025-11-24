'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Post } from '@/lib/posts';
import Link from 'next/link';
import L from 'leaflet';
import { useMemo, useEffect } from 'react';

// Hack to fix the default icon path in Leaflet
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function GroupedMarker({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;

  if (posts.length > 1) {
    const lats = posts.map(p => p.location?.lat || 0).filter(Boolean);
    const lngs = posts.map(p => p.location?.lng || 0).filter(Boolean);
    const avgLat = lats.reduce((a, b) => a + b, 0) / lats.length;
    const avgLng = lngs.reduce((a, b) => a + b, 0) / lngs.length;

    return (
      <Marker position={[avgLat, avgLng]}>
        <Popup>
          <Link href={`/tags/${posts[0].tag}`}>
            {posts[0].tag} - {posts.length} posts
          </Link>
        </Popup>
      </Marker>
    );
  }

  const post = posts[0];
  if (!post.location) return null;

  return (
    <Marker position={[post.location.lat, post.location.lng]}>
      <Popup>
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </Popup>
    </Marker>
  );
}

function FitBounds({ posts }: { posts: Post[] }) {
  const map = useMap();
  useEffect(() => {
    const postsWithLocation = posts.filter(p => p.location);
    if (postsWithLocation.length > 0) {
      const bounds = L.latLngBounds(postsWithLocation.map(post => [post.location!.lat, post.location!.lng]));
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }
  }, [posts, map]);
  return null;
}

export default function WorldMap({ posts, fitBounds }: { posts: Post[], fitBounds?: boolean }) {
  const markersToRender = useMemo(() => {
    if (fitBounds) {
      return posts.map(post => [post]);
    }

    const groups: { [key: string]: Post[] } = {};
    posts.forEach(post => {
      if (post.tag) {
        if (!groups[post.tag]) {
          groups[post.tag] = [];
        }
        groups[post.tag].push(post);
      } else {
        if (post.location) {
          groups[post.slug] = [post];
        }
      }
    });
    return Object.values(groups);
  }, [posts, fitBounds]);

  return (
    <div>
      <h2 className="text-2xl font-bold font-headline tracking-tight mb-4">Destinations</h2>
      <MapContainer center={[20, 0]} zoom={2} className="h-96 w-full">
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          attribution="&copy; Google"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
        {markersToRender.map((postGroup, index) => (
          <GroupedMarker key={index} posts={postGroup} />
        ))}
        {fitBounds && <FitBounds posts={posts} />}
      </MapContainer>
    </div>
  );
}
