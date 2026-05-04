type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function SecondaryButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-md hover:bg-[var(--color-primary)] cursor-pointer hover:text-white transition"
    >
      {children}
    </button>
  );
}