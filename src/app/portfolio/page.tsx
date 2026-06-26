"use client";

import "@google/model-viewer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiHeart,
} from "react-icons/hi";

import {
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaYoutube,
} from "react-icons/fa";

import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineDesktopComputer
} from "react-icons/hi";

import {
  FaGamepad,
  FaPlayCircle,
  FaBuilding,
  FaShoppingBag
} from "react-icons/fa";

export default function PortfolioPage() {

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProductType, setActiveProductType] = useState("shoes");
  const [activeProduct, setActiveProduct] = useState("asics");
  const [activeAnimation, setActiveAnimation] = useState("can");
  const modelViewerRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [productPage, setProductPage] = useState(0);
  const gameArtData = {
  stylized: [],
  weapons: [],
  environment: [],
  nft: [],
};

  const animationData = [

{
  id: "can",
  name: "Can",
  video: "/animations/Can.mp4",
},

{
  id: "earbuds",
  name: "Ear Buds",
  video: "/animations/Ear Buds.mp4",
},

{
  id: "euro-valley",
  name: "Euro Valley Perfume Blue",
  video: "/animations/Euro Valley Perfume Blue.mp4",
},

{
  id: "headphone",
  name: "Headphone",
  video: "/animations/Headphone.mkv",
},

{
  id: "perfume",
  name: "Perfume",
  video: "/animations/Perfume.mp4",
},

{
  id: "perfume01",
  name: "Perfume 01",
  video: "/animations/Perfume_01.mp4",
},

{
  id: "perfume02",
  name: "Perfume 02",
  video: "/animations/Perfume_02.mp4",
},

{
  id: "valinos",
  name: "Valinos",
  video: "/animations/Valinos.mp4",
},

{
  id: "croc-clog",
  name: "Croc Clog Papaya",
  video: "/animations/croc_clog_papaya_promotional_video.mp4",
},
];

