"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      {/* ================= HEADER ================= */}

      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">

        <div className="w-full px-6 h-[88px] flex items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center relative left-[-8px]">

  <Image
    src="/images/logo.jpg"
    alt="LAMERIX Studio"
    width={400}
    height={150}
    priority
    className="h-24 w-auto object-contain"
  />

</Link>

          {/* Menu */}

          <nav className="hidden lg:flex gap-14 text-sm uppercase tracking-[4px]">

  <Link href="/#services">
  Services
</Link>

  <Link
  href="/portfolio"
  className={
    pathname === "/portfolio"
      ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]"
      : "text-white hover:text-cyan-400 transition-all"
  }
>
  Portfolio
</Link>

  <Link href="/#process">
  Process
</Link>
  
  <Link
  href="/about"
  className={
    pathname === "/about"
      ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]"
      : "text-white hover:text-cyan-400 transition-all"
  }
>
  About
</Link>

  <Link href="/contact">Contact</Link>

</nav>

          {/* CTA */}

<Link href="/contact#contact-form">

  <button className="border border-cyan-400 text-cyan-400 px-8 py-4 tracking-[3px] uppercase transition-all hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,255,255,0.35)]">

    Start A Project →

  </button>

</Link>

        </div>

      </header>
    </>
  )
}