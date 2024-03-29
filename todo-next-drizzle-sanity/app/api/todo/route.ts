import { NextRequest, NextResponse } from "next/server";
import { db, todoTable } from "@/app/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { v4 as uuid } from "uuid";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (id) {
    try {
      const res = await db
        .select()
        .from(todoTable)
        .where(eq(todoTable.user_id, id));
      return NextResponse.json(res);
    } catch (error) {
      return NextResponse.json({ message: "Something went wrong" });
    }
  }
}

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const user_id = cookies().get("user_id")?.value;
  if (!user_id) {
    const uid = uuid();
    cookies().set("user_id", uid);
  }
  const data = await db
    .insert(todoTable)
    .values({
      task: body.task,
      user_id: cookies().get("user_id")?.value as string,
    })
    .returning();

  return new NextResponse(
    JSON.stringify({
      message: "Data Added",
      data,
    })
  );
};

export async function DELETE(request: NextRequest) {
  const user_id = cookies().get("user_id")?.value as string;
  try {
    const id: any = request.nextUrl.searchParams.get("id");
    await db
      .delete(todoTable)
      .where(and(eq(todoTable.id, id), eq(todoTable.user_id, user_id)))
      .execute();
    return NextResponse.json({ message: "Todo deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}
