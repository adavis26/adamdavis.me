import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import clsx from "clsx";

const noto = Noto_Sans({ subsets: ["latin"], weight: ['200', '400', '600', '800'] });

export const metadata: Metadata = {
  title: "Adam Davis",
  description: "Personal site for Adam Davis"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(noto.className, 'text-gray-600', 'dark:text-white', 'dark:bg-slate-950')}>{children}</body>
    </html>
  );
}
