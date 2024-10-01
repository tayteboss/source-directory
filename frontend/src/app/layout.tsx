import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LenisScroll from "@/components/layout/LenisScroll";

import "./globals.scss";

const geistSans = localFont({
  src: [
    {
      path: "./fonts/Booton-Medium.ttf",
      style: "normal",
    },
    {
      path: "./fonts/Booton-Medium.otf",
      style: "normal",
    },
  ],
  variable: "--font-medium",
});
const geistMono = localFont({
  src: [
    {
      path: "./fonts/Booton-Semibold.ttf",
      style: "normal",
    },
    {
      path: "./fonts/Booton-Semibold.otf",
      style: "normal",
    },
  ],
  variable: "--font-semibold",
});

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="main">
          <LenisScroll>{children}</LenisScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
