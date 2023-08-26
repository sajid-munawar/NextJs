import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  const headersToken = request.cookies.get("tokenn")?.value;
  console.log("headersToken", headersToken);

  const secret = new TextEncoder().encode(process.env.SECRET_KEY);

  try {
    if (!headersToken) {
      return NextResponse.redirect(`http://localhost:3000/login`);
    } else {
      const { payload, protectedHeader } = await jose.jwtVerify(
        headersToken,
        secret
      );
      const headers = new Headers(request.headers);
      headers.set("user", JSON.stringify(payload.email));

      console.log(protectedHeader);
      console.log("payload", payload);
      return NextResponse.next({
        request: {
          headers: headers,
        },
      });
    }
    // if (pathname === "/login") {
    //   if (headersToken) return NextResponse.redirect(`${origin}`);
    //   return NextResponse.next();
    // }
  } catch (error) {}
}

export const config = {
  matcher: ["/"],
};
