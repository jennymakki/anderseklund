export default function Footer() {
  return (
    <footer className="relative bg-[#D8DBDF] w-full pt-0 mt-0">
      <div className="px-6 md:px-20 bg-[#122D48] py-10 text-center">
        <p className="text-[var(--color-beige)] text-xs md:text-sm">
          © {new Date().getFullYear()} Heby Historia – Lokala berättelser från
          hjärtat av Heby
        </p>
      </div>
    </footer>
  );
}