const productData = {
  shoes: [
  {
    id: "asics",
    name: "Asics Gel-Lyte",
    category: "Shoes",
    model: "/models/shoes/Asics.glb",
  },

  {
    id: "caval",
    name: "Caval",
    category: "Shoes",
    model: "/models/shoes/Caval.glb",
  },

  {
    id: "dmt",
    name: "DMT",
    category: "Shoes",
    model: "/models/shoes/DMT.glb",
  },

  {
    id: "drmartens",
    name: "Dr Martens",
    category: "Shoes",
    model: "/models/shoes/Dr_Martens.glb",
  },

  {
    id: "hoka",
    name: "Hoka",
    category: "Shoes",
    model: "/models/shoes/Hoka.glb",
  },

  {
    id: "hunter",
    name: "Hunter",
    category: "Shoes",
    model: "/models/shoes/Hunter.glb",
  },

  {
    id: "lacoste",
    name: "Lacoste",
    category: "Shoes",
    model: "/models/shoes/Lacoste.glb",
  },

  {
    id: "monk",
    name: "Monk",
    category: "Shoes",
    model: "/models/shoes/Monk.glb",
  },

  {
    id: "on",
    name: "On Running",
    category: "Shoes",
    model: "/models/shoes/On Right.glb",
  },

  {
    id: "puma",
    name: "Puma Nitro",
    category: "Shoes",
    model: "/models/shoes/Puma Nitro.glb",
  },

  {
    id: "represent",
    name: "Represent",
    category: "Shoes",
    model: "/models/shoes/Represent.glb",
  },

  {
    id: "tomadam",
    name: "Tom Adam",
    category: "Shoes",
    model: "/models/shoes/Tom Adam.glb",
  },

  {
    id: "vans",
    name: "Vans",
    category: "Shoes",
    model: "/models/shoes/Vans.glb",
  },
],

  bags: [
  {
    id: "diesel",
    name: "Diesel HandBag",
    category: "Bags",
    model: "/models/bags/Diesel_HandBag.glb",
  },

  {
    id: "guess",
    name: "Guess Handbag",
    category: "Bags",
    model: "/models/bags/Guess_Handbag.glb",
  },

  {
    id: "Guess_Noelle_Coal",
    name: "Guess_Noelle_Coal",
    category: "Bags",
    model: "/models/bags/Guess_Noelle_Coal.glb",
  },

  {
    id: "Doughnut",
    name: "Doughnut",
    category: "Bags",
    model: "/models/bags/Doughnut.glb",
  },
],

  watches: [
  {
    id: "gshock",
    name: "G-Shock",
    category: "Watches",
    model: "/models/watches/G-shock.glb",
  },

  {
    id: "seiko",
    name: "Seiko",
    category: "Watches",
    model: "/models/watches/Seiko.glb",
  },
],

  furniture: [
  {
    id: "antique-table",
    name: "Antique Table",
    category: "Furniture",
    model: "/models/furniture/antique_table.glb",
  },

  {
    id: "leather-chairs",
    name: "Leather Chairs",
    category: "Furniture",
    model: "/models/furniture/laedther_chairs.glb",
  },

  {
    id: "sofa-chair",
    name: "Sofa Chair",
    category: "Furniture",
    model: "/models/furniture/Sofa_chair.glb",
  },

  {
    id: "stool",
    name: "Stool",
    category: "Furniture",
    model: "/models/furniture/stool.glb",
  },

  {
    id: "study-table",
    name: "Study Table",
    category: "Furniture",
    model: "/models/furniture/study_tabal.glb",
  },

  {
    id: "table-chair",
    name: "Table With Chair",
    category: "Furniture",
    model: "/models/furniture/Table with chair.glb",
  },

  {
    id: "victorian-chairs",
    name: "Victorian Chairs",
    category: "Furniture",
    model: "/models/furniture/victorian_chairs.glb",
  },

  {
    id: "wine-set",
    name: "Wine Set",
    category: "Furniture",
    model: "/models/furniture/wine.glb",
  },
],

  electronics: [
  {
    id: "capybara-light",
    name: "Capybara Night Light",
    category: "Electronics",
    model: "/models/electronics/Capybara Night Light.glb",
  },

  {
    id: "jaar",
    name: "Jaar",
    category: "Electronics",
    model: "/models/electronics/Jaar.glb",
  },

  {
    id: "airpods_pro",
    name: "AirPods Pro",
    category: "Electronics",
    model: "/models/electronics/AirPods Pro.glb",
  },

  {
    id: "sony_headphones",
    name: "Sony Headphones",
    category: "Electronics",
    model: "/models/electronics/Sony Headphones.glb",
  },
  ],

  digitalHumans: [
  {
    id: "scan-characters",
    name: "Scan Characters",
    category: "Digital Humans",
  },

  {
    id: "metahumans",
    name: "MetaHumans",
    category: "Digital Humans",
  },

  {
    id: "face-scans",
    name: "Face Scans",
    category: "Digital Humans",
  },

  {
    id: "head-scans",
    name: "Head Scans",
    category: "Digital Humans",
  },
],
};

const [activeGameArtType, setActiveGameArtType] =
  useState("stylized");

const [activeGameArt, setActiveGameArt] =
  useState("");

const currentAnimation = animationData.find(
  (item) => item.id === activeAnimation
);

