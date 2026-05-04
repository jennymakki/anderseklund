export function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex items-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-md cursor-pointer transition hover:bg-[var(--color-primary)] hover:text-white">
      {children}
    </button>
  );
}