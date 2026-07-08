"use client";

import { Container } from "../ui/Container";
import { EventCard } from "../ui/EventCard";
import { events } from "@/app/data/events";
import { Divider } from "../ui/Divider";

export default function Events() {
  const today = new Date();
  today.setDate(today.getDate() - 1);

  const activeEvents = events.filter((event) => {
    if (!event.date) return true;

    return new Date(event.date) >= today;
  });

  return (
    <section id="aktuellt" className="py-15 bg-white scroll-mt-32">
      <Container>
        <div className="flex flex-col items-center mb-12">
          <h2 className="font-serif text-3xl text-[var(--color-primary)]">
            AKTUELLT
          </h2>

          <div className="pt-6">
            <Divider />
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center justify-center w-full max-w-4xl mx-auto">
          {activeEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.displayDate}
              time={event.time}
              description={event.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
