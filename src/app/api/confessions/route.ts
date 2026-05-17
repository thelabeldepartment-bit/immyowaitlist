import { NextRequest, NextResponse } from 'next/server';

const confessions: any[] = []; // In-memory storage for demo

export async function GET() {
  return NextResponse.json(confessions);
}

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();
    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: 'Confession text is required' }, { status: 400 });
    }

    const newConfession = {
      id: Date.now(),
      text: text.trim(),
      timestamp: new Date().toISOString(),
    };

    confessions.unshift(newConfession);
    return NextResponse.json({ message: 'Confession posted' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}