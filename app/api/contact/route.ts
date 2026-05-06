import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  const body = await req.json();

  const { firstName, lastName, email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      from: "Aivonix Labs <info@resend.dev>",
      to: "info.aivonixlabs@gmail.com",
      subject: subject || "New Contact Form Message",
      html: `
        <h2>New Message from Website</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}