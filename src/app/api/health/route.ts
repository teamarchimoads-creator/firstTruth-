import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";

export async function GET() {
  const isEnvConfigured = Boolean(process.env.MONGODB_URI);

  if (!isEnvConfigured) {
    return NextResponse.json({
      status: "warning",
      message: "MONGODB_URI is not set in .env.local. Add your connection string to test live connection.",
      database: "not_configured",
      timestamp: new Date().toISOString(),
    });
  }

  try {
    const mongooseInstance = await connectToDatabase();
    const readyState = mongooseInstance.connection.readyState;
    const states = ["disconnected", "connected", "connecting", "disconnecting"];

    return NextResponse.json({
      status: "ok",
      message: "MongoDB connected successfully",
      database: states[readyState] || "unknown",
      readyState,
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to connect to MongoDB",
        error: errorMessage,
        database: "disconnected",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
