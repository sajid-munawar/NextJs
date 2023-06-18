import {db} from '@vercel/postgres'
import {NextRequest, NextResponse} from 'next/server' 

export async function GET(request: NextRequest){
    const client=db.connect()

    try {
        (await client).sql`CREATE TABLE Todos(id serial, Task varchar(255))`        
    } catch (error) {
        console.log('error :>> ', error);
        return new Response('Something went wrong')
        
    }

    return NextResponse.json({message:'You called an api'})
}


export const POST = async (request:NextRequest)=>{
    const req= await request.json()
    const client=await db.connect()
    try {
        if(req.task){
            await client.sql`INSERT INTO Todos(Task) VALUES(${req.task})` 
            return NextResponse.json({message:'Data saved successfuly'})
        }else {
            throw new Error("Task field is required")
        }
    } catch (error) {
        return NextResponse.json({message: (error as {message:string}).message})        
    }
}