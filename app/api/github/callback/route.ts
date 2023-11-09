import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ data: body }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: "failed to load data" }, { status: 500 });
  }
}
