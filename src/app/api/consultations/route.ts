import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Consultation from "@/models/Consultation";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, serviceType, notes } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Please provide your full name, email, and phone number." },
        { status: 400 }
      );
    }

    const hasMongoUri = Boolean(
      process.env.MONGODB_URI && process.env.MONGODB_URI.trim().length > 0
    );

    if (hasMongoUri) {
      await connectToDatabase();
      const newConsultation = await Consultation.create({
        fullName,
        email,
        phone,
        serviceType: serviceType || "General Consultation",
        notes,
      });

      return NextResponse.json({
        success: true,
        message: "Consultation booked successfully in MongoDB!",
        data: newConsultation,
      });
    }

    // Fallback if MONGODB_URI not yet populated in .env.local
    return NextResponse.json({
      success: true,
      message: "Consultation received! (Configure MONGODB_URI to persist to database)",
      data: { fullName, email, phone, serviceType, notes },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
