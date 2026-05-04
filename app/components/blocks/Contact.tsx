import { Container } from "../ui/Container";
import ContactForm from "./ContactForm";

export default function Contact({ selectedBook }: { selectedBook?: string }) {
  return (
    <section id="kontakt" className="py-24 bg-[var(--color-primary)] text-white">
      <Container>

        <div className="max-w-2xl mx-auto flex flex-col gap-10">

          <div className="space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl">
              KONTAKTA FÖRFATTAREN
            </h2>

            <p className="text-white/80 leading-relaxed">
              Intresserad av en bok eller vill veta mer om Hebys historia?
              Skicka ett meddelande så svarar jag personligen.
            </p>
          </div>

          <ContactForm selectedBook={selectedBook} />

        </div>

      </Container>
    </section>
  );
}