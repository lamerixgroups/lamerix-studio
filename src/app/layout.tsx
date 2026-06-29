import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Anton } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.lamerix.com"),

  title: {
    default: "LAMERIX Studio | Premium 3D Studio",
    template: "%s | LAMERIX Studio",
  },

  description:
    "LAMERIX Studio delivers premium Game Art, Product Visualization, Animation, Architecture Visualization, Digital Humans and Interactive Experiences for brands, agencies and global clients.",

  keywords: [
    "LAMERIX",
    "LAMERIX Studio",
    "3D Studio",
    "Game Art",
    "Product Visualization",
    "Animation",
    "Architecture Visualization",
    "Interactive Experiences",
    "Digital Humans",
    "3D Modeling",
    "3D Rendering",
    "Creative Studio",
    "India",
  ],

  authors: [
    {
      name: "LAMERIX Studio",
    },
  ],

  creator: "LAMERIX Studio",

  publisher: "LAMERIX Studio",

  robots: {
    index: true,
    follow: true,
  },

  verification: {
  google: "3_oez95g_w0__XZjE4-IHZirgTW3YSWe6svlKO9Ant4",
},

  openGraph: {
    title: "LAMERIX Studio | Premium 3D Studio",

    description:
      "Premium Game Art, Product Visualization, Architecture Visualization, Animation and Interactive Digital Experiences.",

    url: "https://studio.lamerix.com",

    siteName: "LAMERIX Studio",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "LAMERIX Studio",

    description:
      "Premium 3D Studio for Game Art, Animation and Product Visualization.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white overflow-x-hidden">
        {children}
      </body>

      <GoogleAnalytics gaId="G-60RF1Z4P98" />
    </html>
  );
}