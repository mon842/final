"use client"
import Nav from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '@/components/Card'

const Page = () => {
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getall();
    }, []);

    const getall = async () => {
        try {
            const response = await axios.get("api/post/all");
            setPosts(response.data);
        } catch (error) {
            console.log("error fetching posts", error);
        }
    };
    console.log(posts);

    return (
        <div className='bg-[#071e34] h-full'>
            <Nav />
            
            {posts.posts===null ? 
            <h1>no records</h1>:
            posts.posts?.map((post) => (
                <Card
                key={post?._id}
                content={post?.content}
                userName={post?.user?.username}
            />
            ))
        }
            
        </div>
    )
}

export default Page