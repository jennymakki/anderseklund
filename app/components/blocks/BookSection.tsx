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


<div className="mt-6 mb-16 mx-auto max-w-3xl rounded-3xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10 px-6 py-8 sm:px-10 text-center">

  <h3 className="font-serif text-2xl text-[var(--color-primary)] mb-2">
    Finns att köpa hos
  </h3>

  <div className="flex flex-wrap items-center justify-center gap-3">
    <span className="rounded-full border border-[var(--color-primary)]/20 bg-white px-5 py-3 text-sm text-[var(--color-primary)] shadow-sm">
      Heby Folkets Hus
    </span>

    <span className="rounded-full border border-[var(--color-primary)]/20 bg-white px-5 py-3 text-sm text-[var(--color-primary)] shadow-sm">
      Heby Bygg &amp; Villabutik
    </span>
  </div>
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
