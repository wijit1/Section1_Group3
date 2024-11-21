import { NextResponse } from "next/server";
export function middleware(req){
    console.log(req.nextUrl);

    const res = NextResponse.next();
    res.headers.append('Access-Control-Allow-Origin','*');
    res.headers.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE')
    
    return res 
    
}

export const config = {
    matcher: ['/api/:path*']
}