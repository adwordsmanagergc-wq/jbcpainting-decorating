import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl font-semibold">This page needs a fresh coat</h1>
      <p className="lead mt-4 max-w-md">We couldn&rsquo;t find that page. Try our services or service areas instead.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primary">Home</Link>
        <Link href="/areas" className="btn-ghost">Service areas</Link>
      </div>
    </section>
  );
}
