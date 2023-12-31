

import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';

connect();
export const dynamic = 'force-dynamic';
export async function GET(request,response) {
    try {
        console.log(request.url);
        const i=request.url.lastIndexOf('/');
        const id=request.url.substring(i+1);
        // console.log(id);
        await User.deleteOne({_id:id});
        return NextResponse.json({
            success: true,
        })
        


    } catch (error) {
        return NextResponse.json({error:error.message},{status:500});
    }
}