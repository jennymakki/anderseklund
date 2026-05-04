export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-md cursor-pointer transition hover:bg-[#2B3A5C] active:scale-[0.98]">
      {children}
    </button>
  );
}