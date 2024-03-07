import { getUser, postData } from "@/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
    try {
        const users = getUser();
        console.log('get request')
       return NextResponse.json({ status: true, msg: 'let do it', result: users })
    } catch (err) {
        console.log(err)
        return NextResponse.json({ status: false, msg: 'error' })
    }

}

export const POST = async (req, res) => {
    try {
        const body = await req.json();
        const updatedUser = postData(body.data);

       return NextResponse.json({ status: true, msg: 'wow u hit post API', result: updatedUser})
    } catch (err) {
        console.log(err)
        return NextResponse.json({ status: false, msg: 'error' })
    }

}
