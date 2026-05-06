"use client";

import { BookOpen, Mail } from "lucide-react";
import { PrimaryButton } from "../ui/buttons/PrimaryButton";
import { SecondaryButton } from "../ui/buttons/SecondaryButton";
import { Container } from "../ui/Container";
import { Divider } from "../ui/Divider";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
<div className="absolute inset-0">
  <img
    src="/hero.png"
    alt="Heby historia"
    className="w-full h-full object-cover object-right scale-110 md:scale-100"
  />
</div>

      <Container>
        <div className="relative z-10 h-[85vh] flex items-center">
          <div className="max-w-2xl space-y-2 md:space-y-3">
            <p className="text-[var(--color-primary)] text-xl tracking-wide">
              BÖCKER OM
            </p>

            <h1 className="font-serif pb-4 text-[2.5rem] md:text-7xl text-[var(--color-primary)] leading-[1.05]">
              HEBYS HISTORIA
            </h1>

            <p className="text-[var(--color-accent)] text-xl md:text-2xl font-serif">
              UNDER 1900-TALET
            </p>

            <Divider />
            <p className="text-[var(--color-primary)] text-lg leading-relaxed max-w-s">
              Författade av en lokal historieberättare med kärlek till Heby.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PrimaryButton
                onClick={() => {
                  document
                    .getElementById("böcker")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <BookOpen size={18} />
                SE BÖCKER
              </PrimaryButton>

              <SecondaryButton
                onClick={() => {
                  document
                    .getElementById("kontakt")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail size={18} />
                KONTAKTA MIG
              </SecondaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
