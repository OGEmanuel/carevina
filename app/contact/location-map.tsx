'use client';

import mapboxgl from 'mapbox-gl';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const LocationMap = () => {
  const mapRef = useRef<HTMLAnchorElement>(null);

  const lat = 38.26406155870091;
  const lng = -76.45540718465804;

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN!,
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom: 14,
    });

    map.on('load', () => {
      map.resize();
      map.setCenter([lng, lat]);
    });

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[1440px] px-5 py-8 md:px-16 md:py-16 lg:px-20">
        <Link
          href="https://www.google.com/maps/place/46940+S+Shangri-La+Dr+100+13,+Lexington+Park,+MD+20653,+USA/@38.2639352,-76.458025,17z/data=!3m1!4b1!4m5!3m4!1s0x89b9df5f9a432307:0x8483df5876098f5d!8m2!3d38.2639352!4d-76.4554501?authuser=0&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
          target="_blank"
          rel="noopener noreferrer"
          ref={mapRef}
          className="block h-100 w-full overflow-hidden rounded-3xl bg-[#868686] lg:h-140"
        ></Link>
      </div>
    </section>
  );
};

export default LocationMap;
