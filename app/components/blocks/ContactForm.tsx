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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedBook) {
      setBookTitle(selectedBook);
      setMessage(`Jag är intresserad av boken: ${selectedBook}`);
    }
  }, [selectedBook]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      book: bookTitle,
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      alert("Meddelandet skickat!");

      e.currentTarget.reset();
      setMessage("");
      setBookTitle("");

    } catch (error) {
      console.error(error);

      alert("Något gick fel, försök igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col pb-5 gap-6">

      <Input
        name="name"
        placeholder="Ditt namn *"
        required
      />

      <Input
        name="email"
        type="email"
        placeholder="Din e-post *"
        required
      />

      <Input
        name="book"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        placeholder="Boktitel"
      />

      <Textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ditt meddelande *"
        required
      />

      <FormButton>
        {loading ? "SKICKAR..." : "SKICKA MEDDELANDE"}
      </FormButton>

    </form>
  );
}