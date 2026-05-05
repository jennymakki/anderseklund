import { Container } from "../ui/Container";
import ContactForm from "./ContactForm";
import { Divider } from "../ui/Divider";

export default function Contact({ selectedBook }: { selectedBook?: string }) {
  return (
    <section id="kontakt" className="py-24 bg-[#D8DBDF] text-white">
      <Container>

        <div className="max-w-2xl text-center mx-auto flex flex-col gap-10">

          <div className="space-y-4">
            <h2 className="font-serif text-[var(--color-primary)] text-3xl md:text-4xl">
              KONTAKTA MIG
            </h2>

          <div className="flex justify-center">
            <Divider/>
            </div>

            <p className="text-[var(--color-primary)] leading-relaxed">
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