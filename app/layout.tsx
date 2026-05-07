import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "./components/blocks/Header";
import Footer from "./components/blocks/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anderseklund.vercel.app"),
  title: "Heby Historia",
  description:
    "Böcker om Hebys historia under 1900-talet av Anders Eklund.",
  keywords: [
    "Heby",
    "historia",
    "Anders Eklund",
    "böcker",
    "lokalhistoria",
  ],

  openGraph: {
    title: "Heby Historia",
    description:
      "Böcker om Hebys historia under 1900-talet av Anders Eklund.",
    url: "https://anderseklund.vercel.app",
    siteName: "Heby Historia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heby Historia",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Heby Historia",
    description:
      "Böcker om Hebys historia under 1900-talet av Anders Eklund.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sv"
      className={`${playfair.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-[6.5rem]">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
