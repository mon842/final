"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/Navbar';

const Profile = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const [user, setUser] = useState();
  const onLogout = async () => {
    try {
      const response = await axios.get('api/users/logout');
      router.push('/login');
      toast.success('You have logged out');
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(() => {
    getUserData();
  }, [])




  const getUserData = async () => {
    const res = await axios.get('api/users/me');
    // console.log(res.data);
    setUser(res.data.data);
    setData(res.data.data._id);

  }

  return (
    <div className='bg-[#071e34]'>

      <Nav />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <section className=" bg-[#071e34] flex font-medium items-center justify-center h-screen">

        <section className="w-72 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">2d ago</span>
            <span className="text-emerald-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </span>
          </div>
          <div className="mt-6 w-fit mx-auto">
            <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" className="rounded-full w-28 " alt="profile picture" />
          </div>

          <div className="mt-8 ">
            <h2 className="text-white font-bold text-2xl tracking-wide">{user ? user?.username : "nothing"}</h2>
          </div>
          <p className="text-gray-100 font-semibold mt-2.5" >
            {user ? user?.email : "nothing"}
          </p>
          <p className="text-gray-100 font-semibold mt-2.5" >
            {user ? user?.phone : "nothing"}
          </p>
          <p className="text-gray-100 font-semibold mt-2.5" >
            {user ? user?.city : "nothing"}
          </p>
          <p className="text-gray-100 font-semibold mt-2.5" >
            {user ? user?.selectedState : "nothing"}
          </p>
          <p className="text-emerald-400 font-semibold mt-2.5" >
            Active
          </p>

          <div className="h-1 w-full bg-black mt-8 rounded-full">
            <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
          </div>
          <button className='text-white' onClick={onLogout}> logout</button>

        </section>


      </section>
    </div>
  )
}

export default Profile;

{/* <h1> {data==='nothing'? 'welcome' : 
        <Link href={`/profile/${data}`} >{data}</Link> 
        } 
      </h1>
      <button className='' onClick={onLogout}> logout</button>
      <button className='' onClick={getUserData}> getdata</button> */}