import { SecondaryButton } from "./buttons/SecondaryButton";

type Props = {
  book: {
    title: string;
    description: string;
    image: string;
    price: string;
  };
  onSelectBook?: (title: string) => void;
};

export function BookCard({ book, onSelectBook }: Props) {
  return (
    <div className="group border border-[var(--color-border)] rounded-md overflow-hidden bg-white flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-square bg-[var(--color-secondary)] flex items-center justify-center p-2">
        <img
          src={book.image}
          alt={book.title}
          className="max-w-full max-h-full object-contain shadow-[6px_6px_12px_rgba(0,0,0,0.25)]"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 gap-3">
        <h3 className="font-serif font-bold text-[var(--color-primary)] text-xl">
          {book.title}
        </h3>

        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed line-clamp-6">
          {book.description}
        </p>

        <div className="mt-auto flex flex-col gap-3">
          <p className="text-lg font-medium text-[var(--color-text-primary)]">
            {book.price}
          </p>

          <SecondaryButton
            onClick={() => {
              onSelectBook?.(book.title);

              document
                .getElementById("kontakt")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            BESTÄLL FRÅN FÖRFATTARE
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}
