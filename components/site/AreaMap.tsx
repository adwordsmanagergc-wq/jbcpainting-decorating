"use client";

import dynamic from "next/dynamic";
import type { Pin } from "./LeafletMap";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <div className="h-full min-h-[420px] w-full animate-pulse bg-cream-200" />,
});

export function AreaMap(props: { pins: Pin[]; activeSlug?: string; focusSlugs?: string[]; height?: number }) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-ink/5">
      <LeafletMap {...props} />
    </div>
  );
}
