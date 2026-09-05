"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Hero" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
];

export default function SectionPager() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "-15% 0px -45%" }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <ol className="relative flex flex-col items-center gap-7">
        <span className="absolute top-3 bottom-3 w-px bg-cyan-400/20" aria-hidden="true" />
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id} className="relative z-10">
              <a
                href={`#${section.id}`}
                aria-label={`Go to ${section.label}`}
                title={section.label}
                className={`group flex h-9 w-9 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
                  isActive
                    ? "border-cyan-400 bg-black text-cyan-300 shadow-[0_0_10px_rgba(32,178,170,0.9),0_0_28px_rgba(32,178,170,0.45)]"
                    : "border-white/20 bg-black/80 text-white/45 hover:border-cyan-400/70 hover:text-cyan-300 hover:shadow-[0_0_18px_rgba(32,178,170,0.45)]"
                }`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span
                  className={`absolute -left-1 h-1.5 w-1.5 rounded-full bg-cyan-400 transition-all duration-300 ${
                    isActive ? "opacity-100 shadow-[0_0_10px_#20B2AA]" : "opacity-0 group-hover:opacity-100"
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
