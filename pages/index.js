import React, { Component, View, useState} from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import CookieConsent from "react-cookie-consent";
import "tailwindcss/tailwind.css";
import sponsor_logo from '../public/img/nederlof.png'

import { Section } from '../home_components/layout/Section';
import { HeroOneButton } from '../home_components/HeroOneButton';
import { Button } from '../home_components/Button';
import { Background } from '../home_components/Background';
import { VerticalFeatures } from '../home_components/layout/VerticalFeatures';

function FrontPage() {
  return (
    <div>
      <Background color="bg-gray-100">
        <Section yPadding="pt-20 pb-32">
          <HeroOneButton
            title={
              <>
                {'De Rolstoelhockey App'}
              </>
            }
            description="Alle uitslagen en standen van de H- en E-Hockey overzichtelijk in één app."
            button={
              <Link href="/overview">
                <a className='bg-orange-600 p-3 rounded-lg'>Bekijk uitslagen</a>
              </Link>
            }
          />
        </Section>
      </Background>
      <Background>
        <VerticalFeatures />
        <div className="mb-6 text-center sm:px-6">
          <div className="mt-6 mb-6 text-xl">Mede mogelijk gemaakt door : </div>
          <img className="rounded-xl shadow-lg mb-6 object-center inline" width={118} height={110} src="/img/nederlof.png" />
        </div>
      </Background>
      <CookieConsent  location="bottom" buttonText="Akkoord" cookieName="agreesPolicy" buttonStyle={{background: "#ff7b00"}} expires={999} overlay>
          Deze website gebruikt cookies om de gebruiksvriendelijkheid van de website te verbeteren.
      </CookieConsent>
    </div>
  )
}

export default FrontPage;