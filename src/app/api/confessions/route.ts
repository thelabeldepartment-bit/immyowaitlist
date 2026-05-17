import { NextRequest, NextResponse } from "next/server";

export type Confession = { id: number; text: string; timestamp: string };

const MAX_CONFESSIONS = 30;

const SEEDS: Confession[] = [
  "Ich habe 43 Bewerbungen verschickt. Meine Ex antwortet schneller.",
  "Ich habe Nichtraucher angegeben. Erste Pause? Zigarette.",
  "Ich war noch nie in der Wohnung. Ich bin der Makler.",
  "Ich lese die Hälfte der Bewerbungen nicht.",
  "WG-Casting. Wir taten, als wären wir keine Alkoholiker.",
  "Mein Vermieter ist die Hölle. Ich finde keine andere Wohnung.",
  "1.380 € für 38 m². Berlin macht mich zu einem anderen Menschen.",
  "Auf den Fotos: Eiche. In echt: Laminat von 2003.",
].map((text, i) => ({
  id: 1_700_000_000_000 + i,
  text,
  timestamp: new Date(1_700_000_000_000 + i * 1000).toISOString(),
}));

const g = globalThis as unknown as { __confessions?: Confession[] };
if (!g.__confessions) g.__confessions = [...SEEDS];

export async function GET() {
  return NextResponse.json(g.__confessions!.slice(-MAX_CONFESSIONS));
}

export async function POST(request: NextRequest) {
  try {
    const { text, email, joinWaitlist } = await request.json();
    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return NextResponse.json({ error: "Confession text is required" }, { status: 400 });
    }
    const trimmed = text.trim().slice(0, 280);

    g.__confessions!.push({
      id: Date.now(),
      text: trimmed,
      timestamp: new Date().toISOString(),
    });

    // Keep only the most recent MAX_CONFESSIONS
    if (g.__confessions!.length > MAX_CONFESSIONS) {
      g.__confessions = g.__confessions!.slice(-MAX_CONFESSIONS);
    }

    let addedToWaitlist = false;
    if (joinWaitlist && email && typeof email === "string" && email.includes("@")) {
      const apiKey = process.env.BREVO_API_KEY;
      const listId = process.env.BREVO_LIST_ID;
      if (apiKey && listId) {
        try {
          const res = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json", "api-key": apiKey },
            body: JSON.stringify({ email: email.trim(), listIds: [parseInt(listId)] }),
          });
          if (res.ok) addedToWaitlist = true;
          else {
            const err = await res.json().catch(() => ({}));
            if (err.code === "duplicate_parameter") addedToWaitlist = true;
          }
        } catch {
          // Swallow — confession is still saved
        }
      }
    }

    return NextResponse.json({ message: "Confession posted", addedToWaitlist });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
