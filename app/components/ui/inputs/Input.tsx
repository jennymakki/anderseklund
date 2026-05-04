export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full p-4 rounded-md 
      bg-white/90 
      text-[var(--color-primary)] 
      placeholder:text-[var(--color-text-secondary)]
      border border-transparent
      focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
    />
  );
}