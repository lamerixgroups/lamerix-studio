"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineShieldCheck,
} from "react-icons/hi";

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


export default function ContactPage() {
    const form = useRef();

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  email: "",
  company: "",
  project: "",
  message: "",
});

const [errors, setErrors] = useState({});

const sendEmail = (e) => {
  e.preventDefault();
  if (!validateForm()) {
  return;
}
  setLoading(true);
  setSuccess(false);
  setError(false);

  emailjs.sendForm(
    "service_ls3d1q4",
    "template_56ul7s5",
    form.current,
    "JX1kA-uezb7KXHdeO"
  )

  .then(() => {
    setLoading(false);
    setSuccess(true);
    form.current.reset();
    setTimeout(() => {
      setSuccess(false);
    }, 3500);
  })

  .catch((err) => {
    console.log(err);
    setLoading(false);
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3500);
  });
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
  setErrors((prev) => ({
    ...prev,
    [name]: "",
  }));
};

const validateForm = () => {
  const newErrors = {};

  // Full Name
  if (!formData.name.trim()) {
    newErrors.name = "Full Name is required.";
  }

  // Email
  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    newErrors.email = "Please enter a valid email.";
  }

  // Project Type
  if (!formData.project.trim()) {
    newErrors.project = "Please select a project type.";
  }

  // Message
  if (!formData.message.trim()) {
    newErrors.message = "Please enter your project details.";
  } else if (formData.message.trim().length < 20) {
    newErrors.message =
      "Message should be at least 20 characters.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;

};

  return (

    <main className="bg-black text-white min-h-screen">

      <Header />

      <section className="pt-40 pb-24 px-8 lg:px-10">

        <div className="max-w-[1700px] mx-auto text-center">

          {/* ================= CONTACT HERO ================= */}

<div className="flex flex-col items-center">

  {/* Top Label */}

  <div className="flex items-center gap-6 mb-8">

    <div className="w-24 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>

    <span className="text-cyan-400 uppercase tracking-[8px] text-sm">
      GET IN TOUCH
    </span>

    <div className="w-24 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>

  </div>

  {/* CONTACT */}

  <div className="relative inline-block pb-10">

    <h1
      className="
      text-[150px]
      lg:text-[190px]
      font-black
      tracking-[10px]
      leading-[0.85]
      text-white
      relative
      z-20
    "
      style={{
        textShadow:
          "0 0 12px rgba(255,255,255,.45), 0 0 35px rgba(255,255,255,.25)",
      }}
    >
      CONTACT
    </h1>

    {/* Cyan Line */}

    <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[320px] h-[2px] bg-cyan-400 z-20"></div>

    {/* Inner Glow */}

    <div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-[460px] h-[14px] rounded-full bg-cyan-400/80 blur-xl"></div>

    {/* Outer Glow */}

    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[50px] rounded-full bg-cyan-400/20 blur-3xl"></div>

  </div>

  <h2 className="text-5xl font-light mt-2">
    Have a project in mind?
  </h2>

  <p className="text-white/60 text-[22px] mt-6 leading-10 max-w-[850px] mx-auto">

    Let's discuss how LAMERIX can help bring your ideas
    to life through design, technology and creativity.

  </p>

</div>

<section
  id="contact-form"
  className="pb-24 px-8 lg:px-10"
>

  <div className="max-w-[1700px] mx-auto grid lg:grid-cols-[420px_40px_1fr] gap-8 items-stretch">

    {/* ================= LEFT SIDE ================= */}

<div className="relative overflow-hidden border border-cyan-400/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-md p-10 rounded-sm">

  {/* Background Glow */}

  <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-400/10 blur-[120px] rounded-full"></div>

  <div className="relative z-10">

    {/* Heading */}

    <h3 className="text-[42px] font-light uppercase tracking-[2px]">
      GET IN TOUCH
    </h3>

    <div className="w-20 h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,.8)] mt-0 mb-6"></div>

    {/* ================= EMAIL ================= */}

    <div className="flex items-center gap-20 pb-4 border-b border-white/10">

      <div className="w-10 h-10 border border-cyan-400/40 rounded-lg flex items-center justify-center bg-cyan-400/5 shadow-[0_0_25px_rgba(0,255,255,.18)]">

        <HiOutlineMail className="text-cyan-400 text-[20px]" />

      </div>

      <div>

        <p className="text-cyan-400 uppercase tracking-[4px] text-xs mb-1">
          Email
        </p>

        <p className="text-white/80 text-lg">
          info@lamerix.com
        </p>

      </div>

    </div>

    {/* ================= PHONE ================= */}

    <div className="flex items-center gap-20 py-4 border-b border-white/10">

      <div className="w-10 h-10 border border-cyan-400/40 rounded-lg flex items-center justify-center bg-cyan-400/5 shadow-[0_0_25px_rgba(0,255,255,.18)]">

        <HiOutlinePhone className="text-cyan-400 text-[20px]" />

      </div>

      <div>

        <p className="text-cyan-400 uppercase tracking-[4px] text-xs mb-2">
          Phone
        </p>

        <p className="text-white/80 text-lg">
          +91 74475 51869
        </p>

      </div>

    </div>

    {/* ================= LOCATION ================= */}

    <div className="flex items-center gap-10 py-4 border-b border-white/10">

      <div className="w-10 h-10 border border-cyan-400/40 rounded-lg flex items-center justify-center bg-cyan-400/5 shadow-[0_0_25px_rgba(0,255,255,.18)]">

        <HiOutlineLocationMarker className="text-cyan-400 text-[20px]" />

      </div>

      <div>

        <p className="text-cyan-400 uppercase tracking-[4px] text-xs mb-2">
          Location
        </p>

        <p className="text-white/80 leading-7">
          Indore, Madhya Pradesh, India
        </p>

      </div>

    </div>

    {/* ================= SOCIAL ================= */}

    <div className="pt-5">

      <p className="text-cyan-400 uppercase tracking-[4px] text-xs mb-8">
        FOLLOW US
      </p>

      <div className="space-y-4">

        {/* LinkedIn */}

        <a
          href="#"
          className="group flex items-center justify-between border border-white/10 px-5 py-2 hover:border-cyan-400 transition-all duration-300"
        >

          <div className="flex items-center gap-10">

            <div className="w-10 h-10 border border-cyan-400/40 flex items-center justify-center rounded-md bg-cyan-400/5">

              <FaLinkedinIn className="text-cyan-400" />

            </div>

            <span className="text-white/80 group-hover:text-white">
              LinkedIn
            </span>

          </div>

          <span className="text-cyan-400 group-hover:translate-x-2 transition-all">
            →
          </span>

        </a>

        {/* Instagram */}

        <a
          href="#"
          className="group flex items-center justify-between border border-white/10 px-5 py-2 hover:border-cyan-400 transition-all duration-300"
        >

          <div className="flex items-center gap-10">

            <div className="w-10 h-10 border border-cyan-400/40 flex items-center justify-center rounded-md bg-cyan-400/5">

              <FaInstagram className="text-cyan-400" />

            </div>

            <span className="text-white/80 group-hover:text-white">
              Instagram
            </span>

          </div>

          <span className="text-cyan-400 group-hover:translate-x-2 transition-all">
            →
          </span>

        </a>

        {/* Behance */}

        <a
          href="#"
          className="group flex items-center justify-between border border-white/10 px-5 py-2 hover:border-cyan-400 transition-all duration-300"
        >

          <div className="flex items-center gap-10">

            <div className="w-10 h-10 border border-cyan-400/40 flex items-center justify-center rounded-md bg-cyan-400/5">

              <FaBehance className="text-cyan-400" />

            </div>

            <span className="text-white/80 group-hover:text-white">
              Behance
            </span>

          </div>

          <span className="text-cyan-400 group-hover:translate-x-2 transition-all">
            →
          </span>

        </a>

        {/* YouTube */}

        <a
          href="#"
          className="group flex items-center justify-between border border-white/10 px-5 py-2 hover:border-cyan-400 transition-all duration-300"
        >

          <div className="flex items-center gap-10">

            <div className="w-10 h-10 border border-cyan-400/40 flex items-center justify-center rounded-md bg-cyan-400/5">

              <FaYoutube className="text-cyan-400" />

            </div>

            <span className="text-white/80 group-hover:text-white">
              YouTube
            </span>

          </div>

          <span className="text-cyan-400 group-hover:translate-x-2 transition-all">
            →
          </span>

        </a>

      </div>

    </div>

  </div>

</div>

    {/* Vertical Divider */}

<div className="hidden lg:flex justify-center relative">

  {/* Line */}

  <div className="relative w-px bg-cyan-400/30 h-full">

    {/* Top Glow */}

    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-cyan-400 blur-sm"></div>

    {/* Center Energy */}

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

      <div className="w-[2px] h-20 bg-cyan-400"></div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-400/70 blur-xl rounded-full"></div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_25px_rgba(0,255,255,1)]"></div>

    </div>

    {/* Bottom Glow */}

    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 bg-cyan-400 blur-sm"></div>

  </div>

</div>

    {/* ================= RIGHT SIDE ================= */}

<form
  ref={form}
  onSubmit={sendEmail}
  className="relative overflow-hidden border border-cyan-400/20 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-md rounded-sm p-12"
>

  {/* Background Glow */}

  <div className="absolute -top-32 right-0 w-72 h-72 bg-cyan-400/10 blur-[140px] rounded-full"></div>

  <div className="relative z-10">

    {/* Heading */}

    <h3 className="text-[42px] font-light uppercase tracking-[2px]">
      SEND US A MESSAGE
    </h3>

    <div className="w-20 h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,.8)] mt-0 mb-6"></div>

    {/* Row */}

    <div className="grid lg:grid-cols-2 gap-7 mb-4">

      <div>

  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Full Name"
    className={`
      h-[50px]
      w-full
      px-7
      bg-black/40
      border
      ${
        errors.name
          ? "border-red-500"
          : "border-white/10"
      }
      text-white
      placeholder:text-white/35
      transition-all
      duration-300
      outline-none
      focus:border-cyan-400
      focus:bg-black/70
      focus:shadow-[0_0_25px_rgba(0,255,255,.15)]
    `}
  />

  {errors.name && (

    <p className="text-red-400 text-sm mt-2 text-left">

      {errors.name}

    </p>

  )}

</div>

      <div>

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email Address"
    className={`
      h-[50px]
      w-full
      px-7
      bg-black/40
      border
      ${
        errors.email
          ? "border-red-500"
          : "border-white/10"
      }
      text-white
      placeholder:text-white/35
      transition-all
      duration-300
      outline-none
      focus:border-cyan-400
      focus:bg-black/70
      focus:shadow-[0_0_25px_rgba(0,255,255,.15)]
    `}
  />

  {errors.email && (

    <p className="text-red-400 text-sm mt-2 text-left">

      {errors.email}

    </p>

  )}

</div>

    </div>

    {/* Company */}

    <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  placeholder="Company Name (Optional)"
  className="
    w-full
    h-[50px]
    px-7
    mb-7
    bg-black/40
    border
    border-white/10
    text-white
    placeholder:text-white/35
    transition-all
    duration-300
    outline-none
    focus:border-cyan-400
    focus:bg-black/70
    focus:shadow-[0_0_25px_rgba(0,255,255,.15)]
  "
/>

    {/* Select */}

    <div>

  <select
    name="project_type"
    value={formData.project_type}
    onChange={handleChange}
    className={`
      w-full
      h-[50px]
      px-7
      mb-2
      bg-black/40
      border
      ${
        errors.project_type
          ? "border-red-500"
          : "border-white/10"
      }
      text-white
      transition-all
      duration-300
      outline-none
      focus:border-cyan-400
      focus:bg-black/70
      focus:shadow-[0_0_25px_rgba(0,255,255,.15)]
    `}
  >

    <option value="">Select Project Type</option>

    <option value="Game Art">Game Art</option>

    <option value="Animation">Animation</option>

    <option value="Visualization">Visualization</option>

    <option value="Architecture">Architecture</option>

    <option value="Web & App Development">
      Web & App Development
    </option>

    <option value="UI / UX Design">
      UI / UX Design
    </option>

    <option value="Other">
      Other
    </option>

  </select>

  {errors.project_type && (

    <p className="text-red-400 text-sm text-left mb-5">

      {errors.project_type}

    </p>

  )}

</div>

    {/* Message */}

    <div>

  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    rows={9}
    placeholder="Tell us about your project..."
    className={`
      w-full
      p-6
      mb-2
      resize-none
      bg-black/40
      border
      ${
        errors.message
          ? "border-red-500"
          : "border-white/10"
      }
      text-white
      placeholder:text-white/35
      transition-all
      duration-300
      outline-none
      focus:border-cyan-400
      focus:bg-black/70
      focus:shadow-[0_0_25px_rgba(0,255,255,.15)]
    `}
  />

  {errors.message && (

    <p className="text-red-400 text-sm text-left mb-6">

      {errors.message}

    </p>

  )}

</div>

    {/* Button */}

    <button
        type="submit"
      className="
      group
      relative
      w-full
      h-[60px]
      overflow-hidden
      border
      border-cyan-400
      uppercase
      tracking-[6px]
      text-cyan-400
      transition-all
      duration-500
      hover:text-white
      hover:shadow-[0_0_40px_rgba(0,255,255,.45)]
    "
    >

      {/* Glow */}

      <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-cyan-400/10"></span>

      <span className="relative z-10 flex items-center justify-center gap-3">

        {loading ? "SENDING..." : "SEND MESSAGE"}

        <span className="transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>

      </span>

    </button>

  </div>

</form>

</div>   {/* max-w grid end */}
</section>

<div className="mt-0">

  <div className="max-w-[1700px] mx-auto">

    <div className="grid lg:grid-cols-3 gap-8">

        {/* ================= SUCCESS POPUP ================= */}

{success && (

<div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">

  <div className="w-[430px] border border-cyan-400/40 bg-[#050505] p-10 text-center shadow-[0_0_60px_rgba(0,255,255,.25)]">

    <div className="w-20 h-20 mx-auto rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 text-5xl shadow-[0_0_30px_rgba(0,255,255,.4)]">

      ✓

    </div>

    <h3 className="text-3xl mt-8 mb-4 uppercase tracking-[4px]">

      Message Sent

    </h3>

    <p className="text-white/60 leading-8">

      Thank you for contacting LAMERIX.

      <br />

      Our team will contact you within 24 hours.

    </p>

  </div>

</div>

)}

{/* ================= ERROR POPUP ================= */}

{error && (

<div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">

  <div className="w-[430px] border border-red-500/40 bg-[#050505] p-10 text-center shadow-[0_0_60px_rgba(255,0,0,.2)]">

    <div className="w-20 h-20 mx-auto rounded-full border border-red-500 flex items-center justify-center text-red-500 text-5xl">

      !

    </div>

    <h3 className="text-3xl mt-8 mb-4 uppercase tracking-[4px]">

      Failed

    </h3>

    <p className="text-white/60 leading-8">

      Something went wrong.

      <br />

      Please try again.

    </p>

  </div>

</div>

)}


      {/* ================= CARD 1 ================= */}

      <div className="group relative overflow-hidden border border-cyan-400/20 bg-gradient-to-b from-[#081114] to-black h-[235px] p-8 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,255,255,.15)]">

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,1)]"></div>

  <div className="flex h-full">

    <div className="w-[95px] flex justify-center">

      <div className="w-16 h-16 rounded-xl border border-cyan-400/30 bg-cyan-400/5 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,.15)]">

        <HiOutlineLightningBolt className="text-cyan-400 text-[34px]" />

      </div>

    </div>

    <div className="w-px bg-white/10 mx-6"></div>

    <div className="flex-1">

      <p className="uppercase tracking-[5px] text-[11px] text-white/40 mb-3">
        Average Response Time
      </p>

      <h3 className="text-cyan-400 text-[28px] font-light">
        Within 24 Hours
      </h3>

      <p className="text-white/60 leading-8">
        We value your time and ensure quick responses.
      </p>

    </div>

  </div>

