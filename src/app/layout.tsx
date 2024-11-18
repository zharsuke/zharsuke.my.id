import type { Metadata } from "next";
import "./globals.css";
import { Rokkitt } from 'next/font/google'

const font = Rokkitt({
  weight: '400',
  subsets: ['latin'],
})

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Home | Zharsuke",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="synthwave">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
