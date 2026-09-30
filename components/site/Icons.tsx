import { Home, Building2, House, Store, Building, KeyRound, Paintbrush, Fence, type LucideProps } from "lucide-react";
import type { ServiceIcon as ServiceIconKey } from "@/lib/services";

const map = { home: Home, building: Building2, roof: House, store: Store, apartment: Building, key: KeyRound, brush: Paintbrush, deck: Fence };

export function ServiceIcon({ name, ...props }: { name: ServiceIconKey } & LucideProps) {
  const Icon = map[name];
  return <Icon {...props} />;
}

export function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-ochre" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

/** Decorative paint-swatch strip used as a brand signature. */
export function Swatches({ className = "" }: { className?: string }) {
  const colours = ["#2E8B47", "#D68A3A", "#E4D7C3", "#173526", "#8FB9A0"];
  return (
    <span className={`inline-flex overflow-hidden rounded-full ring-1 ring-ink/10 ${className}`} aria-hidden>
      {colours.map((c) => (
        <span key={c} className="h-2 w-6" style={{ background: c }} />
      ))}
    </span>
  );
}
