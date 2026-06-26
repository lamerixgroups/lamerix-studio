import Image from "next/image";
import Link from "next/link";

import { HiHeart } from "react-icons/hi";

import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone
} from "react-icons/hi";

import {
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* ================= FOOTER ================= */}

<footer className="relative bg-black px-8 lg:px-10 pb-10 overflow-hidden">

  <div className="max-w-[1700px] mx-auto">

    {/* Glow Divider */}

    <div className="relative py-8">

  {/* Fade Line */}
  <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/90 to-transparent"></div>

  {/* Animated Star */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

    <div className="relative flex items-center justify-center animate-pulse">

      <div className="absolute w-10 h-10 bg-cyan-400/20 blur-xl rounded-full"></div>

      <div className="text-cyan-400 text-lg drop-shadow-[0_0_15px_rgba(0,255,255,1)]">
        ✦
      </div>

    </div>

  </div>

</div>

    {/* Main Footer */}

    <div className="relative border border-cyan-400/20 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.03),transparent_70%)] backdrop-blur-md p-2 lg:p-2 overflow-hidden">

     <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-2">

        {/* Column 1 */}

<div
  className="relative overflow-hidden min-h-[220px] flex flex-col justify-start"
  style={{
    backgroundImage: "url('/images/footer-wave-bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundSize: "cover",
  }}
>

  <h2 className="text-4xl font-light tracking-[3px] mb-2 relative z-10">
    LAMERIX
  </h2>

  <div className="w-10 h-[2px] bg-cyan-400 mb-8 relative z-10"></div>

  <p className="text-white/90 leading-6 max-w-[380px] relative z-10">
    We create premium digital experiences through
    design, technology and creativity.
    Turning ideas into visual excellence.
  </p>

</div>

        {/* Services */}

        <div className="lg:border-l lg:border-white/10 lg:pl-10">

          <h3 className="text-cyan-400 tracking-[3px] uppercase text-sm mb-8 font-semibold">
            Services
            <div className="w-8 h-[2px] bg-cyan-400 mt-3 mb-0"></div>
            
          </h3>

          <div className="space-y-6">

            <a href="#" className="group flex items-center gap-32 text-white/80 hover:text-cyan-400 transition">
              <span>Game Art</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

            <a href="#" className="group flex items-center gap-31 text-white/80 hover:text-cyan-400 transition">
              <span>Animation</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

            <a href="#" className="group flex items-center gap-26 text-white/80 hover:text-cyan-400 transition">
              <span>Visualization</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

            <a href="#" className="group flex items-center gap-25 text-white/80 hover:text-cyan-400 transition">
              <span>Development</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

            <a href="#" className="group flex items-center gap-27 text-white/80 hover:text-cyan-400 transition">
              <span>Architecture</span>
<span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>            </a>

          </div>

        </div>

        {/* Company */}

        <div>

          <h3 className="text-cyan-400 tracking-[3px] uppercase text-sm mb-8 font-semibold">
            Company
            <div className="w-8 h-[2px] bg-cyan-400 mt-3 mb-0"></div>
          </h3>

          <div className="space-y-6">

            <a href="#" className="group flex items-center gap-48 text-white/80 hover:text-cyan-400 transition">
              <span>Work</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

            <a href="#" className="group flex items-center gap-43 text-white/80 hover:text-cyan-400 transition">
              <span>Portfolio</span>
<span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>            </a>

            <a href="#" className="group flex items-center gap-43 text-white/80 hover:text-cyan-400 transition">
              <span>Process</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

            <a href="#" className="group flex items-center gap-47 text-white/80 hover:text-cyan-400 transition">
              <span>About</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

            <a href="#" className="group flex items-center gap-43 text-white/80 hover:text-cyan-400 transition">
              <span>Careers</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-cyan-400 tracking-[3px] uppercase text-sm mb-8 font-semibold">
            Quick Links
            <div className="w-8 h-[2px] bg-cyan-400 mt-3 mb-0"></div>
          </h3>

          <div className="space-y-6">

            <a href="#" className="group flex items-center gap-45 text-white/80 hover:text-cyan-400 transition">
              <span>Home</span>
<span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>            </a>

            <a href="#" className="group flex items-center gap-34 text-white/80 hover:text-cyan-400 transition">
              <span>Testimonials</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

            <a href="#" className="group flex items-center gap-48 text-white/80 hover:text-cyan-400 transition">
              <span>FAQ</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

            <a href="#" className="group flex items-center gap-31 text-white/80 hover:text-cyan-400 transition">
              <span>Privacy Policy</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

            <a href="#" className="group flex items-center gap-21 text-white/80 hover:text-cyan-400 transition">
              <span>Terms & Conditions</span>
              <span className="text-cyan-400 group-hover:translate-x-2 transition-all duration-300">
  →
</span>
            </a>

          </div>

        </div>

        {/* Contact */}

<div className="lg:border-l lg:border-white/10 lg:pl-10">

  <h3 className="text-cyan-400 tracking-[3px] uppercase text-sm mb-8 font-semibold">
    Let's Connect
    <div className="w-8 h-[2px] bg-cyan-400 mt-3"></div>
  </h3>

  <div className="space-y-4">

    <div className="flex items-center gap-3 text-white/80">
      <HiOutlineMail className="text-cyan-400 text-xl" />
      <span>info@lamerix.com</span>
    </div>

    <div className="flex items-center gap-3 text-white/80">
      <HiOutlineLocationMarker className="text-cyan-400 text-xl" />
      <span>Indore, Madhya Pradesh, India</span>
    </div>

    <div className="flex items-center gap-3 text-white/80">
      <HiOutlinePhone className="text-cyan-400 text-xl" />
      <span>+91 74475 51869</span>
    </div>

  </div>

  <hr className="border-cyan-400/10 my-6" />

  <h4 className="text-cyan-400 tracking-[3px] uppercase text-sm mb-4 font-semibold">
    Follow Us
  </h4>

  <div className="flex gap-3">

    <a
      href="#"
      className="w-12 h-12 border border-cyan-400/20 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="#"
      className="w-12 h-12 border border-cyan-400/20 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition"
    >
      <FaInstagram />
    </a>

    <a
      href="#"
      className="w-12 h-12 border border-cyan-400/20 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition"
    >
      <FaBehance />
    </a>

    <a
      href="#"
      className="w-12 h-12 border border-cyan-400/20 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition"
    >
      <FaYoutube />
    </a>

  </div>

</div>

</div> {/* Contact End */}

</div> {/* Grid End */}

         {/* Bottom Bar */}

  <div className="grid lg:grid-cols-3 items-center">

    {/* Left */}

    <div className="text-white/40 text-sm">
      © 2026 Lamerix Studio. All Rights Reserved.
    </div>

    {/* Center */}

    <div className="flex justify-center items-center gap-8 py-4">

  <div className="h-px w-72 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

  <img
    src="/images/logo-icon.png"
    alt="Lamerix"
    className="h-10 opacity-100 drop-shadow-[0_0_15px_rgba(0,255,255,0.0)]"
  />

  <div className="h-px w-72 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

</div>

    {/* Right */}

    <div className="flex justify-end items-center gap-3 text-white/40 text-sm">

  <span>
    Made with passion, creativity & innovation.
  </span>

  <HiHeart
    className="
      text-cyan-400
      text-xl
      animate-pulse
      drop-shadow-[0_0_12px_rgba(0,255,255,0.8)]
    "
  />

</div>

  </div>

</div>

</footer>
    </>
  )
}


