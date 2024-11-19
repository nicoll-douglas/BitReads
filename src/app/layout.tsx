import type { Metadata } from "next";
import "./globals.css";
import { DotGothic16, Pixelify_Sans } from "next/font/google";

const dotGothic16 = DotGothic16({ subsets: ["latin"], weight: "400" });
const pixelifySans = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelifySans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
