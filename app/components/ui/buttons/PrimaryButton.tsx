type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function PrimaryButton({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-md hover:bg-[#2B3A5C] cursor-pointer transition"
    >
      {children}
    </button>
  );
}