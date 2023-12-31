

import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import Post from '@/models/postModel';
import User from '@/models/userModel';

connect();

export async function GET(request,response) {
    try {
        const posts = await Post.find().populate({path: "user", model: User}).sort({ createdAt: -1 });

        // console.log(posts);

        return NextResponse.json({
            success: true,
            posts
        })
        


    } catch (error) {
        return NextResponse.json({error:error.message},{status:500});
    }
}

// app.get("/get-posts", async (req, res) => {
//     try {
//         const posts = await Post.find()
//             .populate("user", "name")
//             .sort({ createdAt: -1 });

//         res.status(200).json(posts);
//     } catch (error) {
//         res
//             .status(500)
//             .json({ message: "An error occurred while getting the posts" });
//     }
// });
