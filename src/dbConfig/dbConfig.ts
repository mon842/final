import mongoose from "mongoose"

const url=process.env.MONGODB_URL 
export const connect=async()=>{
    try{
        mongoose.connect(url!);
        const connection=mongoose.connection;

        connection.on('connected', ()=>{
            console.log('mongodb connection established'); 
        });

        connection.on('error',(err)=>{
            console.log('mongo connection error'+err);
            process.exit();
        });
    }
    catch(err){
        console.log('something went wrong');
        console.log(err);
        
    }
}