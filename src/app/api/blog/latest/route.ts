import { getLatestBlogs } from "@/lib/mdx-compiler";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const count = parseInt(searchParams.get("count") || "4", 10);

    const posts = await getLatestBlogs(count);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching latest blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
