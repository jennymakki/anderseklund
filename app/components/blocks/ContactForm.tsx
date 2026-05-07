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
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (selectedBook) {
      setBookTitle(selectedBook);
      setMessage(`Jag är intresserad av boken: ${selectedBook}`);
    }
  }, [selectedBook]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error || "Failed to send");
      }

      setSuccess(true);

      e.currentTarget.reset();
      setMessage("");
      setBookTitle("");

    } catch (error) {
      console.error(error);
      setErrorMessage("Något gick fel, försök igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col pb-5 gap-6">

      <Input name="name" placeholder="Ditt namn *" required />
      <Input name="email" type="email" placeholder="Din e-post *" required />

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

      {success && (
        <p className="text-green-700 bg-green-50 border border-green-200 rounded-md px-4 py-3 text-sm">
          Meddelandet skickades!
        </p>
      )}

      {errorMessage && (
        <p className="text-red-700 bg-red-50 border border-red-200 rounded-md px-4 py-3 text-sm">
          {errorMessage}
        </p>
      )}

      <FormButton disabled={loading}>
        {loading ? "SKICKAR..." : "SKICKA MEDDELANDE"}
      </FormButton>

    </form>
  );
}