const currentProduct =
  productData[
    activeProductType as keyof typeof productData
  ].find((item) => item.id === activeProduct);

  const visibleProducts =
  productData[
    activeProductType as keyof typeof productData
  ].slice(productPage * 7, productPage * 7 + 7);
  
  useEffect(() => {
  setLoading(true);

  const timer = setTimeout(() => {
    setLoading(false);
  }, 1500);

  return () => clearTimeout(timer);
}, [activeProduct]);

  return (

    <main className="bg-black min-h-screen text-white">

     <Header /> 

      {/* Hero Section */}

      <section className="pt-24 pb-12">

  <div className="max-w-[1700px] mx-auto px-8">

    <div className="flex items-center justify-center gap-6 mb-8">

  <div className="w-90 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

  <span className="text-cyan-400 tracking-[20px] uppercase text-sm">
    Portfolio
  </span>

  <div className="w-90 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

</div>

    <h1 className="text-center text-5xl lg:text-[96px] font-light tracking-[-3px]">

      BRINGING IDEAS TO

      <span className="text-cyan-400">
        {" "}VISUAL LIFE
      </span>

    </h1>

    <p className="text-center text-white/60 mt-5 max-w-[620px] mx-auto text-lg leading-8">
      Explore our diverse portfolio across multiple domains.
      Every project is a blend of creativity, technology and precision.
    </p>

      </div>

      </section>

      {/* Categories */}

<section className="pb-12">

  <div className="max-w-[1700px] mx-auto px-8">

    <div className="grid grid-cols-7 gap-[2px]">

      {/* Active */}

      <div
  onClick={() => setActiveCategory("all")}
  className={`relative h-[120px] flex flex-col items-center justify-center group cursor-pointer transition-all
  ${
    activeCategory === "all"
      ? "border border-cyan-400"
      : "border border-cyan-400/15 hover:border-cyan-400/40"
  }`}
>

        <HiOutlineViewGrid className="text-cyan-400 text-[24px] mb-3" />

        <h3 className="uppercase text-[15px] tracking-wide">
          ALL WORK
        </h3>

        <p className="text-white/40 text-xs mt-2">
          52 Projects
        </p>

        <div className="absolute bottom-4 w-8 h-[2px] bg-cyan-400"></div>

      </div>

      {/* Game Art */}

      <div
  onClick={() => setActiveCategory("game-art")}
  className={`h-[120px] flex flex-col items-center justify-center cursor-pointer transition-all
  ${
    activeCategory === "game-art"
      ? "border border-cyan-400"
      : "border border-cyan-400/15 hover:border-cyan-400/40"
  }`}
>

        <FaGamepad className="text-cyan-400 text-[20px] mb-3" />

        <h3 className="uppercase text-[15px]">
          GAME ART
        </h3>

      </div>

      {/* "DIGITAL HUMANS" */}

      <div
  onClick={() => setActiveCategory("digital-humans")}
  className={`h-[120px] flex flex-col items-center justify-center cursor-pointer transition-all
  ${
    activeCategory === "digital-humans"
      ? "border border-cyan-400"
      : "border border-cyan-400/15 hover:border-cyan-400/40"
  }`}
>

        <FaGamepad className="text-cyan-400 text-[20px] mb-3" />

        <h3 className="uppercase text-[15px]">
          DIGITAL HUMANS
        </h3>

      </div>

      {/* Animation */}

      <div
  onClick={() => {
  setActiveCategory("animation");
  setActiveAnimation("can");
}}
  className={`h-[120px] flex flex-col items-center justify-center cursor-pointer transition-all
  ${
    activeCategory === "animation"
      ? "border border-cyan-400"
      : "border border-cyan-400/15 hover:border-cyan-400/40"
  }`}
>

        <FaPlayCircle className="text-cyan-400 text-[20px] mb-3" />

        <h3 className="uppercase text-[15px]">
          ANIMATION
        </h3>

      </div>

      {/* Visualization */}

      <div
  onClick={() => setActiveCategory("visualization")}
  className={`h-[120px] flex flex-col items-center justify-center cursor-pointer transition-all
  ${
    activeCategory === "visualization"
      ? "border border-cyan-400"
      : "border border-cyan-400/15 hover:border-cyan-400/40"
  }`}
>

        <HiOutlineCube className="text-cyan-400 text-[20px] mb-3" />

        <h3 className="uppercase text-[15px]">
          VISUALIZATION
        </h3>

      </div>

      {/* Architecture */}

      <div
  onClick={() => setActiveCategory("architecture")}
  className={`h-[120px] flex flex-col items-center justify-center cursor-pointer transition-all
  ${
    activeCategory === "architecture"
      ? "border border-cyan-400"
      : "border border-cyan-400/15 hover:border-cyan-400/40"
  }`}
>

        <FaBuilding className="text-cyan-400 text-[20px] mb-3" />

        <h3 className="uppercase text-[15px]">
          ARCHITECTURE
        </h3>

      </div>

      {/* Product */}

      <div
  onClick={() => {
  setActiveCategory("product");
  setActiveProductType("shoes");
  setActiveProduct("asics");
}}
  className={`h-[120px] flex flex-col items-center justify-center cursor-pointer transition-all
  ${
    activeCategory === "product"
      ? "border border-cyan-400"
      : "border border-cyan-400/15 hover:border-cyan-400/40"
  }`}
>

        <FaShoppingBag className="text-cyan-400 text-[20px] mb-3" />

        <h3 className="uppercase text-[15px]">
          PRODUCT
        </h3>

      </div>      

    </div>

  </div>

</section>

{/* PRODUCT WORKSPACE */}

 {activeCategory === "game-art" && (

<section className="pb-12">

<div className="max-w-[1700px] mx-auto px-8">

<div className="grid grid-cols-[250px_1fr_280px] gap-4">

{/* LEFT */}

<div className="
border border-cyan-400/20
p-4
h-[520px]
">

<h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
Categories
</h3>

<div className="space-y-3">

<button
onClick={() => setActiveGameArtType("stylized")}
className="w-full p-3 border border-cyan-400/20"
>
Stylized Characters
</button>

<button
onClick={() => setActiveGameArtType("weapons")}
className="w-full p-3 border border-cyan-400/20"
>
Weapons & Props
</button>

<button
onClick={() => setActiveGameArtType("environment")}
className="w-full p-3 border border-cyan-400/20"
>
Environment Assets
</button>

<button
onClick={() => setActiveGameArtType("nft")}
className="w-full p-3 border border-cyan-400/20"
>
NFT Collections
</button>

</div>

</div>

{/* CENTER */}

<div className="
border border-cyan-400/20
h-[520px]
flex items-center justify-center
">

<div className="text-center">

<h2 className="text-cyan-400 text-4xl tracking-[5px] mb-4">
GAME ART
</h2>

<p className="text-gray-400">
Coming Soon
</p>

</div>

</div>

{/* RIGHT */}

<div className="
border border-cyan-400/20
p-4
h-[520px]
">

<h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
Projects
</h3>

<div className="text-gray-500">
No Assets Yet
</div>

</div>

</div>

</div>

</section>

)}
 
                                                {/* DIGITAL HUMANS WORKSPACE */}

{activeCategory === "digital-humans" && (

<section className="pb-12">

  <div className="max-w-[1700px] mx-auto px-8">

    <div className="grid grid-cols-[250px_1fr_280px] gap-4">

      {/* LEFT SIDEBAR */}

      <div className="
border border-cyan-400/20
p-4
h-full
overflow-y-auto
">

        <h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
          Categories
        </h3>

        <div className="space-y-3">

         <button
  onClick={() => setActiveProductType("Scan Characters")}
  className={`w-full p-3 border transition-all duration-300
  ${
    activeProductType === "Scan Characters"
      ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
  }`}
>
 <span>Scan Characters</span>

</button>

          <button
  onClick={() => {
  setActiveProductType("MetaHumans");
  setActiveProduct("diesel");
}}
  className={`w-full p-3 border transition-all duration-300
  ${
    activeProductType === "MetaHumans"
      ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
  }`}
>
  MetaHumans
</button>

          <button
  onClick={() => {
  setActiveProductType("Face Scans");
  setActiveProduct("gshock");
}}
  className={`w-full p-3 border transition-all duration-300
  ${
    activeProductType === "Face Scans"
      ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
  }`}
>
  Face Scans
</button>

          <button
  onClick={() => {
  setActiveProductType("Head Scans");
  setActiveProduct("antique-table");
}}
  className={`w-full p-3 border transition-all duration-300
  ${
    activeProductType === "Head Scans"
      ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
  }`}
>
  Head Scans
</button>
</div>
</div>

  
      {/* CENTER */}

<div className="h-full flex flex-col">

  <div className="h-full flex items-center justify-center relative border border-cyan-400/20 bg-black overflow-hidden">

  {loading && (
  <div className="
    absolute
    inset-0
    z-20
    flex
    items-center
    justify-center
    bg-black/70
    backdrop-blur-sm
  ">
    <div className="flex flex-col items-center">

      <div
        className="
          w-12
          h-12
          border-2
          border-cyan-400/30
          border-t-cyan-400
          rounded-full
          animate-spin
        "
      />

      <p className="mt-4 text-cyan-400 tracking-[3px] text-sm">
        LOADING EXPERIENCE...
      </p>

    </div>
  </div>
)}
  
  <model-viewer
  src={currentProduct?.model}
  camera-controls
  auto-rotate
  environment-image="/hdri/shoe-studio.hdr"
  shadow-intensity="2"
  exposure="1"

  onLoad={() => {
    console.log("MODEL LOADED");
    setLoading(false);
  }}

  style={{
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  }}
>
</model-viewer>

  <div className="absolute bottom-4 right-4 z-20">

  <button
    onClick={() => {
      const viewer = document.querySelector("model-viewer");

      if (viewer?.requestFullscreen) {
        viewer.requestFullscreen();
      }
    }}
    className="
      border border-cyan-400/30
      bg-black/70
      px-3 py-2
      text-cyan-400
      hover:border-cyan-400
      hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]
      transition-all
    "
  >
    ⛶
  </button>

</div>

</div>

</div>

     {/* RIGHT SIDEBAR */}

<div className="border border-cyan-400/20 p-4 h-[520px] flex flex-col">

<h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
  Projects
</h3>

  <div className="space-y-3 flex-1 overflow-hidden">

    {visibleProducts.map((item) => (

      <button
        key={item.id}
        onClick={() => setActiveProduct(item.id)}
        className={`w-full text-left p-3 border transition-all duration-300

        ${
          activeProduct === item.id
            ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
            : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5"
        }`}
      >

        {item.name}

      </button>

    ))}

  </div>

  <div className="flex justify-between mt-4">

    {productPage > 0 && (

      <button
        onClick={() => setProductPage(productPage - 1)}
        className="text-cyan-400 text-sm hover:text-white transition"
      >
        ↑ Previous
      </button>

    )}

    {(productPage + 1) * 7 <
      productData[
        activeProductType as keyof typeof productData
      ].length && (

      <button
        onClick={() => setProductPage(productPage + 1)}
        className="text-cyan-400 text-sm hover:text-white transition ml-auto"
      >
        ↓ Browse More
      </button>

    )}

  </div>

</div>

</div>

</div>

</section>

)}


