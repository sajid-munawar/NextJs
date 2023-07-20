import { NextRequest, NextResponse } from "next/server";
import { db, todoTable, Todo, NewTodo } from "@/app/lib/drizzle";
import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";

export async function GET() {
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
    const { id } = await request.json();
    console.log("id fromr outes", id);
    await db.delete(todoTable).where(eq(todoTable.id, id)).execute();
    return NextResponse.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.log("error :>> ", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
