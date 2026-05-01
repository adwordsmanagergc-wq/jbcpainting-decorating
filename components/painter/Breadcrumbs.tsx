import Link from "next/link";

export function Breadcrumbs({ suburb }: { suburb: string }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li><Link href="/" className="hover:text-[#4CAF50] transition-colors">Home</Link></li>
        <li>/</li>
        <li><Link href="/#areas" className="hover:text-[#4CAF50] transition-colors">Painter</Link></li>
        <li>/</li>
        <li className="text-gray-800 font-medium">{suburb}</li>
      </ol>
    </nav>
  );
}
