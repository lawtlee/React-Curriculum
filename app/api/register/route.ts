import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    try{
        const body = await request.json();
        const { email, username, password } = body;

        if (!email || !username || !password){
            return new NextResponse("Missing info", { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data:{
                email, username, hashedPassword
            }
        })

        return NextResponse.json(user)
    } catch(error: any){
        return new NextResponse("Internal Erorr", { status: 500 })
    }
}