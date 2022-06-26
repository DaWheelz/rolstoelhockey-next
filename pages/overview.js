import React, { Component, View, useState} from 'react';
import GlobalStyle from './components/styled_components';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const options2 = { year: 'numeric', month: 'numeric', day: 'numeric' };

export async function getStaticProps() {
  const resMatchesH = await fetch('https://rolstoelhockey-backend.herokuapp.com/matches/findlatest/H')
  const matchesH = await resMatchesH.json()

  const resMatchesE = await fetch('https://rolstoelhockey-backend.herokuapp.com/matches/findlatest/E')
  const matchesE = await resMatchesE.json()

  const resGamedaysH = await fetch('https://rolstoelhockey-backend.herokuapp.com/gamedays/get/H')
  const gamedaysH = await resGamedaysH.json()

  const resGamedaysE = await fetch('https://rolstoelhockey-backend.herokuapp.com/gamedays/get/E')
  const gamedaysE = await resGamedaysE.json()

  return {
    props: {
      matchesH,
      matchesE,
      gamedaysH,
      gamedaysE
    },
    revalidate: 60
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <Box>
            {children}
          </Box>
        </Container>
        
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Home({matchesH, matchesE, gamedaysH, gamedaysE}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <GlobalStyle />
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable auto tabs example">
              <Tab label="Uitslagen - H" {...a11yProps(0)} />
              <Tab label="Uitslagen - E" {...a11yProps(1)} />
              <Tab label="Competitiedagen - H" {...a11yProps(2)} />
              <Tab label="Competitiedagen - E" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div>
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3103181417222460"
                  crossorigin="anonymous"></script>
              <ins class="adsbygoogle"
                  style="display:block"
                  data-ad-client="ca-pub-3103181417222460"
                  data-ad-slot="9945355702"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
              <script>
                  (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
              </div>
              <div style={{width: '70rem'}}> 
                <div className='match-title'>Laatste uitslagen - H</div>
                  {matchesH.map((match) => {
                    let game_date = new Date(match.gameday_info.gamedate).toLocaleDateString('nl-NL', options2)
                    return (
                      <div key={match._id} className="match-group">
                        <div className="match-time-date">
                          <div className="match-time">{match.played_at}</div>
                          <div className="match-date text-orange-600" >{game_date}</div>
                        </div>
                        <div className="match-teama">{match.teamA}</div>
                        <div className="match-score text-orange-600">{match.scoreA}</div>
                        <div className="match-score"> - </div>
                        <div className="match-score text-orange-600">{match.scoreB}</div>
                        <div className="match-teamb">{match.teamB}</div>
                      </div>
                      )
                    })}
              </div>
              <div></div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className='match-title'>Laatste uitslagen - E</div>
            {matchesE.map((match) => {
              let game_date = new Date(match.gameday_info.gamedate).toLocaleDateString('nl-NL', options2)
              return (
                <div key={match._id} className="match-group">
                  <div className="match-time-date">
                    <div className="match-time">{match.played_at}</div>
                    <div className="match-date text-orange-600">{game_date}</div>
                  </div>
                  <div className="match-teama">{match.teamA}</div>
                  <div className="match-score text-orange-600">{match.scoreA}</div>
                  <div className="match-score"> - </div>
                  <div className="match-score text-orange-600">{match.scoreB}</div>
                  <div className="match-teamb">{match.teamB}</div>
                </div>
              )
              })}
          </TabPanel>
          <TabPanel value={value} index={2}>
              <div className='match-title'>Competitedagen - H</div>
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
                          <a href={locationurl}>
                          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap='round' strokeLinejoin='round' d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap='round' strokeLinejoin='round' d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                              <span>Navigeer</span>
                          </button>
                          </a>
                        </div>
                      </div>
                      )
                })}
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className='match-title'>Competitedagen - E</div>
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
                          <a href={locationurl}>
                          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap='round' strokeLinejoin='round' d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap='round' strokeLinejoin='round' d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                              <span>Navigeer</span>
                          </button>
                          </a>
                        </div>
                      </div>
                      )
                })}
          </TabPanel>
        </div>
  )
}

export default Home;