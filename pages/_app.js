import '../styles/globals.css'
import Layout from './components/layout'
import Head from 'next/head'
import '../styles/scss/global.scss'
import React from 'react';
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Uitslagen en standen | Rolstoelhockey App</title>
        <meta name="description" content="De officiële Rolstoelhockey app voor de H en E hockey competitie! Snel en overzichtelijk alle uitslagen bekijken." />
        <meta charset="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name='theme-color' content="#ff7d00"/>
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  )
};