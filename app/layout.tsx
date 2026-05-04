import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Heby Historia",
  description: "En historisk bok om Heby",
};

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
      <body className="min-h-full flex flex-col">
        
        <Header />
        
        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}