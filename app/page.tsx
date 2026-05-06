"use client";

import { useState } from "react";
import Hero from "./components/blocks/Hero";
import Author from "./components/blocks/Author";
import BookSection from "./components/blocks/BookSection";
import Contact from "./components/blocks/Contact";
import Events from "./components/blocks/Events";
import Siluett from "./components/blocks/Siluett";

export default function Home() {
  const [selectedBook, setSelectedBook] = useState("");

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50">
      <section className="w-full py-0 px-0 bg-white space-y-6">
        <Hero />

        <Author />

        <BookSection onSelectBook={setSelectedBook} />

        <Events />

        <Contact selectedBook={selectedBook} />

        <div className=" bg-[#D8DBDF] relative flex justify-center -mt-16 md:-mt-24">
          <Siluett />
        </div>
      </section>
    </div>
  );
}
