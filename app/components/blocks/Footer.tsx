export default function Footer() {
  return (
    <footer className="relative w-full bg-[#122D48] overflow-visible">
      
      <div className="absolute left-1/2 bottom-full -translate-x-1/2 translate-y-0.5">
        <img
          src="/siluett.png"
          alt="Heby Historia"
          className="h-40 md:h-56 w-auto block"
        />
      </div>

      <div className="mx-auto max-w-[85rem] px-6 md:px-20 py-10">
        <p className="text-[var(--color-beige)] text-xs md:text-sm leading-relaxed w-full">
          © {new Date().getFullYear()} Heby Historia – Lokala berättelser från hjärtat av Heby
        </p>
      </div>

    </footer>
  );
}