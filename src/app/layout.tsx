import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jérémy Combe",
  description: "My own dev portfolio",
  icons: {
    icon: [
        {
            url: "/favicon.ico", // /public path
            href: "/favicon.ico", // /public path
        },
    ],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {children}
        <Analytics />
      </body>
    </html>
  );
}