</div>

      {/* ================= CARD 2 ================= */}

      <div className="group relative overflow-hidden border border-cyan-400/20 bg-gradient-to-b from-[#081114] to-black h-[235px] p-8 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,255,255,.15)]">

  {/* Top Glow Dot */}

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,1)]"></div>

  <div className="flex h-full">

    {/* Icon */}

    <div className="w-[95px] flex justify-center">

      <div className="w-16 h-16 rounded-xl border border-cyan-400/30 bg-cyan-400/5 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,.15)]">

        <HiOutlineGlobe className="text-cyan-400 text-[34px]" />

      </div>

    </div>

    {/* Divider */}

    <div className="w-px bg-white/10 mx-6"></div>

    {/* Content */}

    <div className="flex-1">

      <p className="uppercase tracking-[5px] text-[11px] text-white/40 mb-3">
        Global Clients
      </p>

      <h3 className="text-cyan-400 text-[28px] font-light leading-tight">
        Remote Worldwide
      </h3>

      <p className="text-white/60 leading-8">
        We work with clients across the globe.
      </p>

    </div>

  </div>

</div>

      {/* ================= CARD 3 ================= */}

      <div className="group relative overflow-hidden border border-cyan-400/20 bg-gradient-to-b from-[#081114] to-black h-[235px] p-8 transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,255,255,.15)]">

  {/* Top Glow Dot */}

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(0,255,255,1)]"></div>

  <div className="flex h-full">

    {/* Icon */}

    <div className="w-[95px] flex justify-center">

      <div className="w-16 h-16 rounded-xl border border-cyan-400/30 bg-cyan-400/5 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,.15)]">

        <HiOutlineShieldCheck className="text-cyan-400 text-[34px]" />

      </div>

    </div>

    {/* Divider */}

    <div className="w-px bg-white/10 mx-6"></div>

    {/* Content */}

    <div className="flex-1">

      <p className="uppercase tracking-[5px] text-[11px] text-white/40 mb-3">
        NDA Friendly
      </p>

      <h3 className="text-cyan-400 text-[28px] font-light leading-tight">
        Confidentiality First
      </h3>

      <p className="text-white/60 leading-8">
        Your ideas are safe with us under strict confidentiality.
      </p>

    </div>

  </div>

</div>

    </div> {/* Cards Grid */}

  </div> {/* max width */}

</div> {/* mt-16 */}

</div> {/* max-1700 hero */}

</section>

<Footer />

</main>
  );
}