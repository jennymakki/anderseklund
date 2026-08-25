import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      email,
      tieBreaker,
      answers,
    } = body;

    const answersHtml = answers
      .map(
        (
          item: {
            question: string;
            answer: string;
            answerNumber: string;
          },
          index: number
        ) => `
          <div style="margin-bottom: 20px;">
            <p style="margin-bottom: 5px;">
              <strong>${index + 1}. ${item.question}</strong>
            </p>

            <p style="margin-top: 0;">
              <strong>Svar:</strong>
              ${item.answerNumber} – ${item.answer}
            </p>
          </div>
        `
      )
      .join("");

    await resend.emails.send({
      from: "Heby Historia <onboarding@resend.dev>",
      to: "kattmynta@hotmail.com",
      subject: `Nytt quizsvar från ${name}`,
      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px;">

          <h2>🎉 Nytt svar på Heby Historia-quizet</h2>

          <hr />

          <h3>Deltagare</h3>

          <p>
            <strong>Namn:</strong> ${name}
          </p>

          <p>
            <strong>Telefonnummer:</strong> ${phone}
          </p>

          <p>
            <strong>E-post:</strong> ${email}
          </p>

          <hr />

          <h3>Utslagsfråga</h3>

          <p>
            <strong>Antal gissade lingon:</strong> ${tieBreaker}
          </p>

          <hr />

          <h3>Svar</h3>

          ${answersHtml}

          <hr />

          <p>
            <strong>Quizet skickades in via hebyhistoria.se</strong>
          </p>

        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Något gick fel" },
      { status: 500 }
    );
  }
}