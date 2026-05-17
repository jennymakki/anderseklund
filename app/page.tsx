"use client";

import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Author />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BookSection onSelectBook={setSelectedBook} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Events />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Contact selectedBook={selectedBook} />
        </motion.div>

        <div className="bg-[#D8DBDF] relative flex justify-center -mt-16 md:-mt-24">
          <Siluett />
        </div>
      </section>
    </div>
  );
}
