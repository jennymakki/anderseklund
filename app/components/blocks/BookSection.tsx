"use client";

import { useState } from "react";
import { Container } from "../ui/Container";
import { BookCard } from "../ui/BookCard";
import { books } from "@/app/data/books";
import { Divider } from "../ui/Divider";
import { PrimaryButton } from "../ui/buttons/PrimaryButton";

export default function BookSection({ onSelectBook }: { onSelectBook?: (title: string) => void }) {
  const [showAll, setShowAll] = useState(false);

  const visibleBooks = showAll ? books : books.slice(0, 3);

  return (
    <section id="böcker" className="py-24 scroll-mt-25">
      <Container>
        <div className="flex flex-col pb-10 items-center text-center gap-4">
          <h2 className="font-serif text-[var(--color-primary)] text-3xl">
            MINA BÖCKER
          </h2>
          <Divider />
        </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {visibleBooks.map((book) => (
    <BookCard
      key={book.id}
      book={book}
      onSelectBook={onSelectBook}
    />
  ))}
</div>

        {books.length > 3 && (
          <div className="flex justify-center mt-10">
            <PrimaryButton onClick={() => setShowAll(!showAll)}>
              {showAll ? "VISA MINDRE" : "VISA FLER BÖCKER"}
            </PrimaryButton>
          </div>
        )}
      </Container>
    </section>
  );
}