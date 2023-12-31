import {connect} from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import { sendEmail } from '@/helper/mailer';

connect();
export const dynamic = 'force-dynamic';
export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email, password,phone,gender,city,heardAbout,selectedState}= reqBody;
        const user=await User.findOne({email})

        if (user) {
            return NextResponse.json({error:'user already exist'},{status:400})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        
        const newUser= new User({
            username, 
            email,
            phone,
            gender,
            city,
            heardAbout,
            selectedState,
            password:hashedPassword
        });
        
        
        const savedUser = await newUser.save();

        
        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id});



        return NextResponse.json({
            message:'saved in the database',
            success: true,
            savedUser,
        })

    } catch (error: any) {
        return NextResponse.json({error:error.message},{status:500});
    }
}