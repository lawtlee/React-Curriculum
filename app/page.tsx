"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      {/* Login Box */}
      <div className="w-[450px] flex flex-col border-2 border-[#0A2A66] bg-[#0A2A66] justify-center
        items-center text-[14px] gap-2 py-10 rounded-[38px] relative
      ">
        <div className="w-full flex flex-col items-center gap-1 text-left">
          <label className="w-[80%]">
            Email/Username
          </label>
          <input
            className="text-black rounded-[8px] w-[80%] text-[16px] h-10 bg-[#F6E5A7]
              pl-1 focus:outline-[#F0C420]"
            type="email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
          />
        </div>
        
        <div className="w-full flex flex-col items-center gap-1 text-left">
          <label className="w-[80%]">
            Password
          </label>
          <input
            className="text-black rounded-[8px] w-[80%] text-[16px] h-10 bg-[#F6E5A7]
              pl-1 focus:outline-[#F0C420]"
            type="password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
          />
        </div>
        
      </div>
    </div>
  );
}
