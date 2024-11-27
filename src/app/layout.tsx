import type { Metadata } from "next";
import "./globals.css";
import { Pixelify_Sans } from "next/font/google";
import { ThemeProvider } from "@/features/theme";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
