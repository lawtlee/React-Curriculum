"use client";

import { useCallback, useState } from "react";
import { signIn } from 'next-auth/react'

import axios from 'axios';

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const toggleVariant = useCallback(()=>{
        if (variant === "LOGIN")
            setVariant("REGISTER")
        else
            setVariant("LOGIN")
    },[variant])

    const onSubmit = () => {
      if (variant === "LOGIN"){

      } else{
        if (email != "" && username != "" && password != ""){
          const data = {
            email: email,
            username: username,
            password: password
          }
          axios.post('/api/register', data)
            .then(()=>signIn('credentials', data))
            .catch((err)=>{console.log(err)})
            .finally(()=>{
              setError(false)
            })
        } else {
          setError(true);
        }
      }
    }

    return(
        <div className="w-[450px] flex flex-col border-2 border-[#0A2A66] bg-[#0A2A66] justify-center
        items-center text-[14px] gap-2 py-10 rounded-[38px] relative text-white
      ">
        <div className="flex flex-col justify-center items-center">
            <img src="/logo.png" alt="logo"/>
            <p className="text-[20px] font-bold">Midnights</p>
        </div>

        {variant === "REGISTER" && (
            <div className="w-full flex flex-col items-center gap-1 text-left">
            <label className="w-[80%]">
              Username
            </label>
            <input
              className="text-black rounded-[8px] w-[80%] text-[16px] h-10 bg-[#F6E5A7]
                pl-1 focus:outline-[#F0C420] mb-5"
              type="text"
              value={username}
              onChange={(event)=>setUsername(event.target.value)}
            />
          </div>
        )}

        <div className="w-full flex flex-col items-center gap-1 text-left">
          <label className="w-[80%]">
            {variant ===  "LOGIN" ? "Email/Username" : "Email"}
          </label>
          <input
            className="text-black rounded-[8px] w-[80%] text-[16px] h-10 bg-[#F6E5A7]
              pl-1 focus:outline-[#F0C420] mb-5"
            type="email"
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}}
          />
        </div>
        
        <div className="w-full flex flex-col items-center gap-1 text-left">
          <label className="w-[80%]">
            Password
          </label>
          <input
            className="text-black rounded-[8px] w-[80%] text-[16px] h-10 bg-[#F6E5A7]
              pl-1 focus:outline-[#F0C420] mb-5"
            type="password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
          />
        </div>
        
        <div 
          className="w-[80%] flex justify-center items-center mt-5 bg-[#D4A9FF] border-[#252062] h-10 rounded-[8px]
          text-black cursor-pointer select-none"
          onClick={()=>{onSubmit()}}
        >
          {variant === "LOGIN" ? "Sign In" : "Sign Up"}
        </div>

        <div className="flex gap-2 justify-center mt-6 px-2 cursor-pointer select-none">
            <div>
                {variant === "LOGIN" ? "Don't have an account?" : "Already have an account?"}
            </div>
            <div className="font-bold"
                onClick={toggleVariant}
            >
                {variant === "LOGIN" ? "Sign Up" : "Sign In"}
            </div>
        </div>
      </div>
    )
}

export default AuthForm;