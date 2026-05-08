import { SecondaryButton } from "./buttons/SecondaryButton";
import Image from "next/image";

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
<div className="aspect-square bg-[var(--color-secondary)] flex items-center justify-center p-4 overflow-hidden">
  <Image
    src={book.image}
    alt={book.title}
    width={260}
    height={260}
    className="
      w-full
      h-full
      max-w-[260px]
      max-h-[360px]
      object-contain
      mx-auto
      block
      shadow-[6px_6px_12px_rgba(0,0,0,0.25)]
      transition-transform duration-300
      group-hover:scale-[1.03]
    "
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
