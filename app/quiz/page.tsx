"use client";

import { useState } from "react";
import { Container } from "../components/ui/Container";
import { Divider } from "../components/ui/Divider";

const questions = [
  {
    question: "Vem sponsrar min senaste bok?",
    answers: ["Sala Sparbank", "Anders och Charlotte Wall", "Heby kommun"],
  },
  {
    question: "När bildades Heby AIF?",
    answers: ["1912", "1920", "1925"],
  },
  {
    question:
      "Vilken popgrupp har publikrekordet på 930 besökande i Folkets hus under Club Shake-åren?",
    answers: ["Tages", "Hep Stars", "Shanes"],
  },
  {
    question: "När invigdes järnvägen i Heby?",
    answers: ["1873", "1882", "1885"],
  },
  {
    question:
      "Hur många takpannor tillverkade Olsson & Rosenlund per år i mitten på 1950-talet?",
    answers: ["3 miljoner", "5 miljoner", "7 miljoner"],
  },
  {
    question: "Hur många böcker har jag skrivit?",
    answers: ["3", "6", "8"],
  },
  {
    question: "När började Heby AIF med damfotboll i Heby?",
    answers: ["1971", "1981", "1985"],
  },
  {
    question:
      "Vilket år överlämnades Heby kommun från Västmanlands län till Uppsala län?",
    answers: ["2005", "2007", "2009"],
  },
  {
    question: "När byggdes Folkets Park i Heby?",
    answers: ["1922", "1931", "1939"],
  },
  {
    question:
      "Vilket år var det mest visade klippet på Youtube i Sverige från Heby?",
    answers: ["2005", "2009", "2018"],
  },
];

