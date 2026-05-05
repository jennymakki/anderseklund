export default function Footer() {
  return (
    <footer className="w-full pt-16">
      
      <div className="flex justify-center pt-3 bg-[#D8DBDF]  -mt-20">
        <img 
          src="/siluett.png"
          alt="Heby Historia"
          className="pointer-events-none h-40 md:h-56 w-auto block"
        />
      </div>

      <div className="mx-auto max-w-auto bg-[#122D48] px-6 md:px-20 py-10">
        <p className="text-[var(--color-beige)] text-xs md:text-sm leading-relaxed text-center">
          © {new Date().getFullYear()} Heby Historia – Lokala berättelser från hjärtat av Heby
        </p>
      </div>

    </footer>
  );
}