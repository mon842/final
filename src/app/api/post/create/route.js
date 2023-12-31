import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import Post from '@/models/postModel';

connect();

export async function POST(request,response) {
    try {
        const reqBody = await request.json()
        const {user,content}= reqBody;

        
        const newPost= new Post({
            user,
            content
        });
        
        const savedPost = await newPost.save();
        return NextResponse.json({
            message:'saved in the database',
            success: true,
            savedPost,
        })

    } catch (error) {
        return NextResponse.json({error:error.message},{status:500});
    }
}