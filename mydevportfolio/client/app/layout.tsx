import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Providers from "./provider";
import Header from "./components/header";
import { Analytics } from "@vercel/analytics/next"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alson Gard ",
  description: "my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
        <Analytics/>
      </body>
    </html>
  );
}
