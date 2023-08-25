import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  const headersToken = request.cookies.get("token")?.value;
  console.log("headersToken", headersToken);
}
