import Link from "next/link";
import { business } from "@/lib/business";

const logo =
  "https://019dd2de-2dde-76b6-a072-f34ccc1f4bc2.mochausercontent.com/WhatsApp-Image-2026-05-01-at-19.04.08-(1).jpeg";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Areas", href: "/#areas" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQs", href: "/#faqs" },
  { label: "Contact", href: "/#contact" },
];

export default function SuburbLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FDF8F3]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Google Fonts for suburb pages */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" aria-label="JBC Painting & Decorating — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt="JBC Painting & Decorating Logo"
                className="h-10 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#4CAF50] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <a
                href={business.phoneHref}
                className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#4CAF50] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#4CAF50]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.6 5.1 2 2 0 0 1 3.6 2.93h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.5a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18l.19-1.08z" />
                </svg>
                {business.phone}
              </a>
              <Link
                href="/#contact"
                className="bg-[#4CAF50] hover:bg-[#1a1a1a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Free Quote
              </Link>
              {/* Mobile call button */}
              <a
                href={business.phoneHref}
                className="sm:hidden flex items-center gap-1 bg-[#4CAF50] hover:bg-[#3d8b40] text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                aria-label="Call us"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.6 5.1 2 2 0 0 1 3.6 2.93h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.5a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18l.19-1.08z" />
                </svg>
                Call
              </a>
            </div>
          </div>
        </div>
      </header>

      {children}

      {/* Footer */}
      <footer className="bg-[#1a252f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <Link href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo}
                  alt="JBC Painting & Decorating"
                  className="h-12 w-auto mb-4"
                />
              </Link>
              <p className="text-gray-400 text-sm mb-4 max-w-sm">
                Professional painting and decorating services for homes and businesses across the Central Coast. Quality workmanship, premium paints, exceptional service.
              </p>
              <p className="text-gray-500 text-xs">ABN: {business.abn}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4CAF50] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.6 5.1 2 2 0 0 1 3.6 2.93h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.5a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18l.19-1.08z" />
                  </svg>
                  <a href={business.phoneHref} className="hover:text-white transition-colors">
                    {business.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4CAF50] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                    {business.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#4CAF50] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{business.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} JBC Painting &amp; Decorating. All rights reserved. {business.licenseNumber}.</p>
          </div>
        </div>
      </footer>

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.25-1.44l-.37-.22-3.85 1.01 1.03-3.74-.24-.39A9.96 9.96 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.47-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17 0-.37-.02-.57-.02s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </a>
        <a
          href={business.phoneHref}
          className="w-14 h-14 bg-[#4CAF50] hover:bg-[#3d8b40] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Call us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.6 5.1 2 2 0 0 1 3.6 2.93h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.5a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18l.19-1.08z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
