import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    return NextResponse.json({ count: 0 });
  }

  try {
    const res = await fetch(`https://api.brevo.com/v3/contacts/lists/${listId}`, {
      headers: { "api-key": apiKey, accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) return NextResponse.json({ count: 0 });
    const data = await res.json();
    const count = data.totalSubscribers ?? data.uniqueSubscribers ?? 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