export default function QuizPage() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [tieBreaker, setTieBreaker] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAnswer = (
    questionIndex: number,
    answerIndex: number
  ) => {
    setAnswers((previous) => {
      const updated = [...previous];
      updated[questionIndex] = answerIndex;
      return updated;
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setErrorMessage("");

    const unanswered = questions.some(
      (_, index) => answers[index] === undefined
    );

    if (unanswered) {
      setErrorMessage(
        "Du har inte svarat på alla frågor ännu."
      );
      setLoading(false);
      return;
    }

    if (!name || !phone || !email || !tieBreaker) {
      setErrorMessage(
        "Fyll i namn, telefonnummer, e-post och din gissning."
      );
      setLoading(false);
      return;
    }

    const quizAnswers = questions.map(
      (question, index) => ({
        question: question.question,
        answer: question.answers[answers[index]],
        answerNumber: ["1", "X", "2"][answers[index]],
      })
    );

    try {
      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          tieBreaker,
          answers: quizAnswers,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error || "Failed to send quiz"
        );
      }

      setSuccess(true);

      setName("");
      setPhone("");
      setEmail("");
      setTieBreaker("");
      setAnswers([]);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Något gick fel när svaren skulle skickas. Försök igen."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 sm:py-12 md:py-20">
      <Container>

        <div className="w-full max-w-3xl mx-auto">

          {/* INTRO */}
          <header className="text-center mb-10 sm:mb-12">

            <p className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm text-[var(--color-secondary)] mb-3 sm:mb-4">
              Tävling
            </p>

            <h1 className="font-serif text-[var(--color-primary)] text-3xl sm:text-4xl md:text-5xl tracking-wide leading-tight mb-5 sm:mb-6">
              Hur mycket kan du om Heby?
            </h1>

            <Divider />

            <p className="text-[var(--color-primary)] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-5 sm:mt-6">
              Testa dina kunskaper om Hebys historia!
              Svara på de tio frågorna och var med i
              utlottningen av tre böcker. Svara innan kl 18:00 sön 30/8.
            </p>

          </header>

          {/* SUCCESS */}
          {success && (
            <div className="mb-8 sm:mb-10 text-center text-green-700 bg-green-50 border border-green-200 rounded-md px-4 sm:px-5 py-4">

              <p className="font-medium">
                TACK FÖR DITT BIDRAG! 🎉
              </p>

              <p className="text-sm mt-1">
                Dina svar har skickats in.
                Lycka till i utlottningen!
              </p>

            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* QUESTIONS */}
            <div className="space-y-5 sm:space-y-8">

              {questions.map(
                (question, questionIndex) => (
                  <section
                    key={questionIndex}
                    className="bg-[var(--color-beige)] p-5 sm:p-6 md:p-8 rounded-sm"
                  >

                    {/* QUESTION TITLE */}
                    <div className="flex gap-3 sm:gap-4">

                      <span className="font-serif text-xl sm:text-2xl text-[var(--color-secondary)] flex-shrink-0">
                        {questionIndex + 1}.
                      </span>

                      <h2 className="font-serif text-lg sm:text-xl md:text-2xl text-[var(--color-primary)] leading-snug">
                        {question.question}
                      </h2>

                    </div>

                    {/* ANSWERS */}
                    <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">

                      {question.answers.map(
                        (answer, answerIndex) => {

                          const selected =
                            answers[questionIndex] ===
                            answerIndex;

                          return (
                            <label
                              key={answerIndex}
                              className={`
                                flex items-center
                                gap-3 sm:gap-4
                                min-h-[56px]
                                p-3.5 sm:p-4
                                rounded-sm
                                cursor-pointer
                                border
                                transition-all
                                touch-manipulation
                                ${
                                  selected
                                    ? "border-[var(--color-primary)] bg-white"
                                    : "border-transparent bg-white/70 active:bg-white"
                                }
                              `}
                            >

                              <input
                                type="radio"
                                name={`question-${questionIndex}`}
                                value={answerIndex}
                                checked={selected}
                                onChange={() =>
                                  handleAnswer(
                                    questionIndex,
                                    answerIndex
                                  )
                                }
                                className="w-5 h-5 flex-shrink-0 accent-[var(--color-primary)]"
                              />

                              <span className="text-[var(--color-primary)] text-sm sm:text-base leading-snug">

                                <strong className="mr-2 sm:mr-3">
                                  {["1", "X", "2"][answerIndex]}
                                </strong>

                                {answer}

                              </span>

                            </label>
                          );
                        }
                      )}

                    </div>

                  </section>
                )
              )}

            </div>

            {/* TIE BREAKER */}
            <section className="mt-8 sm:mt-12 bg-[var(--color-beige)] p-5 sm:p-6 md:p-8 rounded-sm">

              <div className="text-center">

                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-[var(--color-secondary)] mb-3">
                  Utslagsfråga
                </p>

                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-primary)] leading-tight">
                  Hur många lingon finns det i burken på Salamässan?
                </h2>

                <p className="text-[var(--color-primary)] mt-3 mb-5">
                  Gissa så nära du kan!
                </p>

                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  value={tieBreaker}
                  onChange={(e) =>
                    setTieBreaker(e.target.value)
                  }
                  required
                  className="w-full max-w-xs mx-auto block p-4 bg-white border border-transparent focus:border-[var(--color-primary)] outline-none text-center text-lg rounded-sm"
                  placeholder="Din gissning"
                />

                <p className="text-xs sm:text-sm text-[var(--color-secondary)] mt-4">
                  Används endast om flera deltagare har lika många rätt.
                </p>

              </div>

            </section>

            {/* CONTACT */}
            <section className="mt-10 sm:mt-16">

              <div className="text-center mb-7 sm:mb-8">

                <h2 className="font-serif text-2xl sm:text-3xl text-[var(--color-primary)]">
                  Var med och tävla!
                </h2>

                <p className="text-sm sm:text-base text-[var(--color-primary)] mt-3">
                  Fyll i dina uppgifter och skicka in dina svar.
                </p>

              </div>

              <div className="space-y-4 sm:space-y-5 max-w-xl mx-auto">

                {/* NAME */}
                <div>

                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--color-primary)] mb-2"
                  >
                    Namn
                  </label>

                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                    className="w-full min-h-[52px] p-3.5 sm:p-4 bg-[var(--color-beige)] border border-transparent focus:border-[var(--color-primary)] outline-none rounded-sm text-base"
                    placeholder="Ditt namn"
                  />

                </div>

                {/* PHONE */}
                <div>

                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[var(--color-primary)] mb-2"
                  >
                    Telefonnummer
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    required
                    className="w-full min-h-[52px] p-3.5 sm:p-4 bg-[var(--color-beige)] border border-transparent focus:border-[var(--color-primary)] outline-none rounded-sm text-base"
                    placeholder="Ditt telefonnummer"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--color-primary)] mb-2"
                  >
                    E-post
                  </label>

                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    required
                    className="w-full min-h-[52px] p-3.5 sm:p-4 bg-[var(--color-beige)] border border-transparent focus:border-[var(--color-primary)] outline-none rounded-sm text-base"
                    placeholder="din@email.se"
                  />

                </div>

              </div>

              {/* ERROR */}
              {errorMessage && (
                <p className="max-w-xl mx-auto mt-5 text-red-700 bg-red-50 border border-red-200 rounded-md px-4 py-3 text-sm">
                  {errorMessage}
                </p>
              )}

              {/* SUBMIT */}
              <div className="text-center mt-8 sm:mt-10">

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-10 py-4 min-h-[54px] bg-[var(--color-primary)] text-white tracking-wide rounded-sm hover:opacity-90 active:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                >
                  {loading
                    ? "SKICKAR..."
                    : "SKICKA IN SVAREN"}
                </button>

                <p className="text-xs sm:text-sm text-[var(--color-secondary)] mt-5">
                  Tre böcker lottas ut bland de tävlande.
                </p>

              </div>

            </section>

          </form>

        </div>

      </Container>
    </main>
  );
}