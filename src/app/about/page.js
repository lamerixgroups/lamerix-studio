import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">

<Header />

      <div className="max-w-[1700px] mx-auto px-8 py-24">

  <div className="grid lg:grid-cols-2 gap-12 items-center">

    <div>

      <h1 className="text-[120px] font-light leading-none">
        ABOUT US
      </h1>

      <h2 className="text-3xl text-cyan-400 mt-4">
  Creating Digital Experiences For Global Brands
</h2>

      <p className="mt-10 text-white/75 text-xl leading-relaxed max-w-[750px]">

Lamerix Studio is a creative production company focused on delivering
premium digital content for brands, agencies and studios worldwide.

</p>

<p className="mt-8 text-white/60 leading-relaxed max-w-[750px]">

Our expertise spans Game Art, Digital Humans, Animation, Product
Visualization, Architecture and Interactive Experiences. We help
businesses transform ideas into high quality visual content through
modern production pipelines and creative technology.

</p>

<p className="mt-8 text-white/60 leading-relaxed max-w-[750px]">

From concept development to final delivery, our team combines artistic
vision, technical precision and scalable workflows to create impactful
digital experiences that stand out in today's competitive market.

</p>

    </div>

    <div>

      <img
        src="/images/about/about_robotic.png"
        alt=""
        className="w-full border border-cyan-400/20"
      />

    </div>

  </div>

</div>


{/* OUR STORY */}

<section className="pb-10">

  <div className="max-w-[1700px] mx-auto px-8">

    <h3 className="text-cyan-400 uppercase tracking-[6px] text-xl mb-14">
  Our Journey
</h3>

    <div className="p-12 relative">

  {/* Timeline Line */}

  <div className="absolute top-[70px] left-[8%] right-[8%] h-[2px] bg-cyan-400/30"></div>

  <div className="grid lg:grid-cols-5 gap-8 relative z-10">

    {/* 2020 */}

    <div className="text-center">

      <div className="w-10 h-10 rounded-full border border-cyan-400 mx-auto mb-6 bg-black shadow-[0_0_20px_rgba(34,211,238,0.4)]"></div>

      <h2 className="text-cyan-400 text-4xl mb-4">
        2020
      </h2>

      <p className="text-white/60 text-sm leading-relaxed max-w-[220px] mx-auto">
        The beginning of Lamerix with a focus on 3D asset production and digital content creation.
      </p>

    </div>

    {/* 2021 */}

    <div className="text-center">

      <div className="w-10 h-10 rounded-full border border-cyan-400 mx-auto mb-6 bg-black shadow-[0_0_20px_rgba(34,211,238,0.4)]"></div>

      <h2 className="text-cyan-400 text-4xl mb-4">
        2021
      </h2>

      <p className="text-white/60 text-sm leading-relaxed max-w-[220px] mx-auto">
        Expanded into product visualization and photogrammetry workflows.
      </p>

    </div>

    {/* 2022 */}

    <div className="text-center">

      <div className="w-10 h-10 rounded-full border border-cyan-400 mx-auto mb-6 bg-black shadow-[0_0_20px_rgba(34,211,238,0.4)]"></div>

      <h2 className="text-cyan-400 text-4xl mb-4">
        2022
      </h2>

      <p className="text-white/60 text-sm leading-relaxed max-w-[220px] mx-auto">
        Collaborated with international brands and studios on large-scale production projects.
      </p>

    </div>

    {/* 2023 */}

    <div className="text-center">

      <div className="w-10 h-10 rounded-full border border-cyan-400 mx-auto mb-6 bg-black shadow-[0_0_20px_rgba(34,211,238,0.4)]"></div>

      <h2 className="text-cyan-400 text-4xl mb-4">
        2023
      </h2>

      <p className="text-white/60 text-sm leading-relaxed max-w-[220px] mx-auto">
        Added animation and digital human production services.
      </p>

    </div>

    {/* 2024+ */}

    <div className="text-center">

      <div className="w-12 h-12 rounded-full border border-cyan-400 mx-auto mb-6 bg-black shadow-[0_0_30px_rgba(34,211,238,0.8)] animate-pulse"></div>

      <h2 className="text-cyan-400 text-4xl mb-4">
        2024+
      </h2>

      <p className="text-white/60 text-sm leading-relaxed max-w-[220px] mx-auto">
        Scaling globally with visualization, architecture and creative technology solutions.
      </p>

    </div>

  </div>

    </div>

  </div>

</section>

{/* WHY CHOOSE US */}

<section className="pb-10">

  <div className="max-w-[1700px] mx-auto px-8">

    <h3 className="text-cyan-400 uppercase tracking-[6px] text-xl mb-14">
      Why Choose Lamerix
    </h3>

<p className="text-white/50 max-w-[700px] mb-6">
Our production pipelines, quality standards and global experience
help brands and studios deliver world-class digital content.
</p>

    <div className="grid lg:grid-cols-4 gap-6">

      <div
  className="
  border border-cyan-400/20
  p-8
  transition-all
  duration-300
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
  hover:-translate-y-1
  "
>

    <div className="text-cyan-400 text-5xl mb-6">
✦
</div>
        <h4 className="text-2xl mb-4">QUALITY</h4>
        <p className="text-white/60">
          Production standards focused on consistency and premium output.
        </p>
      </div>

      <div
  className="
  border border-cyan-400/20
  p-8
  transition-all
  duration-300
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
  hover:-translate-y-1
  "
>
    <div className="text-cyan-400 text-5xl mb-6">
⚡
</div>
        <h4 className="text-2xl mb-4">SPEED</h4>
        <p className="text-white/60">
          Optimized workflows and scalable production pipelines.
        </p>
      </div>

      <div
  className="
  border border-cyan-400/20
  p-8
  transition-all
  duration-300
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
  hover:-translate-y-1
  "
>
    <div className="text-cyan-400 text-5xl mb-6">
◈
</div>
        <h4 className="text-2xl mb-4">COMMUNICATION</h4>
        <p className="text-white/60">
          Transparent communication from start to final delivery.
        </p>
      </div>

      <div
  className="
  border border-cyan-400/20
  p-8
  transition-all
  duration-300
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
  hover:-translate-y-1
  "
>
    <div className="text-cyan-400 text-5xl mb-6">
⬢
</div>
        <h4 className="text-2xl mb-4">SCALABILITY</h4>
        <p className="text-white/60">
          From single assets to large production batches.
        </p>
      </div>

    </div>

  </div>

</section>

{/* CTA */}

<section className="pb-24">

  <div className="max-w-[1700px] mx-auto px-8">

    <div className="border border-cyan-400/20 py-8 px-2 text-center">

      <h2 className="text-6xl mb-8">
        LET'S BUILD SOMETHING
        <br />
        <span className="text-cyan-400">
          EXTRAORDINARY TOGETHER
        </span>
      </h2>

      <Link href="/contact#contact-form">

  <button className="border border-cyan-400 text-cyan-400 px-8 py-4 tracking-[3px] uppercase transition-all hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,255,255,0.35)]">

    Start A Project →

  </button>

</Link>

    </div>

  </div>

</section>

<Footer />
  </main>
  );
}