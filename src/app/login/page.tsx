
"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    }
    else {
      setButtonDisabled(true);
    }
  }, [user]);


  const onLogin = async () => {
    // console.log(user);

    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");


    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-slate-100 rounded-md'>

      <div className='bg-white py-10 px-8'>
        <div className='items-center justify-center flex'>
          <h1 className='text-3xl mb-8 block'>{loading ? 'Processing' : 'Login'}</h1>
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
            name="email"
            onChange={(e) => {
              setUser({
                ...user, email: e.target.value
              })
            }} id=""
            placeholder='email' />
        </div>

        <div className="mb-4">
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="password">password</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type="password"
            name="password"
            onChange={(e) => {
              setUser({
                ...user, password: e.target.value
              })
            }} id=""
            placeholder='password'
          />
        </div>

        <div className='flex justify-center items-center my-5'>
          <button onClick={onLogin} className='p-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  '>{buttonDisabled ? 'no signup' : 'login'}</button>
        </div>

        <Link href={'/signup'}>Don’t have an account yet? Sign up</Link>
      </div>

    </div>
  )
}

export default LoginPage