{activeCategory === "animation" && (
<section className="pb-12">

<div className="max-w-[1700px] mx-auto px-8">

<div className="grid grid-cols-[250px_1fr_280px] gap-4">

{/* LEFT */}

<div className="
border border-cyan-400/20
p-4
h-[520px]
">

<h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
Categories
</h3>

<button
className="
w-full
p-3
border
border-cyan-400
text-cyan-400
bg-cyan-400/5
"
>
Product Animation
</button>

</div>

{/* CENTER */}

<div className="
border
border-cyan-400/20
h-[520px]
bg-black
overflow-hidden
">

<video
key={currentAnimation?.video}
src={currentAnimation?.video}
controls
autoPlay
muted
loop
className="
w-full
h-full
object-contain
bg-black
"
/>

</div>

{/* RIGHT */}

<div className="
border border-cyan-400/20
p-4
h-[520px]
overflow-y-auto
">

<h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
Projects
</h3>

<div className="space-y-3">

{animationData.map((item) => (

<button
key={item.id}
onClick={() => setActiveAnimation(item.id)}
className={`

w-full
text-left
p-3
border

${
activeAnimation === item.id
? "border-cyan-400 text-cyan-400 bg-cyan-400/5"
: "border-cyan-400/20"
}

`}
>

{item.name}

</button>

))}

</div>

</div>

</div>

</div>

</section>
)}

                                               {/* PRODUCT WORKSPACE */}

