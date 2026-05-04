export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full p-4 rounded-md min-h-[150px]
      bg-white/90 
      text-[var(--color-primary)] 
      placeholder:text-[var(--color-text-secondary)]
      border border-transparent
      focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
    />
  );
}