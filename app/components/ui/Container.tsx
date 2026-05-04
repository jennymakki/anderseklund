export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[85rem] px-6 md:px-20">
      {children}
    </div>
  );
}