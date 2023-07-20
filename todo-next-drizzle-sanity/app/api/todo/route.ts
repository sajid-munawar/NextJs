import { NextRequest, NextResponse } from "next/server";
import { db, todoTable } from "@/app/lib/drizzle";
import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { v4 as uuid } from "uuid";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  console.log("id :>> ", id);
  // const uid = cookies().get('user_id')?.value
  // const uid =cookies().get('user_id')?.value
  // console.log('uid', uid)
  // if(uid){
  // }else{
  //   console.log('not found')
  // }
  try {
    await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255))`;
    const res = await db.select().from(todoTable);
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const user_id = cookies().get("user_id")?.value;
  const uid = uuid();

  if (!user_id) {
    cookies().set("user_id", uid);
  }
  const data = await db.insert(todoTable).values(body).returning();

  return new NextResponse(
    JSON.stringify({
      message: "Data Added",
      data,
    })
  );
};

export async function DELETE(request: NextRequest) {
  try {
    const id: any = request.nextUrl.searchParams.get("id");
    await db.delete(todoTable).where(eq(todoTable.id, id)).execute();
    return NextResponse.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.log("error :>> ", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