{activeCategory === "product" && (
<section className="pb-12">

  <div className="max-w-[1700px] mx-auto px-8">

    <div className="grid grid-cols-[250px_1fr_280px] gap-4">

      {/* LEFT SIDEBAR */}

      <div className="
border border-cyan-400/20
p-4
h-full
overflow-y-auto
">

        <h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
          Categories
        </h3>

        <div className="space-y-3">

         <button
  onClick={() => setActiveProductType("shoes")}
  className={`w-full p-3 border transition-all duration-300
  ${
    activeProductType === "shoes"
      ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
  }`}
>
 <span>Shoes</span>

</button>

          <button
  onClick={() => {
  setActiveProductType("bags");
  setActiveProduct("diesel");
}}
  className={`w-full p-3 border transition-all duration-300
  ${
    activeProductType === "bags"
      ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
  }`}
>
  Bags
</button>

          <button
  onClick={() => {
  setActiveProductType("watches");
  setActiveProduct("gshock");
}}
  className={`w-full p-3 border transition-all duration-300
  ${
    activeProductType === "watches"
      ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
  }`}
>
  Watches
</button>

          <button
  onClick={() => {
  setActiveProductType("furniture");
  setActiveProduct("antique-table");
}}
  className={`w-full p-3 border transition-all duration-300
  ${
    activeProductType === "furniture"
      ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
  }`}
>
  Furniture
</button>

          <button
  onClick={() => {
  setActiveProductType("electronics");
  setActiveProduct("capybara-light");
}}
  className={`w-full p-3 border transition-all duration-300
  ${
    activeProductType === "electronics"
      ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
      : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]"
  }`}
>
  Electronics
</button>

        </div>

      </div>

      {/* CENTER */}

<div className="h-full flex flex-col">

  <div className="h-full flex items-center justify-center relative border border-cyan-400/20 bg-black overflow-hidden">

  {loading && (
  <div className="
    absolute
    inset-0
    z-20
    flex
    items-center
    justify-center
    bg-black/70
    backdrop-blur-sm
  ">
    <div className="flex flex-col items-center">

      <div
        className="
          w-12
          h-12
          border-2
          border-cyan-400/30
          border-t-cyan-400
          rounded-full
          animate-spin
        "
      />

      <p className="mt-4 text-cyan-400 tracking-[3px] text-sm">
        LOADING EXPERIENCE...
      </p>

    </div>
  </div>
)}
  
  <model-viewer
  src={currentProduct?.model}
  camera-controls
  auto-rotate
  environment-image="/hdri/shoe-studio.hdr"
  shadow-intensity="2"
  exposure="1"

  onLoad={() => {
    console.log("MODEL LOADED");
    setLoading(false);
  }}

  style={{
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  }}
>
</model-viewer>

  <div className="absolute bottom-4 right-4 z-20">

  <button
    onClick={() => {
      const viewer = document.querySelector("model-viewer");

      if (viewer?.requestFullscreen) {
        viewer.requestFullscreen();
      }
    }}
    className="
      border border-cyan-400/30
      bg-black/70
      px-3 py-2
      text-cyan-400
      hover:border-cyan-400
      hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]
      transition-all
    "
  >
    ⛶
  </button>

</div>

</div>

</div>

     {/* RIGHT SIDEBAR */}

<div className="border border-cyan-400/20 p-4 h-[520px] flex flex-col">

<h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
  Projects
</h3>

  <div className="space-y-3 flex-1 overflow-hidden">

    {visibleProducts.map((item) => (

      <button
        key={item.id}
        onClick={() => setActiveProduct(item.id)}
        className={`w-full text-left p-3 border transition-all duration-300

        ${
          activeProduct === item.id
            ? "border-cyan-400 text-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,255,255,0.25)]"
            : "border-cyan-400/20 hover:border-cyan-400/60 hover:text-cyan-400 hover:bg-cyan-400/5"
        }`}
      >

        {item.name}

      </button>

    ))}

  </div>

  <div className="flex justify-between mt-4">

    {productPage > 0 && (

      <button
        onClick={() => setProductPage(productPage - 1)}
        className="text-cyan-400 text-sm hover:text-white transition"
      >
        ↑ Previous
      </button>

    )}

    {(productPage + 1) * 7 <
      productData[
        activeProductType as keyof typeof productData
      ].length && (

      <button
        onClick={() => setProductPage(productPage + 1)}
        className="text-cyan-400 text-sm hover:text-white transition ml-auto"
      >
        ↓ Browse More
      </button>

    )}

  </div>

</div>

</div>

</div>

</section>
)}

                                                            {/* VISUALIZATION WORKSPACE */}

