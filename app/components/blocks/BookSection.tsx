"use client";

import { Container } from "../ui/Container";
import { BookCard } from "../ui/BookCard";
import { books } from "@/app/data/books";
import { Divider } from "../ui/Divider";

export default function BookSection({
  onSelectBook,
}: {
  onSelectBook?: (title: string) => void;
}) {
  return (
    <section id="böcker" className="py-15 scroll-mt-25">
      <Container>
        <div className="flex flex-col pb-10 items-center text-center gap-4">
          <h2 className="font-serif text-[var(--color-primary)] text-3xl">
            MINA BÖCKER
          </h2>

          <Divider />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {" "}
          {books.map((book) => (
            <BookCard key={book.id} book={book} onSelectBook={onSelectBook} />
          ))}
        </div>
      </Container>
    </section>
  );
}
