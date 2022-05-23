import React, { Component, View, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
              <Link href="/uitslagen">
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
    </div>
    
  )
}

export default FrontPage;