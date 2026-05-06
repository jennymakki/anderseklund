export default function Footer() {
  return (
    <footer className="w-full pt-24">
      
      <div className="flex justify-center -mt-16">
        <img 
          src="/siluett.png"
          alt="Heby Historia"
          className="pointer-events-none h-40 md:h-56 w-auto block"
        />
      </div>

      <div className="px-6  bg-[#122D48] md:px-20 py-10 text-center">
        <p className="text-[var(--color-beige)] text-xs md:text-sm">
          © {new Date().getFullYear()} Heby Historia – Lokala berättelser från hjärtat av Heby
        </p>
      </div>

    </footer>
  );
}