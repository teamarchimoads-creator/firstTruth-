import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Item from "@/models/Item";

export async function GET() {
  try {
    await connectToDatabase();
    const items = await Item.find({}).sort({ createdAt: -1 }).limit(50);
    return NextResponse.json({ success: true, count: items.length, data: items });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newItem = await Item.create(body);
    return NextResponse.json({ success: true, data: newItem }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 400 }
    );
  }
}
