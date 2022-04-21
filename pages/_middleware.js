import { useState, useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { NextResponse } from 'next/server';

const secret = process.env.TOKEN_SECRET;

export default function middleware(req) {

    const jwt = require('@tsndr/cloudflare-worker-jwt')
    const { cookies } = req;

    const token = cookies.JWTToken;
    const url = req.url;

    if(url.includes("/login")){
      console.log('check login auth')
        if(token){
          try {
            jwt.verify(token, secret);
            return NextResponse.redirect("/");
        } catch (e) {
            return NextResponse.next();
        }
    }
  }

  if(url.includes("/addmatch")){
    console.log('check token')
    if(token){
      try {
        jwt.verify(token, secret);
        return NextResponse.redirect("/");
    } catch (e) {
        return NextResponse.next();
    }
}
}

}