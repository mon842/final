import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";

import User from '@/models/userModel'
import { connect } from "@/dbConfig/dbConfig";

connect();
export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest){
    try {
        const userID = await getDataFromToken(request);
        const user = await User.findOne({_id:userID}).select('-password');
        return NextResponse.json({
            message:'Success found',
            data: user
        });

    } catch (error:any) {
        return NextResponse.json({ error: error.message },{status:400});
    }
}