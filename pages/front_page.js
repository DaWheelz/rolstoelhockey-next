import React, { Component, View, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Section } from '../pages/layout/Section';
import { HeroOneButton } from '../pages/components/HeroOneButton';
import { Button } from '../pages/components/Button';
import { Background } from '../pages/components/Background';
import { VerticalFeatures } from '../pages/layout/VerticalFeatures';

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