import { verify } from 'jsonwebtoken';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { NextResponse } from 'next/server';

const secret = process.env.TOKEN_SECRET;

export default function middleware(req) {
    const { cookies } = req;

    const jwt = cookies.serialisedToken;
    const url = req.url;

    if(url.includes("/login")){
        if(jwt){
          try {
            verify(jwt, secret);
            return NextResponse.redirect("/");
        } catch (e) {
            return NextResponse.next();
        }
    }
  }

  if(url.includes("/addmatch")){
    if(jwt){
      try {
        verify(jwt, secret);
        return NextResponse.redirect("/");
    } catch (e) {
        return NextResponse.next();
    }
}
}

}