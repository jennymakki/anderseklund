import { Calendar } from "lucide-react";

type EventProps = {
  title: string;
  date: string;
  time: string;
  description: string;
};

export function EventCard({ title, date, time, description }: EventProps) {
  return (
    <div className="flex gap-4">
      
      <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
        <Calendar className="text-white w-5 h-5" />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-[var(--color-primary)] font-semibold text-xl">
          {title}
        </h3>

        <p className="text-base text-[var(--color-text-secondary)]">
          {date} • {time}
        </p>

        <p className="text-base text-[var(--color-text-primary)] leading-relaxed">
          {description}
        </p>
      </div>
      </div>
    
  )
}
