import {db} from '@vercel/postgres'
import {NextRequest, NextResponse} from 'next/server' 

export function GET(request: NextRequest){
    const client=db.connect()

    try {
        
    } catch (error) {
        console.log('error :>> ', error);
        return new Response('Something went wrong')
        
    }

    return NextResponse.json({message:'You called an api'})
}