{activeCategory === "visualization" && (

<section className="pb-12">

  <div className="max-w-[1700px] mx-auto px-8">

    <div className="grid grid-cols-[250px_1fr_280px] gap-4">

      {/* LEFT */}

      <div className="
        border border-cyan-400/20
        p-4
        h-[520px]
      ">

        <h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
          Categories
        </h3>

        <div className="space-y-3">

          <button className="w-full p-3 border border-cyan-400/20">
            Product Visualization
          </button>

          <button className="w-full p-3 border border-cyan-400/20">
            Furniture Visualization
          </button>

          <button className="w-full p-3 border border-cyan-400/20">
            Packaging Visualization
          </button>

          <button className="w-full p-3 border border-cyan-400/20">
            Automotive Visualization
          </button>

          <button className="w-full p-3 border border-cyan-400/20">
            Lifestyle Renders
          </button>

        </div>

      </div>

      {/* CENTER */}

      <div className="
        border border-cyan-400/20
        h-[520px]
        flex
        items-center
        justify-center
        bg-black
      ">

        <div className="text-center">

          <h2 className="
            text-cyan-400
            text-5xl
            tracking-[6px]
            mb-4
          ">
            CG VISUALIZATION
          </h2>

          <p className="text-white text-xl">
            Coming Soon
          </p>

        </div>

      </div>

      {/* RIGHT */}

      <div className="
        border border-cyan-400/20
        p-4
        h-[520px]
      ">

        <h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
          Projects
        </h3>

        <p className="text-white">
          No Projects Yet
        </p>

      </div>

    </div>

  </div>

</section>

)}

                                                             {/* ARCHITECTURE WORKSPACE */}

