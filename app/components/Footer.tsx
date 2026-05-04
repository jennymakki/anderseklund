export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-primary)] mt-32">
      
      <div className="mx-auto max-w-[85rem] px-6 md:px-20 py-10">
        
        <p className="text-[var(--color-beige)] text-xs md:text-sm leading-relaxed w-full">
          © {new Date().getFullYear()} Heby Historia – Lokala berättelser från hjärtat av Heby
        </p>

      </div>

    </footer>
  );
}