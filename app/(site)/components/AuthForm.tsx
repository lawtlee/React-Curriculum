"use client";

import  { useCallback, useEffect, useState } from "react";
import { signIn, } from "next-auth/react";
import axios from "axios";

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUser] = useState("");

    const toggleVariant = useCallback(()=>{
        if (variant == "LOGIN")
            setVariant("REGISTER")
        else
            setVariant("LOGIN")
    },[variant])

    const onSubmit = (data : {}) => {
        if (variant === "REGISTER"){

        } else if(variant === "LOGIN") {
            signIn('credentials', {
                ...data, 
                redirect: false
            })
                .then((callback)=>{
                    if (callback?.error){
                        console.log(callback.error)
                    }

                    if (callback?.ok && !callback?.error){
                        console.log("Success")
                    }
                })
        }
    }

    return (
        <div
            className="flex flex-col md:w-[450px] w-[80vw] border-2 border-[#0A2A66]
            justify-center items-center text-left text-[14px] bg-[#0A2A66] text-white
            gap-2 py-10 rounded-[38px] relative z-[1]
        "
        >
            <div>
                <img src="logo.png"/>
                <p className="text-[20px] font-semibold">Midnights</p>
            </div>
            {variant === "REGISTER" && (
                <div className="flex flex-col items-center w-full gap-1">
                    <label className="w-[80%]">Username</label>
                    <input
                        type="email"
                        className="placeholder:text-black mb-5 pl-1 text-black rounded-[8px]
                                    focus:outline-[#F0C420] w-[80%] text-[16px] h-10 bg-[#F6E5A7]"
                        value={username}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
            )}

            <div className="flex flex-col items-center w-full gap-1">
                <label className="w-[80%]">Email{variant === 'LOGIN' ? "/Username" : ""}</label>
                <input
                    type="email"
                    className="placeholder:text-black mb-5 pl-1 text-black rounded-[8px]
                                focus:outline-[#F0C420] w-[80%] text-[16px] h-10 bg-[#F6E5A7]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="flex flex-col items-center w-full gap-1">
                <label className="w-[80%]">Password</label>
                <input
                    type="password"
                    className="placeholder:text-black mb-5 pl-1 text-black rounded-[8px]
                focus:outline-[#F0C420] w-[80%] text-[16px] h-10 bg-[#F6E5A7]"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="h-10 w-[80%] border-[#252062] bg-[#D4A9FF] 
                border-[1px] rounded-[8px] text-black flex items-center justify-center mt-2 cursor-pointer select-none
                "
                onClick={()=>{

                }}
            >
                {variant === 'LOGIN' ? "Sign In" : "Sign Up"}
            </div>
            <div className="flex gap-2 justify-center mt-6 px-2">
                <div>
                    {variant === 'LOGIN' ? "Don't have an account?" : "Already have an account?"}
                </div>
                <div className="font-bold cursor-pointer select-none"
                    onClick={toggleVariant}
                >
                    {variant === 'LOGIN' ? "Sign Up" : "Sign In"}
                </div>
            </div>
        </div>
    );
}

export default AuthForm