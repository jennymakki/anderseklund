"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto max-w-[75rem] px-6 md:px-20 py-6 flex items-center justify-between">
        {/* Logo + subtitle */}
        <div className="flex flex-col">
          <div className="font-serif uppercase text-3xl text-[var(--color-primary)] leading-tight">
            HEBY HISTORIA
          </div>
          <div className="text-base text-[var(--color-primary)] tracking-wide">
            Böcker av lokalt hjärta
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-[1rem] text-[var(--color-primary)]">
          <a href="/">HEM</a>
          <a href="#bok">BÖCKER</a>
          <a href="#aktuellt">AKTUELLT</a>
          <a href="#kontakt">KONTAKT</a>
        </nav>

        {/* Burger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-[var(--color-primary)]" />
          <span className="w-6 h-[2px] bg-[var(--color-primary)]" />
          <span className="w-6 h-[2px] bg-[var(--color-primary)]" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 items-end text-lg text-[var(--color-primary)]">
          <a href="/">HEM</a>
          <a href="#bok">BÖCKER</a>
          <a href="#aktuellt">AKTUELLT</a>
          <a href="#kontakt">KONTAKT</a>
        </div>
      )}
    </header>
  );
}
