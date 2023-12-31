"use client"
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'


const VerifyEmailPage = () => {
    const [token ,setToken] =useState("");
    const [verified , setVerified] = useState(false);
    const [error,setError] = useState(false);

    const verifyUserEmail= async()=>{
        try {
            await axios.post('/api/users/verifyemail',{token});
            setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log(error.response.data);
            
        }
    }
    
    useEffect(()=>{
        const urlToken= window.location.search.split('=')[1];
        setToken(urlToken || "");
    },[])


    useEffect(() => {
      if(token.length>0){
        verifyUserEmail();
      }
    }, [token])
    

    return (
        <div>
            {token?`${token}`: 'no token'}
            {verified && 
                <div>
                    verified
                    <Link href={'/login'}> login</Link>
                </div>
            }
            {error && 
                <div>
                    error
                </div>
            }
        </div>
    )
}

export default VerifyEmailPage