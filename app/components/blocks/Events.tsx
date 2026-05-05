"use client";

import { Container } from "../ui/Container";
import { EventCard } from "../ui/EventCard";
import { events } from "@/app/data/events";
import { Divider } from "../ui/Divider";

export default function Events() {
  return (
<section id="aktuellt" className="py-24 bg-white scroll-mt-32">
  <Container>

    <div className="flex flex-col items-center mb-12">
      <h2 className="font-serif text-3xl text-[var(--color-primary)]">
        AKTUELLT
      </h2>
<div className="pb-10 pt-6">
      <Divider />
      </div>

        <div className="flex flex-col gap-10 max-w-2xl mx-auto">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              description={event.description}
            />
          ))}
        </div>
        </div>

      </Container>
    </section>
  );
}