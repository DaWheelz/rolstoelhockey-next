import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from './Section';
import Image from 'next/image';

import ImageIos from '../../public/img/apple_download.png'
import ImageAndroid from '../../public/img/android_download.png'

const VerticalFeatures = () => (
  <Section
    title="Download de app voor iOS of Android"
    description={'Vind jij het ook lastig om de laatste uitslagen en standen te vinden? \n Kijk niet verder en download de iOS of Android app en heb altijd alle informatie bij de hand.'}
  >
    <div style={{justifyContent:'space-around', display:'flex'}}>
        <a href="https://apps.apple.com/kg/app/rolstoelhockey/id1512920070">
            <Image src={ImageIos} width={203} height={70}/>
        </a>
        <a href="https://play.google.com/store/apps/details?id=rolstoel.hockey">
            <Image src={ImageAndroid} width={234} height={70}/>
        </a>
    </div>
    <VerticalFeatureRow
      title="Clubs"
      description="Op zoek naar een club om een training te kunnen volgen? Vind alle informatie over de verschillende clubs in Nederland en België in dit overzicht."
      image="/img/club_overzicht.png"
      imageAlt="clubs_overzicht"
      link="/clubs"
    />
    <VerticalFeatureRow
      title="Uitslagen"
      description="Heb jij ook wel is moeite met het zoeken van de laatste uitslagen van afgelopen wedstrijden? Bekijk het complete overzicht van alle uitslagen voor de H en E-Hockey competitie. "
      image="/img/uitslagen_overzicht.png"
      imageAlt="Second feature alt text"
      reverse
      link="/match"
    />
    <VerticalFeatureRow
      title="Zoek wedstrijd"
      description="Ben jij op zoek naar wanneer specifiek jouw team moet spelen? Met deze functie kun je makkelijk en snel de opkomende wedstrijden bekijken, maar ook de uitslagen bekijken van afgelopen wedstrijden."
      image="/img/team_overzicht.png"
      imageAlt="Third feature alt text"
      link="/matchbyteam"
    />
     <VerticalFeatureRow
      title="Complete competitie overzicht"
      description="Benieuwd naar de laatste stand van de competitie? In dit overzicht vind je het competitie overzicht voor de H- en E-Hockey."
      image="/img/competitie_overzicht.png"
      imageAlt="Third feature alt text"
      reverse
      link="/competition"
    />
  </Section>
);

export { VerticalFeatures };