"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]">
      
      <div className="mx-auto max-w-[75rem] px-6 md:px-20 py-6 flex items-center justify-between">
        
        <div className="flex flex-col">
          <div className="font-serif uppercase text-3xl font-semibold tracking-[0.05em] text-[var(--color-primary)] leading-tight">
            HEBY HISTORIA
          </div>
          <div className="text-base text-[var(--color-primary)] tracking-wide">
            BÖCKER AV LOKALT HJÄRTA
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-[1rem] text-[var(--color-primary)]">
          <a href="/">HEM</a>
          <a href="#bok">BÖCKER</a>
          <a href="#aktuellt">AKTUELLT</a>
          <a href="#kontakt">KONTAKT</a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-6 flex flex-col justify-between z-[60]"
        >
          <span
            className={`h-[2px] w-6 bg-[var(--color-primary)] transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[var(--color-primary)] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-[var(--color-primary)] transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm z-50 bg-[var(--color-background)] shadow-2xl border-l border-[var(--color-border)] transform transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-end gap-10 px-8 pt-28 text-2xl text-[var(--color-primary)]">
          <a href="/" onClick={() => setOpen(false)}>HEM</a>
          <a href="#bok" onClick={() => setOpen(false)}>BÖCKER</a>
          <a href="#aktuellt" onClick={() => setOpen(false)}>AKTUELLT</a>
          <a href="#kontakt" onClick={() => setOpen(false)}>KONTAKT</a>
        </div>
      </div>

    </header>
  );
}
