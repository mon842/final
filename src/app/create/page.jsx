"use client"

import Nav from '@/components/Navbar';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'


const Create = () => {
    // const [data, setData] = useState("nothing");
    const [user, setUser] = useState();
    const [content, setContent] = useState("");
    const router = useRouter();

    useEffect(() => {
        getUserData();
    }, [])
    // console.log(user);

    const getUserData = async () => {
        const res = await axios.get('api/users/me');
        setUser(res.data.data);

    }
    const submit= async () => {
        const postData={
            user:user._id,
            content:content
        }
        try {
            const res=await axios.post('/api/post/create', postData);
            console.log(res);
            setContent("");
            router.push('/records')
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
        
    }

    return (
        <div className='bg-[#071e34] h-screen'>

            <Nav />
            <div className='flex justify-center items-center mt-20 '>
                <div>
                    <textarea className='block p-2 bg-slate-500 text-white' cols="30" rows="10" value={content} onChange={(e) => { setContent(e.target.value) }} placeholder='Typing record..'></textarea>
                    <button onClick={submit} className="w-full mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                        create
                    </button>
                </div>


            </div>



        </div>
    )
}

export default Create;