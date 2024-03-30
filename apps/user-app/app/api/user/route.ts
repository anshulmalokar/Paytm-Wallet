import { NextRequest, NextResponse } from "next/server"
import prisma from "@repo/db/client";

export async function GET(req: NextRequest){
    const data = await prisma.user.create({
        data:{
            email: "anshulmalokar1@gmail.com",
            name: "anshulmalokar"
        }
    })
    return NextResponse.json({
        data
    })
}