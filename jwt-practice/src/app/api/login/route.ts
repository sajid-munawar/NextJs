import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";

export const POST = async (request: NextRequest) => {
  const body = await request.json().catch(() => null);

  if (body.username === "admin" && body.password === "admin") {
    const secret = new TextEncoder().encode(process.env.SECRET_KEY);

    console.log("secret: ", secret);
    const alg = "HS256";

    const jwt = await new jose.SignJWT({ email: body.email })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(secret);
    console.log("jwt", jwt);

    cookies().set("token", jwt, {
      httpOnly: true,
    });

    return NextResponse.json({ message: "Login successss", status: 200 });
  }

  return NextResponse.json({
    message: "Invalid Email or password",
    status: 401,
  });
};
