import { getAllServices } from "@/lib/mdx-compiler";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const services = await getAllServices();
    return NextResponse.json({ services });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
