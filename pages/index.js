import React, { Component, View, useState} from 'react';
import axios from "axios";
import Skeleton, {SkeletonTheme } from 'react-loading-skeleton';
import GoogleAd from '../pages/GoogleAd';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const options2 = { year: 'numeric', month: 'numeric', day: 'numeric' };

export async function getStaticProps() {
  const resMatchesH = await fetch('https://rolstoelhockey-backend.herokuapp.com/matches/findlatest/H')
  const matchesH = await resMatchesH.json()

  const resMatchesE = await fetch('https://rolstoelhockey-backend.herokuapp.com/matches/findlatest/E')
  const matchesE = await resMatchesE.json()

  const resGamedaysH = await fetch('https://rolstoelhockey-backend.herokuapp.com/gamedays/upcoming/H')
  const gamedaysH = await resGamedaysH.json()

  const resGamedaysE = await fetch('https://rolstoelhockey-backend.herokuapp.com/gamedays/upcoming/E')
  const gamedaysE = await resGamedaysE.json()

  return {
    props: {
      matchesH,
      matchesE,
      gamedaysH,
      gamedaysE
    },
    revalidate:  60
  } 
}

function Home({matchesH, matchesE, gamedaysH, gamedaysE}) {
  return (
    <div className="pageblock">
         <div className="home-div1">
           <div className="home-matches">
             <h1 style={{ fontWeight: '600', fontSize: 26, margin: 7}}>Laatste uitslagen - H</h1>
             {matchesH.map((match) => {
              let game_date = new Date(match.gameday_info.gamedate).toLocaleDateString('nl-NL', options2)
              return (
                <div key={match._id} className="match-group">
                  <div className="match-time-date">
                    <div className="match-time">{match.played_at}</div>
                    <div className="match-date">{game_date}</div>
                  </div>
                  <div className="match-teama">{match.teamA}</div>
                  <div className="match-score">{match.scoreA}</div>
                  <div className="match-score"> - </div>
                  <div className="match-score">{match.scoreB}</div>
                  <div className="match-teamb">{match.teamB}</div>
                </div>
              )
              })}
          </div>
          <div className="home-matches">
            <h1 style={{ fontWeight: '600', fontSize: 26, margin: 7}}>Laatste uitslagen - E</h1>
            {matchesE.map((match) => {
              let game_date = new Date(match.gameday_info.gamedate).toLocaleDateString('nl-NL', options2)
              return (
                <div key={match._id} className="match-group">
                  <div className="match-time-date">
                    <div className="match-time">{match.played_at}</div>
                    <div className="match-date">{game_date}</div>
                  </div>
                  <div className="match-teama">{match.teamA}</div>
                  <div className="match-score">{match.scoreA}</div>
                  <div className="match-score"> - </div>
                  <div className="match-score">{match.scoreB}</div>
                  <div className="match-teamb">{match.teamB}</div>
                </div>
              )
              })}
          </div>
        </div>
        <div className="home-div1">
        <div className="home-events">
            <h1 style={{ fontWeight: '600', fontSize: 26, margin: 7}}>Competitedagen - H</h1>
              {gamedaysH.map((day) => {
                let game_date = new Date(day.gamedate).toLocaleDateString('nl-NL', options)
                      let locationurl = "https://maps.google.com/?q=" + day.address + ", " + day.city
                      let address = ""
                      let city = ""
                
                      if (day.address === null || day.address === "") {
                        address = "Unknown"
                        city = "Unknown"
                      }
                      else {
                        address = day.address
                        city = day.city
                      }
                      return(
                        <div key={day._id} className="event">
                        <div className="event-mid">
                          <div style={{ width: '100%', margin: '5px' }}><b style={{ fontWeight: '400' }}>{day.title}</b></div>
                          <div style={{ width: '100%', margin: '5px' }}><b style={{ fontWeight: '300' }}>Datum: </b><br />{game_date}</div>
                          <div style={{ width: '100%', margin: '5px' }}><b style={{ fontWeight: '300' }}>Adres: </b><br />{address}</div>
                          <div style={{ width: '100%', margin: '5px', marginBottom: '15px' }}><b style={{ fontWeight: '300' }}>Stad: </b><br />{city}</div>
                          <a className='button' href={locationurl}>Navigeer</a>
                        </div>
                      </div>
                      )
                })}
          </div>
          <div className="home-events">
            <h1 style={{ fontWeight: '600', fontSize: 26, margin: 7}}>Competitedagen - E</h1>
            {gamedaysE.map((day) => {
                let game_date = new Date(day.gamedate).toLocaleDateString('nl-NL', options)
                      let locationurl = "https://maps.google.com/?q=" + day.address + ", " + day.city
                      let address = ""
                      let city = ""
                
                      if (day.address === null || day.address === "") {
                        address = "Unknown"
                        city = "Unknown"
                      }
                      else {
                        address = day.address
                        city = day.city
                      }
                      return(
                        <div key={day._id} className="event">
                        <div className="event-mid">
                          <div style={{ width: '100%', margin: '5px' }}><b style={{ fontWeight: '400' }}>{day.title}</b></div>
                          <div style={{ width: '100%', margin: '5px' }}><b style={{ fontWeight: '300' }}>Datum: </b><br />{game_date}</div>
                          <div style={{ width: '100%', margin: '5px' }}><b style={{ fontWeight: '300' }}>Adres: </b><br />{address}</div>
                          <div style={{ width: '100%', margin: '5px', marginBottom: '15px' }}><b style={{ fontWeight: '300' }}>Stad: </b><br />{city}</div>
                          <a className='button' href={locationurl}>Navigeer</a>
                        </div>
                      </div>
                      )
                })}
          </div>
        </div>
        <GoogleAd slot="4495490030" googleAdId="ca-pub-3103181417222460"/>
      </div>
  )
}

export default Home;