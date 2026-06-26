import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export default function Home() {
  return (
    <main className="bg-black text-white">

<Header />

      {/* ================= HERO ================= */}

      <section className="relative h-[100vh] overflow-hidden">

        {/* Background Image */}

        <Image
          src="/images/futuristic-cyber-hub-v4.png"
          alt="LAMERIX Studio"
          fill
          priority
          className="object-cover object-center brightness-110 contrast-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

        {/* Content */}

        <div className="relative z-20 w-full px-8 lg:px-10 pt-[140px]">

          <p className="text-cyan-400 uppercase tracking-[8px] text-xs mb-8">

            Digital Creative Studio

          </p>

          <h1 className="font-light leading-[0.9] tracking-[-3px] mt-24">

            <span className="block text-[64px] lg:text-[78px]">
              WE CREATE
            </span>

            <span className="block text-cyan-400 text-[64px] lg:text-[78px]">
              DIGITAL WORLDS
            </span>

            <span className="block text-[64px] lg:text-[78px]">
              & EXPERIENCES
            </span>

          </h1>

          <p className="mt-10 text-xl text-white/75 max-w-[520px] leading-8">

            Game Art, Animation, Product Visualization and
            Interactive Content for Global Brands and Studios.

          </p>

          <div className="flex gap-6 mt-30">

            <Link href="/portfolio">

  <button
    className="
      border
      border-cyan-400
      text-cyan-400
      px-12
      py-5
      tracking-[4px]
      uppercase
      transition-all
      duration-300
      hover:bg-cyan-400/10
      hover:shadow-[0_0_25px_rgba(0,255,255,.35)]
    "
  >

    VIEW WORK →

  </button>

</Link>

            <Link href="/contact#contact-form">

  <button className="border border-cyan-400 text-cyan-400 px-8 py-4 tracking-[3px] uppercase transition-all hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,255,255,0.35)]">

    Start A Project →

  </button>

</Link>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section 
      id="services"
      className="py-10 px-8 lg:px-10 bg-black">

        <div className="max-w-[1700px] mx-auto">

          <div className="flex justify-between items-center mb-24">

            <div>

              <p className="text-cyan-400 text-xs tracking-[5px] uppercase mb-3">
                What We Do
              </p>

              <h2 className="text-6xl font-light">
                SERVICES
              </h2>

            </div>

            <a
              href="#"
              className="text-cyan-400 tracking-[3px] uppercase"
            >
              View All Services →
            </a>

          </div>

          <div className="grid lg:grid-cols-4 gap-8 -mt-16">

            {/* Card 1 */}

<div className="group relative border border-white/10 min-h-[380px] overflow-hidden bg-black transition-all duration-500 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(62,214,200,0.15)]">

  {/* Background Image */}

  <Image
    src="/images/services/game-art.png"
    alt="Game Art"
    fill
    className="object-cover object-[75%_center] transition-transform duration-700 group-hover:scale-105"
  />

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

  {/* Card Content */}

  <div className="relative z-10 h-full p-8 flex flex-col">

    {/* Number */}

    <div className="absolute top-8 right-8 text-white/30 text-xl">
      
    </div>

    {/* Title */}

    <h3 className="text-[28px] tracking-[1px] uppercase">
      GAME ART
    </h3>

    {/* Description */}

    <p className="mt-6 text-white/70 leading-8 max-w-[170px]">
      Characters,
      Environments
      & Game Assets.
    </p>

    {/* Explore */}

    <div className="mt-auto">

      <a
        href="#"
        className="text-cyan-400 uppercase tracking-[3px]"
      >
        Explore →
      </a>

    </div>

  </div>

</div>

            {/* Card 2 */}

            <div className="group relative border border-white/10 min-h-[380px] overflow-hidden bg-black transition-all duration-500 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(62,214,200,0.15)]">

  {/* Background Image */}

  <Image
    src="/images/services/animation.png"
    alt="ANIMATION"
    fill
    className="object-cover object-[75%_center] transition-transform duration-700 group-hover:scale-105"
  />

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

  {/* Card Content */}

  <div className="relative z-10 h-full p-8 flex flex-col">

    {/* Number */}

    <div className="absolute top-8 right-8 text-white/30 text-xl">
  
    </div>

    {/* Title */}

    <h3 className="text-[28px] tracking-[1px] uppercase">
      ANIMATION
    </h3>

    {/* Description */}

    <p className="mt-6 text-white/70 leading-8 max-w-[170px]">
      Cinematics,
      Storytelling &
      Motion Graphics.
    </p>

    {/* Explore */}

    <div className="mt-auto">

      <a
        href="#"
        className="text-cyan-400 uppercase tracking-[3px]"
      >
        Explore →
      </a>

    </div>

  </div>

</div>

            {/* Card 3 */}

<div className="group relative border border-white/10 min-h-[380px] overflow-hidden bg-black transition-all duration-500 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(62,214,200,0.15)]">

  {/* Background Image */}

  <Image
    src="/images/services/product-visualization.png"
    alt="Visualization"
    fill
    className="object-cover object-[70%_center] transition-transform duration-700 group-hover:scale-105"
  />

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

  {/* Card Content */}

  <div className="relative z-10 h-full p-8 flex flex-col">

    <h3 className="text-[28px] tracking-[1px] uppercase">
      VISUALIZATION
    </h3>

    <p className="mt-6 text-white/70 leading-8 max-w-[180px]">
      Footwear,
      Apparel &
      Product Renders.
    </p>

    <div className="mt-auto">

      <a
        href="#"
        className="text-cyan-400 uppercase tracking-[3px]"
      >
        Explore →
      </a>

    </div>

  </div>

</div>

{/* Card 4 */}

<div className="group relative border border-white/10 min-h-[380px] overflow-hidden bg-black transition-all duration-500 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(62,214,200,0.15)]">

  <Image
    src="/images/services/ui-ux-design.png"
    alt="UI UX Design"
    fill
    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

  <div className="relative z-10 h-full p-8 flex flex-col">

    <h3 className="text-[28px] tracking-[1px] uppercase">
      UI/UX DESIGN
    </h3>

    <p className="mt-6 text-white/70 leading-8 max-w-[180px]">
      Mobile Apps,
      Dashboards &
      User Experience.
    </p>

    <div className="mt-auto">
      <a href="#" className="text-cyan-400 uppercase tracking-[3px]">
        Explore →
      </a>
    </div>

  </div>

</div>

{/* Card 5 */}

<div className="group relative border border-white/10 min-h-[380px] overflow-hidden bg-black transition-all duration-500 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(62,214,200,0.15)]">

  <Image
    src="/images/services/web-app-development.png"
    alt="Web App Development"
    fill
    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

  <div className="relative z-10 h-full p-8 flex flex-col">

    <h3 className="text-[28px] tracking-[1px] uppercase">
      WEB & APP DEV
    </h3>

    <p className="mt-6 text-white/70 leading-8 max-w-[180px]">
      Websites,
      Mobile Apps &
      Custom Platforms.
    </p>

    <div className="mt-auto">
      <a href="#" className="text-cyan-400 uppercase tracking-[3px]">
        Explore →
      </a>
    </div>

  </div>

</div>

{/* Card 6 */}

<div className="group relative border border-white/10 min-h-[380px] overflow-hidden bg-black transition-all duration-500 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(62,214,200,0.15)]">

  <Image
    src="/images/services/architecture-interior.png"
    alt="Architecture Interior"
    fill
    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

  <div className="relative z-10 h-full p-8 flex flex-col">

    <h3 className="text-[28px] tracking-[1px] uppercase">
      ARCHITECTURE
    </h3>

    <p className="mt-6 text-white/70 leading-8 max-w-[180px]">
      Interior Design,
      Floor Plans &
      3D Visualization.
    </p>

    <div className="mt-auto">
      <a href="#" className="text-cyan-400 uppercase tracking-[3px]">
        Explore →
      </a>
    </div>

  </div>

</div>

</div> {/* grid */}

</div> {/* max width */}

</section>

{/* ================= PROCESS ================= */}

<section 
id="process"
className="py-16 px-8 lg:px-10 bg-black">

  <div className="max-w-[1700px] mx-auto">

<div className="mb-12">

  <p className="text-cyan-400 text-xs tracking-[5px] uppercase mb-3">
    How We Work
  </p>

  <h2 className="text-6xl font-light">
    PROCESS
  </h2>

</div>

<div className="relative mt-10">

  <div className="absolute top-[64px] left-0 w-full h-[2px] bg-cyan-400/20 shadow-[0_0_20px_rgba(0,255,255,0.4)]"></div>

  <div className="grid lg:grid-cols-4 gap-10 relative">

    <div className="group text-center">

      <div className="w-32 h-32 mx-auto rounded-full border border-cyan-400/40 bg-cyan-400/[0.03] backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_60px_rgba(0,255,255,0.8)]">

        <span className="text-cyan-400 text-5xl font-light transition-all duration-500 group-hover:text-white">
          01
        </span>

      </div>

      <h3 className="mt-10 text-3xl uppercase tracking-[3px]">
        VISION
      </h3>

      <p className="mt-5 text-white/60 leading-8 max-w-[240px] mx-auto">
        Understanding Your Vision,
        Goals & Requirements.
      </p>

    </div>

    <div className="group text-center">

      <div className="w-32 h-32 mx-auto rounded-full border border-cyan-400/40 bg-cyan-400/[0.03] backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_60px_rgba(0,255,255,0.8)]">

        <span className="text-cyan-400 text-5xl font-light transition-all duration-500 group-hover:text-white">
          02
        </span>

      </div>

      <h3 className="mt-10 text-3xl uppercase tracking-[3px]">
        STRATEGY
      </h3>

      <p className="mt-5 text-white/60 leading-8 max-w-[240px] mx-auto">
        Creative Planning,
        Research & Direction.
      </p>

    </div>

    <div className="group text-center">

      <div className="w-32 h-32 mx-auto rounded-full border border-cyan-400/40 bg-cyan-400/[0.03] backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_60px_rgba(0,255,255,0.8)]">

        <span className="text-cyan-400 text-5xl font-light transition-all duration-500 group-hover:text-white">
          03
        </span>

      </div>

      <h3 className="mt-10 text-3xl uppercase tracking-[3px]">
        PRODUCTION
      </h3>

      <p className="mt-5 text-white/60 leading-8 max-w-[240px] mx-auto">
        3D Art, Design,
        Animation & Development.
      </p>

    </div>

    <div className="group text-center">

      <div className="w-32 h-32 mx-auto rounded-full border border-cyan-400/40 bg-cyan-400/[0.03] backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_60px_rgba(0,255,255,0.8)]">

        <span className="text-cyan-400 text-5xl font-light transition-all duration-500 group-hover:text-white">
          04
        </span>

      </div>

      <h3 className="mt-10 text-3xl uppercase tracking-[3px]">
        LAUNCH
      </h3>

      <p className="mt-5 text-white/60 leading-8 max-w-[240px] mx-auto">
        Final Delivery,
        Deployment &
        Ongoing Support.
      </p>

    </div>

  </div>

</div>

  </div>

</section>

{/* ================= ABOUT ================= */}

<section className="py-24 px-8 lg:px-10 bg-black">

  <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-20 items-center">

    {/* Left Content */}

    <div>

      <p className="text-cyan-400 text-xs tracking-[5px] uppercase mb-4">
        About Lamerix
      </p>

      <h2 className="text-6xl font-light leading-tight mb-6">
        From Concept To
        Digital Reality.
      </h2>

      <p className="text-white/60 text-lg leading-9 max-w-[700px]">
        Lamerix Studio is a creative production company specializing
        in Game Art, Animation, Product Visualization, UI/UX Design,
        Web & App Development and Architecture Solutions.
      </p>

      <p className="text-white/60 text-lg leading-9 mt-6 max-w-[700px]">
        We combine creativity, technology and innovation to help
        brands, startups and global clients bring ideas to life
        through premium digital experiences.
      </p>

      {/* Services Highlights */}

<div className="grid grid-cols-3 gap-16 mt-16">

  <div>
    <h3 className="text-cyan-400 text-2xl mb-3">
      GAME ART
    </h3>

    <p className="text-white/50 uppercase tracking-[2px] text-sm">
      Characters & Assets
    </p>
  </div>

  <div>
    <h3 className="text-cyan-400 text-2xl mb-3">
      ANIMATION
    </h3>

    <p className="text-white/50 uppercase tracking-[2px] text-sm">
      Storytelling & Motion
    </p>
  </div>

  <div>
    <h3 className="text-cyan-400 text-2xl mb-3">
      VISUALIZATION
    </h3>

    <p className="text-white/50 uppercase tracking-[2px] text-sm">
      Product & Architecture
    </p>
  </div>

</div>

      <button className="mt-14 border border-cyan-400 px-8 py-4 uppercase tracking-[3px] text-cyan-400 hover:bg-cyan-400/10 transition-all">
        Our Story →
      </button>

    </div>

    {/* Right Image */}

    <div className="relative h-[700px] overflow-hidden border border-white/10">

      <Image
        src="/images/about/about-lamerix.png"
        alt="About Lamerix"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

    </div>

  </div>

</section>

{/* ================= WHY CHOOSE LAMERIX ================= */}

<section className="relative py-24 px-8 lg:px-10 bg-black overflow-hidden">

{/* Background Glow */}

  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-400/5 blur-[250px] rounded-full"></div>

  <div className="relative max-w-[1700px] mx-auto">

{/* Heading */}

<div className="mb-16">

  <p className="text-cyan-400 text-xs tracking-[5px] uppercase mb-4">
    Why Choose Us
  </p>

  <h2 className="text-5xl font-light">
    WHY CHOOSE LAMERIX
  </h2>

</div>

{/* Cards */}

<div className="grid lg:grid-cols-2 gap-10">

  {/* Card 1 */}

  <div className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-10 transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03] hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(0,255,255,0.18)]">

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-transparent pointer-events-none"></div>

    <div className="absolute top-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full"></div>

    <h3 className="relative text-3xl uppercase tracking-[2px] mb-6">
      Global Quality
    </h3>

    <p className="relative text-white/60 leading-7 max-w-[500px]">
      Production standards designed for international
      brands, agencies and studios with focus on quality,
      consistency and attention to detail.
    </p>

  </div>

  {/* Card 2 */}

  <div className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-10 transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03] hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(0,255,255,0.18)]">

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-transparent pointer-events-none"></div>

    <div className="absolute top-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full"></div>

    <h3 className="relative text-3xl uppercase tracking-[2px] mb-6">
      Fast Delivery
    </h3>

    <p className="relative text-white/60 leading-7 max-w-[500px]">
      Optimized production pipelines that help us deliver
      projects efficiently without compromising quality.
    </p>

  </div>

  {/* Card 3 */}

  <div className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-10 transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03] hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(0,255,255,0.18)]">

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-transparent pointer-events-none"></div>

    <div className="absolute top-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full"></div>

    <h3 className="relative text-3xl uppercase tracking-[2px] mb-6">
      Multi-Service Expertise
    </h3>

    <p className="relative text-white/60 leading-7 max-w-[500px]">
      From Game Art and Animation to Product Visualization,
      Development and Architecture — all under one roof.
    </p>

  </div>

  {/* Card 4 */}

  <div className="group relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl p-10 transition-all duration-500 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03] hover:-translate-y-3 hover:shadow-[0_0_60px_rgba(0,255,255,0.18)]">

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-transparent pointer-events-none"></div>

    <div className="absolute top-0 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-700 group-hover:w-full"></div>

    <h3 className="relative text-3xl uppercase tracking-[2px] mb-6">
      Dedicated Support
    </h3>

    <p className="relative text-white/60 leading-7 max-w-[500px]">
      Direct communication, transparent workflow and
      long-term collaboration throughout the project.
    </p>

  </div>

