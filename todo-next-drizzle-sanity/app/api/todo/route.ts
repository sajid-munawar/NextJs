import { NextRequest, NextResponse } from "next/server";
import { db, todoTable } from "@/app/lib/drizzle";
// import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { v4 as uuid } from "uuid";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  console.log('iddddd', id)
  if(id){
    try {
        const res = await db.select().from(todoTable).where(eq(todoTable.user_id,id))
        return NextResponse.json(res);
      } catch (error) {
        return NextResponse.json({ message: "Something went wrong" });
      }
  }  
}

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log('body', body)
  const user_id = cookies().get("user_id")?.value;
  if (!user_id) {
    const uid = uuid();
    cookies().set("user_id", uid);
  }
  const data = await db.insert(todoTable).values({
    task:body.task,
    user_id:cookies().get("user_id")?.value as string
  }).returning();

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
