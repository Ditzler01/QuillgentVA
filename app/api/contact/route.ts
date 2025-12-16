import { NextResponse } from "next/server";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  createdAt: Date;
}

const submissions: ContactSubmission[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    const submission: ContactSubmission = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || undefined,
      message: message.trim(),
      createdAt: new Date(),
    };

    submissions.push(submission);
    console.log(`New contact submission from: ${email}`);

    return NextResponse.json(
      { message: "Thank you for your message. We'll get back to you soon!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process your request" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ count: submissions.length });
}
