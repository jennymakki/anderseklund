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
    <div className="border border-[var(--color-border)] rounded-md overflow-hidden hover:shadow-md transition bg-white">
      <div className="aspect-[6/6]">
        <img src={book.image} className="w-full h-full object-cover bg-[var(--color-primary)]" />
      </div>

      <div className="p-6 flex flex-col gap-3">
        <h3 className="font-serif text-[var(--color-primary)] text-xl">
          {book.title}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {book.description}
        </p>

        <p className="text-lg text-[var(--color-text-primary)]">
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
  );
}