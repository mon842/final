"use client"
import Nav from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HorizontalCard from '@/components/UserCard'
import { useRouter } from 'next/navigation'
import Searchbar from '@/components/SearchBar';


const Page = ({ searchParams }) => {
    // console.log(searchParams);
    const router = useRouter();
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getall();
    }, []);

    const getall = async () => {
        try {
            const response = await axios.get("api/users/all");
            setUsers(response.data);
        } catch (error) {
            console.log("error fetching posts", error);
        }
    };
    const handleSearch = async () => {
        try {
            console.log(searchParams.q);
            const response = await axios.get(`/api/users/search/${searchParams.q}`);
            setSearch(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };


    console.log(search);
    return (
        <div className='bg-[#071e34] h-screen'>
            <Nav />

            <div className='flex justify-center items-center'>
                <Searchbar routeType='users' />
                <button className='mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleSearch}>Search</button>
            </div>


            <div className='flex relative my-6'>
                <button onClick={() => router.push('/add')} className='text-xl text-white absolute right-4'>Add User</button>
            </div>

            {
                users.users === null ?
                    <h1>no records</h1> :
                    users?.users?.map((user) => (
                        <HorizontalCard key={user._id} user={user} />
                    ))

            }
            <div>
                <h1 className='flex justify-center items-center text-white text-lg'>searched</h1>
                {
                    search?.users?.map((user) => (
                        <HorizontalCard key={user._id} user={user} />
                    ))
                }
            </div>

        </div>
    )
}

export default Page