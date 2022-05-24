import React, { Component, View, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CookieConsent from "react-cookie-consent";


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
                <div className='text-xl'>
                  <Button xl>Bekijk uitslagen</Button>
                </div>
              </Link>
            }
          />
        </Section>
      </Background>
      <Background>
        <VerticalFeatures />
      </Background>
      <CookieConsent  location="bottom" buttonText="Akkoord" cookieName="agreesPolicy" buttonStyle={{background: "#ff7b00"}} expires={999} overlay>
          Deze website gebruikt cookies om de gebruiksvriendelijkheid van de website te verbeteren.
      </CookieConsent>
    </div>
  )
}

export default FrontPage;