import { Container } from "../ui/Container";
import { Divider } from "../ui/Divider";

export default function Author() {
  return (
    <section className="py-24">
      <Container>
        
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          <div className="flex-shrink-0">
            <img
              src="/author.jpg"
              alt="Författaren"
              className="w-48 h-48 md:w-64 md:h-64 bg-[var(--color-primary)] object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col gap-7">
            
            <h2 className="font-serif text-[var(--color-primary)] text-lg md:text-3xl tracking-wide mb-4">
              OM FÖRFATTAREN
            </h2>

            <Divider/>

            <p className="text-[var(--color-primary)] text-m leading-relaxed max-w-xl">
              Jag har under många år samlat berättelser, bilder och historiska fakta från Heby med omnejd. Mina böcker handlar främst om 1900-talet - människor, platser och förändringen av ett samhälle i utveckling.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}