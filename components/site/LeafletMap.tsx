"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export type Pin = { name: string; slug: string; lat: number; lng: number };

export default function LeafletMap({ pins, activeSlug, focusSlugs, height = 520 }: { pins: Pin[]; activeSlug?: string; focusSlugs?: string[]; height?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;
    import("leaflet").then((L) => {
      if (cancelled || !ref.current) return;
      map = L.map(ref.current, { scrollWheelZoom: false, attributionControl: true });
      // OpenStreetMap tiles: free, no API key. Softened to a light, muted look via .jbc-tiles in globals.css.
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        className: "jbc-tiles",
      }).addTo(map);

      const focus = focusSlugs?.length ? pins.filter((p) => focusSlugs.includes(p.slug)) : pins;
      map.fitBounds(L.latLngBounds(focus.map((p) => [p.lat, p.lng])), { padding: [40, 40], maxZoom: 13 });

      pins.forEach((p) => {
        const active = p.slug === activeSlug;
        const marker = L.circleMarker([p.lat, p.lng], {
          radius: active ? 10 : pins.length > 60 ? 5 : 7,
          color: "#fff",
          weight: 2,
          fillColor: active ? "#D68A3A" : "#2E8B47",
          fillOpacity: 1,
        }).addTo(map!);
        marker.bindTooltip(`Painter ${p.name}`, { permanent: active, direction: "top", offset: [0, -8], className: "jbc-tip" });
        marker.on("click", () => (window.location.href = `/painter/${p.slug}`));
        marker.on("mouseover", () => marker.setRadius(10));
        marker.on("mouseout", () => marker.setRadius(active ? 10 : pins.length > 60 ? 5 : 7));
      });
    });
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [pins, activeSlug, focusSlugs]);

  return <div ref={ref} style={{ height }} className="w-full" />;
}
