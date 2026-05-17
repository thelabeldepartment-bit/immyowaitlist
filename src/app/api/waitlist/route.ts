import { NextRequest, NextResponse } from "next/server";
import { ROLES } from "@/lib/roles";

// Human-readable label per role value, sent to Brevo as a contact attribute.
const ROLE_LABEL = Object.fromEntries(ROLES.map((r) => [r.value, r.label]));

export async function POST(request: NextRequest) {
  try {
    const { email, role } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = process.env.BREVO_LIST_ID;

    if (!apiKey || !listId) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Build attributes — only include ROLE if a known value was sent.
    const attributes: Record<string, string> = {};
    if (role && typeof role === "string" && ROLE_LABEL[role]) {
      attributes.ROLE = ROLE_LABEL[role];
      attributes.ROLE_KEY = role;
    }

    const payload: Record<string, unknown> = {
      email: email.trim(),
      listIds: [parseInt(listId)],
      updateEnabled: true,
    };
    if (Object.keys(attributes).length > 0) payload.attributes = attributes;

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return NextResponse.json({ message: "Added to waitlist", role: attributes.ROLE ?? null });
    }

    const err = await response.json().catch(() => ({}));
    if (err.code === "duplicate_parameter") {
      // Email already on the list — updateEnabled=true above should have
      // refreshed attributes; surface as success so the UI doesn't error out.
      return NextResponse.json({ message: "Already on waitlist", role: attributes.ROLE ?? null });
    }
    return NextResponse.json(
      { error: err.message || "Failed to add to waitlist" },
      { status: 500 }
    );
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
