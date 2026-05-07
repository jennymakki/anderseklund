import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, book, shipping, message } = body;

    await resend.emails.send({
      from: "Heby Historia <onboarding@resend.dev>",
      to: "kattmynta@hotmail.com",
      subject: `Ny bokförfrågan från ${name}`,
      replyTo: email,
      html: `
        <h2>Ny kontaktförfrågan</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Bok:</strong> ${book || "Ingen vald bok"}</p>
        <p><strong>Frakt:</strong> ${shipping ? "Ja" : "Nej"}</p>
        <p><strong>Meddelande:</strong> ${message}</p>
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