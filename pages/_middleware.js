import { useState, useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { NextResponse } from 'next/server';

const secret = process.env.TOKEN_SECRET;

export default function middleware(req) {

    const jwt = require('@tsndr/cloudflare-worker-jwt')
    const { cookies } = req;

    const token = cookies.serialisedToken;
    const url = req.url;

    if(url.includes("/login")){
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