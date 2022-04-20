import { NextResponse } from "next/server";
import { verify } from 'jsonwebtoken';

const secret = process.env.TOKEN_SECRET;

export default function middleware(req) {
    const { sessionStorage } = req;

    const jwt = sessionStorage.getItem('token');

    const url = req.url;

    if(url.includes("/addmatch")){
        if(jwt === undefined){
            return NextResponse.redirect("/login");
        }

        try {
            verify(jwt, secret);

            return NextResponse.next();
        } catch (e) {
            return NextResponse.redirect('/login');
        }
    }

    return NextResponse.next();
}