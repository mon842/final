import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic';
export async function GET(){
    try {
        const response = NextResponse.json({
            message:'Successfully logout',
            status: true
        });
        response.cookies.set('token', '',{
            httpOnly: true,
            expires: new Date(0)
        });
        return response;

    } catch (error) {
        console.log(error);
        
        return NextResponse.json({ error:error},{status:500})
    }
}