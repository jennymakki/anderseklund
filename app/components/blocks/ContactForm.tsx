"use client";

import { useState, useEffect } from "react";
import { Input } from "../ui/inputs/Input";
import { Textarea } from "../ui/inputs/Textarea";
import { FormButton } from "../ui/buttons/FormButton";

type Props = {
  selectedBook?: string;
};

export default function ContactForm({ selectedBook }: Props) {
  const [bookTitle, setBookTitle] = useState(selectedBook || "");

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (selectedBook) {
      setBookTitle(selectedBook);
      setMessage(`Jag är intresserad av boken: ${selectedBook}`);
    }
  }, [selectedBook]);

  return (
    <form className="flex flex-col gap-6">

      <Input placeholder="Ditt namn" />
      <Input type="email" placeholder="Din e-post" />

      <Input
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        placeholder="Boktitel"
      />

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