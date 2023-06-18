// import {db} from '@vercel/postgres'
import {NextRequest, NextResponse} from 'next/server' 
import {db,todoTable,Todo,NewTodo} from '@/app/lib/drizzle';
import { sql } from '@vercel/postgres';

export async function GET(request: NextRequest){
    
    try {
        await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255))`
        const res=await db.select().from(todoTable)
        console.log(res);
        return NextResponse.json({data:res})
    } catch (error) {
        console.log('error :>> ', error);
        return NextResponse.json({message:'Something went wrong'})
    }
}


export const POST = async (request:NextRequest)=>{
    const body= await request.json()
    const data = await db.insert(todoTable).values(body).returning();

  return new NextResponse(
    JSON.stringify({
      message: "Data Added",
      data,
    })
  );
}