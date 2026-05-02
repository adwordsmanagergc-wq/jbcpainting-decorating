"use client";

import { useEffect, useRef } from "react";

interface SuburbPin {
  name: string;
  slug: string;
  lat: number;
  lng: number;
}

const suburbPins: SuburbPin[] = [
  { name: "Kariong",            slug: "kariong",             lat: -33.4167, lng: 151.3167 },
  { name: "West Gosford",       slug: "west-gosford",        lat: -33.4167, lng: 151.3333 },
  { name: "Point Clare",        slug: "point-clare",         lat: -33.4333, lng: 151.3500 },
  { name: "Tascott",            slug: "tascott",             lat: -33.4500, lng: 151.3500 },
  { name: "Koolewong",          slug: "koolewong",           lat: -33.4667, lng: 151.3500 },
  { name: "Woy Woy Bay",        slug: "woy-woy-bay",         lat: -33.4833, lng: 151.3333 },
  { name: "Woy Woy",            slug: "woy-woy",             lat: -33.5167, lng: 151.3167 },
  { name: "Phegans Bay",        slug: "phegans-bay",         lat: -33.4833, lng: 151.3500 },
  { name: "Horsfield Bay",      slug: "horsfield-bay",       lat: -33.4667, lng: 151.3333 },
  { name: "Somersby",           slug: "somersby",            lat: -33.3833, lng: 151.3000 },
  { name: "Calga",              slug: "calga",               lat: -33.3667, lng: 151.2833 },
  { name: "Mooney Mooney Creek",slug: "mooney-mooney-creek", lat: -33.4000, lng: 151.2500 },
  { name: "Wondabyne",          slug: "wondabyne",           lat: -33.5167, lng: 151.2833 },
  { name: "Umina Beach",        slug: "umina-beach",         lat: -33.5167, lng: 151.3000 },
  { name: "Terrigal",           slug: "terrigal",            lat: -33.4500, lng: 151.4500 },
  { name: "Erina",              slug: "erina",               lat: -33.4333, lng: 151.4000 },
];

export default function SuburbMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Inject Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [-33.45, 151.35],
        zoom: 11,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });

      mapRef.current = map;

      // Clean light CartoDB tiles
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19,
        }
      ).addTo(map);

      // Fit map to all markers with padding
      const bounds = L.latLngBounds(suburbPins.map((s) => [s.lat, s.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });

      suburbPins.forEach((suburb) => {
        const icon = L.divIcon({
          html: `
            <a
              href="/painter/${suburb.slug}"
              class="suburb-pin"
              style="
                display: inline-block;
                background: #4CAF50;
                color: white;
                padding: 5px 11px;
                border-radius: 9999px;
                font-size: 11.5px;
                font-weight: 700;
                white-space: nowrap;
                box-shadow: 0 2px 10px rgba(76,175,80,0.45);
                text-decoration: none;
                font-family: Inter, Arial, sans-serif;
                letter-spacing: 0.2px;
                border: 2px solid rgba(255,255,255,0.8);
                transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
                cursor: pointer;
              "
              onmouseover="this.style.background='#1a1a1a';this.style.transform='scale(1.1)';this.style.boxShadow='0 4px 16px rgba(0,0,0,0.35)'"
              onmouseout="this.style.background='#4CAF50';this.style.transform='scale(1)';this.style.boxShadow='0 2px 10px rgba(76,175,80,0.45)'"
            >${suburb.name}</a>
          `,
          className: "",
          iconSize: [0, 0],
          iconAnchor: [0, 10],
        });

        L.marker([suburb.lat, suburb.lng], { icon }).addTo(map);
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      {/* Map container */}
      <div ref={containerRef} style={{ height: "520px" }} className="w-full" />

      {/* Overlay legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg text-xs text-gray-700 font-medium pointer-events-none z-[1000]">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-3 h-3 rounded-full bg-[#4CAF50] inline-block" />
          Click a suburb to see our services there
        </div>
        <div className="text-gray-400 text-[10px]">Scroll to zoom · Drag to pan</div>
      </div>
    </div>
  );
}
