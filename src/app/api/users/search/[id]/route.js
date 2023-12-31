import { connect } from '../../../../../dbConfig/dbConfig';
import User from '../../../../../models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connect();
export const dynamic = 'force-dynamic';
export async function GET(request,response) {
    console.log(request.url);
    const i = request.url.lastIndexOf('/');
    const query = request.url.substring(i + 1);

    console.log(query);

    try {
        const users = await User.find({
            $or: [
              { username: { $regex: query, $options: 'i' } },
              { email: { $regex: query, $options: 'i' } },
              // Add more fields to search if needed
            ],
          }).exec();
    
          return NextResponse.json({
            success: true,
            users: users
        })
    } catch (error) {
        console.log(error);
    }
    
}
