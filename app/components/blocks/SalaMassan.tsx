"use client";

import Image from "next/image";
import { Container } from "../ui/Container";

export default function SalaMassan() {
  return (
    <section className="w-full bg-[#D8DBDF] py-10 md:py-15">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Bild */}
          <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden rounded-sm">
            <Image
              src="/salamassan.png"
              alt="Besökare på Sala mässan"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-xl">

            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-primary)] leading-tight mb-6">
              Tack till alla som besökte mig på Sala mässan!
            </h2>

            <p className="text-[var(--color-primary)] text-lg leading-relaxed">
              Det var otroligt roligt att få träffa så många av er och se
              vilket fantastiskt engagemang det finns för Hebys historia.
              Tack för alla fina samtal, frågor och berättelser ni delade med
              er av!
            </p>

            <p className="text-[var(--color-primary)] text-lg leading-relaxed mt-4">
              Det betyder mycket att få dela berättelserna om vår gemensamma
              historia med er.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}