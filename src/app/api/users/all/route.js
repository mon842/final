

import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';

connect();
export const dynamic = 'force-dynamic';
export async function GET(request,response) {
    try {
        const users = await User.find();

        // console.log(posts);

        return NextResponse.json({
            success: true,
            users
        })
        


    } catch (error) {
        return NextResponse.json({error:error.message},{status:500});
    }
}