</div>

  </div>

</section>

{/* ================= CONTACT CTA ================= */}

<section className="py-0 px-8 lg:px-10 bg-black">

  <div className="max-w-[1700px] mx-auto">

    <div className="relative overflow-hidden border border-cyan-400/20 bg-white/[0.02] backdrop-blur-md p-16 lg:p-24">

      {/* Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-cyan-400/10 blur-[140px]" />

      {/* Content */}

      <div className="relative z-10 text-center">

        <p className="text-cyan-400 text-xs tracking-[5px] uppercase mb-5">
          Start Your Project
        </p>

        <h2 className="text-6xl lg:text-7xl font-light leading-tight max-w-[1300px] mx-auto">
          READY TO BUILD
          <br />
          SOMETHING EXTRAORDINARY?
        </h2>

        <p className="text-white/50 text-xl mt-8 max-w-[700px] mx-auto leading-9">
          From concept to launch, we create premium digital experiences
through design, technology and innovation.
        </p>

        <Link href="/contact#contact-form">

  <button className="border border-cyan-400 text-cyan-400 px-8 py-4 tracking-[3px] uppercase transition-all hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,255,255,0.35)]">

    Start A Project →

  </button>

</Link>

      </div>

    </div>

  </div>

</section>

 <Footer />

</main>
);
}