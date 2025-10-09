import { useState } from "react";

import { EdmondsSection } from "./components/edmondsSection";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import Gallery from "./components/gallery";
import ferryPhoto from "./assets/edmonds-ferry.webp";

export const Button = ({ href = "#", children, className = "" }) => (
  <a
    href={href}
    className={`inline-block rounded-md bg-teal-800 px-6 py-3 text-base font-semibold text-white shadow-sm transition-transform duration-200 ease-in-out hover:scale-105 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 ${className}`}
  >
    {children}
  </a>
);

/**
 * A responsive container for content sections with alternating backgrounds.
 */
const Section = ({ id, title, subtitle, children, className = "" }) => (
  <section
    id={id}
    className={`scroll-mt-20 py-20 md:py-28 ${className}`}
    aria-labelledby={`heading-${id}`}
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {(title || subtitle) && (
        <header className="mb-12 max-w-3xl">
          {title && (
            <h2
              id={`heading-${id}`}
              className="font-serif text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </div>
  </section>
);

/**
 * A responsive top navigation bar with updated branding.
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Gallery", "gallery"],
    ["About Edmonds", "edmonds"],
    ["Contact", "contact"],
  ];

  return (
    <nav
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg"
      aria-label="Main Navigation"
    >

      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-baseline">
          <span className="text-xl font-bold text-slate-900">
            The Waterfront Law Center
          </span>
          <span className="ml-2 hidden text-base font-normal text-slate-500 sm:inline">
            | Edmonds, WA
          </span>
        </a>

        <button
          className="group inline-flex h-12 w-12 items-center justify-center rounded-lg md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <svg
            className="h-6 w-6 stroke-slate-700 group-hover:stroke-teal-700"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <ul className="hidden items-center gap-x-8 md:flex" role="menubar">
          {links.map(([label, id]) => (
            <li key={id} role="none">
              <a
                href={`#${id}`}
                className="text-md font-semibold text-slate-600 transition-colors hover:text-teal-700"
                role="menuitem"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="flex flex-col space-y-2 border-t border-slate-200/80 px-4 py-4 md:hidden">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-teal-700"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

/**
 * An optimized image component for the hero ferry image.
 */
const Img = ({ src = ferryPhoto, alt, width, height, className = "" }) => {
  if (!alt) {
    console.warn("Image is missing alt text for accessibility");
  }

  return (
    <img
      loading="eager"
      alt={alt || ""}
      src={src}
      decoding="sync"
      fetchpriority="high"
      className={`w-full ${className}`}
      style={{
        ...(width && height ? {} : { aspectRatio: "16/9" }),
        imageRendering: "-webkit-optimize-contrast",
      }}
    />
  );
};

// --- MAIN APP COMPONENT -----------------------------------------------------

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-50 font-sans text-slate-800 antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:py-2 focus:px-4 focus:bg-teal-600 focus:text-white focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar />

      <main id="#main-content">
        {/* Hero */}
        <header
          id="home"
          className="relative flex min-h-[100vh] items-center justify-center isolate overflow-hidden"
        >
          <div className="absolute inset-0 -z-10" aria-hidden="true">
            <Img
              alt="The iconic green and white Washington State Ferry docked in Edmonds, with Puget Sound in the background."
              src={ferryPhoto}
              className="h-full w-full object-cover"
            />
            {/* This dark, semi-transparent layer sits on top of the image but behind the text. */}
            <div className="absolute inset-0 bg-slate-900/70" />
          </div>

          <div className="mx-auto max-w-3xl px-4 text-center">
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-shadow-lg/30">
              The Waterfront Law Center
            </h1>

            <p className="relative z-10 mt-6 mx-auto max-w-prose text-lg leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] md:text-[22px] tracking-normal">
              A Virtual Office Exclusively for Lawyers. Offering client meeting
              spaces and professional services for sole-practitioners and small
              firms, conveniently located next to the Edmonds-Kingston Ferry,
              the Amtrak Station, Sound Transit facilities, and the community
              transit center.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {/* Buttons can be restyled for better contrast if needed, but the default should work well. */}
              <Button href="#contact">Schedule a Visit</Button>
              <a
                href="#about"
                className="font-semibold text-white transition-colors hover:text-slate-200"
                aria-label="Learn more about the Waterfront Law Center"
              >
                About the Waterfront Law Center &rarr;
              </a>
            </div>
          </div>
        </header>

        {/* About & Amenities */}
        <Section
          id="about"
          title="About the Waterfront Law Center"
          className="bg-white"
        >
          <About />
        </Section>

        {/* Gallery */}
        <Section id="gallery" title="A Glimpse Inside">
          <Gallery />
        </Section>

        {/* About Edmonds */}
        <Section id="edmonds" title="About Edmonds" className="bg-slate-100">
          <EdmondsSection />
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact Us" className=" bg-white">
          <Contact />
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-sm text-slate-600 md:flex-row md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Waterfront Law Center. All Rights
            Reserved.
          </p>
          <address className="not-italic">
            Next to the Edmonds-Kingston Ferry • Amtrak & Sounder Rail
          </address>
        </div>
      </footer>
    </div>
  );
}
