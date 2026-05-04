type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function FormButton({ children, onClick }: Props) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="
        w-full 
        flex items-center justify-center 
        bg-[var(--color-accent)] 
        text-[var(--color-primary)] 
        font-medium 
        px-6 py-4 
        rounded-md 
        hover:opacity-90 
        transition
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}