{activeCategory === "architecture" && (

<section className="pb-12">

  <div className="max-w-[1700px] mx-auto px-8">

    <div className="grid grid-cols-[250px_1fr_280px] gap-4">

      {/* LEFT SIDEBAR */}

      <div className="
        border border-cyan-400/20
        p-4
        h-[520px]
      ">

        <h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
          Categories
        </h3>

        <div className="space-y-3">

          <button className="w-full p-3 border border-cyan-400/20">
            Interior Visualization
          </button>

          <button className="w-full p-3 border border-cyan-400/20">
            Exterior Visualization
          </button>

          <button className="w-full p-3 border border-cyan-400/20">
            Furniture Assets
          </button>

          <button className="w-full p-3 border border-cyan-400/20">
            Archviz Animation
          </button>

          <button className="w-full p-3 border border-cyan-400/20">
            Virtual Tours
          </button>

        </div>

      </div>

      {/* CENTER */}

      <div className="
        border border-cyan-400/20
        h-[520px]
        flex
        items-center
        justify-center
        bg-black
      ">

        <div className="text-center">

          <h2 className="
            text-cyan-400
            text-5xl
            tracking-[6px]
            mb-4
          ">
            ARCHITECTURE
          </h2>

          <p className="text-white text-xl">
            Coming Soon
          </p>

        </div>

      </div>

      {/* RIGHT SIDEBAR */}

      <div className="
        border border-cyan-400/20
        p-4
        h-[520px]
      ">

        <h3 className="text-cyan-400 mb-6 uppercase tracking-[3px]">
          Projects
        </h3>

        <p className="text-white">
          No Projects Yet
        </p>

      </div>

    </div>

  </div>

</section>

)}


{/* Featured Projects */}

