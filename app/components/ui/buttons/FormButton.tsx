type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export function FormButton({ children, onClick, disabled }: Props) {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className="
        w-full 
        flex items-center justify-center 
        bg-[var(--color-primary)] 
        text-[var(--color-secondary)] 
        font-medium 
        px-6 py-4 
        rounded-md 
        transition
        hover:opacity-90
        disabled:opacity-50
        disabled:cursor-not-allowed
        cursor-pointer
      "
    >
      {disabled ? "SKICKAR..." : children}
    </button>
  );
}