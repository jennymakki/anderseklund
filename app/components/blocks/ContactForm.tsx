"use client";

import { useState } from "react";
import { Input } from "../ui/inputs/Input";
import { Textarea } from "../ui/inputs/Textarea";
import { FormButton } from "../ui/buttons/FormButton";

type Props = {
  selectedBook?: string;
};

export default function ContactForm({ selectedBook }: Props) {
  const [message, setMessage] = useState(
    selectedBook ? `Jag är intresserad av boken: ${selectedBook}` : ""
  );

  return (
    <form className="flex flex-col gap-6">

      <Input placeholder="Ditt namn" />
      <Input type="email" placeholder="Din e-post" />

      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ditt meddelande"
      />

      <FormButton>
        SKICKA MEDDELANDE
      </FormButton>

    </form>
  );
}