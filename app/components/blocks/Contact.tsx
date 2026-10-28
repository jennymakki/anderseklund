import { Container } from "../ui/Container";
// import ContactForm from "./ContactForm";s
import { Divider } from "../ui/Divider";

export default function Contact /*({ selectedBook }: { selectedBook?: string }) */ () {
  return (
    <section id="kontakt" className="py-24 bg-[#D8DBDF] text-white scroll-mt-25">
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
              Skicka ett meddelande till <a href="mailto:kattmynta@hotmail.com" className="underline hover:opacity-75">kattmynta@hotmail.com</a>{" "} så svarar jag personligen.
            </p>
          </div>

          {/* <ContactForm selectedBook={selectedBook} /> */}

        </div>

      </Container>
    </section>
  );
}