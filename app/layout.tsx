import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fylo App",
  description: "Fylo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${raleway.variable} ${openSans.variable} mx-auto max-w-360 bg-[#181f2b] antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
