import {connect} from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/userModel';
connect();

export async function POST(request,response) {
    try {
        const {id,username,email,gender,phone,city,heardAbout,selectedState} = await request.json();
        
        try {
            const task=await User.updateOne({_id:id},{username,email,gender,phone,city,heardAbout,selectedState});
            return NextResponse.json({
                message:'saved in the database',
                success: true,
                task,
            })
        } catch (error) {
            res.status(404).json({ error: "Error While Updating the Data...!"})
        }


    } catch (error) {
        return NextResponse.json({error:error.message},{status:500});
    }
}