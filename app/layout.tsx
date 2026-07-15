import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open Braille Beacon — haptic system.",
  description:
    "Open Braille Beacon is an open, offline concept for helping blind and low-vision people locate existing Braille and tactile signage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
