"use client";

import Hero from "./components/blocks/Hero";
import Author from "./components/blocks/Author";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50">
      
      <section className="w-full py-0 px-0 bg-white space-y-6">
        <Hero/>
        <Author/>
      </section>

    </div>
  );
}