{activeCategory !== "game-art" &&
  activeCategory !== "digital-humans" &&
   activeCategory !== "animation" && 
    activeCategory !== "product" && (
 

<>
<section className="pb-12">

  <div className="max-w-[1700px] mx-auto px-8">

    {/* Top Grid */}

    <div className="grid lg:grid-cols-12 gap-4 items-start">

      {/* LEFT BIG CARD */}

      <div className="lg:col-span-6 border border-cyan-400/20 overflow-hidden bg-black group h-fit">

        <div className="relative h-[390px] overflow-hidden">

          <img
            src="/images/portfolio/owl.jpeg"
            alt="OWL Project"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        </div>

        <div className="p-4">

          <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-3">
            Featured Project
          </p>

          <h2 className="text-3xl font-light mb-3">
            ECLIPSE WARRIOR
          </h2>

          <p className="text-white/60 mb-5">
            Game Art • Environment Design • 3D Modeling
          </p>

          <button className="text-cyan-400 uppercase tracking-[3px] hover:translate-x-2 transition-all">
            View Project →
          </button>

        </div>

      </div>

      {/* RIGHT GRID */}

      <div className="lg:col-span-6 grid grid-cols-2 gap-3">

        {/* Card 01 */}

{(activeCategory === "all" || activeCategory === "animation") && (
<div
  onClick={() => setActiveCategory("animation")}
  className="
  relative
  border border-cyan-400/20
  overflow-hidden
  group
  h-[280px]
  cursor-pointer
  hover:border-cyan-400
  transition-all
  "
>

  <img
    src="/images/services/animation.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

  <div className="absolute bottom-0 left-0 p-5 z-10">

    <h3 className="text-cyan-400 text-4xl mb-2">01</h3>

    <h4 className="text-xl mb-3">ANIMATION</h4>

    <p className="text-white/70 text-sm mb-4">
      Bringing stories to life through stunning animation.
    </p>

    <button className="text-cyan-400 uppercase text-sm tracking-[2px]">
      View Projects →
    </button>

  </div>

</div>
)}

        {/* Card 02 */}

{(activeCategory === "all" || activeCategory === "architecture") && (
<div
  onClick={() => setActiveCategory("architecture")}
  className="
  relative
  border border-cyan-400/20
  overflow-hidden
  group
  h-[280px]
  cursor-pointer
  hover:border-cyan-400
  transition-all
  "
>

  <img
    src="/images/services/architecture-interior.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

  <div className="absolute bottom-0 left-0 p-5 z-10">

    <h3 className="text-cyan-400 text-4xl mb-2">02</h3>

    <h4 className="text-xl mb-3">ARCHITECTURE</h4>

    <p className="text-white/70 text-sm mb-4">
      Designing spaces that inspire and endure.
    </p>

    <button className="text-cyan-400 uppercase text-sm tracking-[2px]">
      View Projects →
    </button>

  </div>

</div>
)}


        {/* Card 03 */}

{(activeCategory === "all" || activeCategory === "product") && (
<div
  onClick={() => {
    setActiveCategory("product");
    setActiveProductType("shoes");
    setActiveProduct("asics");
  }}
  className="
  relative
  border border-cyan-400/20
  overflow-hidden
  group
  h-[280px]
  cursor-pointer
  hover:border-cyan-400
  transition-all
  "
>

  <img
    src="/images/services/product-visualization.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

  <div className="absolute bottom-0 left-0 p-5 z-10">

    <h3 className="text-cyan-400 text-4xl mb-2">03</h3>

    <h4 className="text-xl mb-3">PRODUCT</h4>

    <p className="text-white/70 text-sm mb-4">
      Product visualization with premium quality.
    </p>

    <button className="text-cyan-400 uppercase text-sm tracking-[2px]">
      View Projects →
    </button>

  </div>

</div>
)}

        {/* Card 04 */}

{(activeCategory === "all" || activeCategory === "visualization") && (
<div
  onClick={() => setActiveCategory("visualization")}
  className="
  relative
  border border-cyan-400/20
  overflow-hidden
  group
  h-[280px]
  cursor-pointer
  hover:border-cyan-400
  transition-all
  "
>

  <img
    src="/images/services/game-art.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition duration-700"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

  <div className="absolute bottom-0 left-0 p-5 z-10">

    <h3 className="text-cyan-400 text-4xl mb-2">04</h3>

    <h4 className="text-xl mb-3">VISUALIZATION</h4>

    <p className="text-white/70 text-sm mb-4">
      Realistic renders that bring ideas alive.
    </p>

    <button className="text-cyan-400 uppercase text-sm tracking-[2px]">
      View Projects →
    </button>

  </div>

</div>
)}

      </div>

    </div>

    {/* Bottom Row */}

    <div className="grid lg:grid-cols-2 gap-4 mt-4">

      {/* Card 05 */}

      <div
  onClick={() => setActiveCategory("game-art")}
  className="
  border border-cyan-400/20
  bg-black
  overflow-hidden
  group
  cursor-pointer
  hover:border-cyan-400
  transition-all
  "
>

        <div className="grid lg:grid-cols-2 h-[260px]">

          <div className="p-4 flex flex-col justify-center">

            <h3 className="text-cyan-400 text-3xl mb-1">05</h3>

            <h4 className="text-xl mb-4">GAME ART</h4>

            <p className="text-white/60 mb-6">
              High quality game assets, environments and characters.
            </p>

            <button className="text-cyan-400 uppercase text-sm tracking-[2px]">
              View Projects →
            </button>

          </div>

          <img
            src="/images/services/game-art.png"
            alt=""
            className="w-full h-full object-cover"
          />

        </div>

      </div>

      {/* Card 06 */}

      <div className="border border-cyan-400/20 bg-black overflow-hidden group">

        <div className="grid lg:grid-cols-2 h-[260px]">

          <div className="p-4 flex flex-col justify-center">

            <h3 className="text-cyan-400 text-3xl mb-1">06</h3>

            <h4 className="text-xl mb-4">WEB & UI</h4>

            <p className="text-white/60 mb-6">
              Designing intuitive interfaces and digital experiences.
            </p>

            <button className="text-cyan-400 uppercase text-sm tracking-[2px]">
              View Projects →
            </button>

          </div>

          <img
            src="/images/services/ui-ux-design.png"
            alt=""
            className="w-full h-full object-cover"
          />

        </div>

      </div>

    </div>

  </div>

</section>

</>
)}

<Footer />
</main>
);
}