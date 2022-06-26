import Layout from './components/layout'
import Head from 'next/head'
import React from 'react';
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {

  return (
    <div className='min-h-screen bg-gray-100'>
      <Head>
        <title>Uitslagen en standen | Rolstoelhockey App</title>
        <meta name="description" content="De officiële Rolstoelhockey app voor de H en E hockey competitie! Snel en overzichtelijk alle uitslagen bekijken." />
        <meta charset="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="canonical" href="https://rolstoelhockey.app"/>
        <meta name='theme-color' content="#ff7d00"/>
        <Script id="Adsense-id" async
          onError={(e) => { console.error("Script failed to load", e);}}
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3103181417222460"
          crossorigin="anonymous"
        />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  )
};