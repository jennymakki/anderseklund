import { Container } from "../ui/Container";
import { Divider } from "../ui/Divider";

export default function Author() {
  return (
    <section className="py-0">
      <Container>
        
<div className="flex flex-col md:flex-row py-15 items-center md:items-start gap-12 max-w-4xl mx-auto">          
          <div className="flex-shrink-0">
            <img
              src="/anders.png"
              alt="Anders Eklund"
              className="w-48 h-48 md:w-64 md:h-64 bg-[var(--color-primary)] object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col gap-7">
            
            <h2 className="font-serif text-[var(--color-primary)] text-3xl md:text-3xl tracking-wide mb-4">
              ANDERS EKLUND
            </h2>

            <Divider/>

            <p className="text-[var(--color-primary)] text-lg leading-relaxed max-w-lg">
              Jag har under många år samlat berättelser, bilder och historiska fakta från Heby med omnejd. Mina böcker handlar främst om 1900-talet - människor, platser och förändringen av ett samhälle i utveckling.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}