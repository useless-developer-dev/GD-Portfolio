import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yen-nhi.design"),
  title: "Huynh Yen Nhi — Graphic Designer & 3D Artist Portfolio",
  description:
    "Interactive editorial portfolio & visual diary of Huynh Yen Nhi. Specializing in Brand Identity, 3D Spatial Design, Packaging, and Typography.",
  keywords: [
    "Huynh Yen Nhi",
    "Graphic Designer",
    "3D Artist",
    "Visual Diary",
    "Editorial Portfolio",
    "Brand Identity",
    "Packaging Design",
    "Blender",
    "Typography",
  ],
  authors: [{ name: "Huynh Yen Nhi" }],
  openGraph: {
    title: "Huynh Yen Nhi — Graphic Designer & 3D Artist",
    description:
      "A young designer exploring beauty, images, objects, spaces and the quiet details of everyday life.",
    url: "https://yen-nhi.design",
    siteName: "Nhi Huynh Portfolio",
    images: [
      {
        url: "/images/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Huynh Yen Nhi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#F4F0E8" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F0E8] text-[#121212] overflow-x-hidden selection:bg-[#D71920] selection:text-white">
        {children}
      </body>
    </html>
  );
}
