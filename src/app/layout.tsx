import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Head from "next/head";
import NextTopLoader from "nextjs-toploader";

const latoSans = Lato({
  variable: "--font-lato-sans",
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hallofcodes.github.io"),
  title: "Hall of Codes - Merging Programmers Beyond Conflicts",
  description:
    "Be part of a vibrant community where innovation thrives and collaboration is key.",
  keywords: [
    "Hall of Codes",
    "programming",
    "collaboration",
    "community",
    "innovation",
    "open source",
    "software development",
    "tech community",
    "developer community",
    "programmer collaboration",
    "coding",
    "software projects",
    "teamwork",
    "conflict resolution",
    "synergy",
    "collective innovation",
    "diverse talents",
    "seamless collaboration",
    "unity",
    "progress",
    "merging programmers",
    "conflict-free development",
    "project management",
  ],
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
      <Head>
        <meta name="hostname" content="hallofcodes.github.io" />
      </Head>
      <body className={`${latoSans.variable} antialiased`}>
        <Nav />
        <NextTopLoader showSpinner={false} color="#FF6600" />
        <main className="bg-white dark:bg-gray-900 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
