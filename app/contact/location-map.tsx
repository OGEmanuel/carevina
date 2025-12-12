'use client';

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const lat = 6.633363731471482;
  const lng = 3.3743578854543097;

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new mapboxgl.Map({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN!,
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat], // initial center
      zoom: 14,
    });

    map.on('load', () => {
      map.resize(); // ensures correct container size
      map.setCenter([lng, lat]); // centers relative to container
    });

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[1440px] px-5 py-8 md:px-16 md:py-16 lg:px-20">
        <div
          ref={mapRef}
          className="h-100 w-full overflow-hidden rounded-3xl bg-[#868686] lg:h-140"
        ></div>
      </div>
    </section>
  );
};

export default LocationMap;
