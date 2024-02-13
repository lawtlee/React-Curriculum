"use client";

import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <AuthForm/>
    </div>
  );
}