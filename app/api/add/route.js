import { NextResponse } from "next/server";

export async function POST(request) {
    let data = await request.json()
    console.log(data);

    return NextResponse.json({success: true, data})
}

// this is how to get the data from the body of the request POST