export default function Footer() {
  return (
    <footer className="relative bg-[#D8DBDF] w-full pt-32">

      <div className="absolute  left-1/2 -translate-x-1/2 -top-24">
        <img 
          src="/siluett.png"
          alt="Heby Historia"
          className="pointer-events-none h-40 md:h-56 w-auto block"
        />
      </div>

      <div className="px-6 md:px-20 bg-[#122D48] py-10 text-center">
        <p className="text-[var(--color-beige)] text-xs md:text-sm">
          © {new Date().getFullYear()} Heby Historia – Lokala berättelser från hjärtat av Heby
        </p>
      </div>

    </footer>
  );
}