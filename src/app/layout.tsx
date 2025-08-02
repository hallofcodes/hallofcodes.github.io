import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hall of Codes - Merging Programmers Beyond Conflicts",
  description:
    "Be part of a vibrant community where innovation thrives and collaboration is key.",
  openGraph: {
    title: "Hall of Codes - Merging Programmers Beyond Conflicts",
    description:
      "Be part of a vibrant community where innovation thrives and collaboration is key.",
    url: "https://hallofcodes.github.io/",
    siteName: "Hall of Codes",
    images: [
      {
        url: "https://hallofcodes.github.io/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Hall of Codes Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hall of Codes - Merging Programmers Beyond Conflicts",
    description:
      "Be part of a vibrant community where innovation thrives and collaboration is key.",
    images: [
      {
        url: "https://hallofcodes.github.io/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Hall of Codes Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
