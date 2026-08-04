import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "contact@cayus.io";
const FROM_EMAIL = "Cayus <forms@cayus.io>";

export async function POST(req: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const role = String(body.role ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !company || !role) {
    return NextResponse.json(
      { error: "Name, email, company, and role are required." },
      { status: 400 }
    );
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New search request: ${company}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Role hiring for: ${role}`,
        "",
        "Message:",
        message || "(none)",
      ].join("\n"),
    });
  } catch (err) {
    console.error("Resend send failed", err);
    return NextResponse.json(
      { error: "Couldn't send that. Try emailing contact@cayus.io directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
