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
      <Script
            id="Adsense-id"
            data-ad-client="ca-pub-3103181417222460"
            async="true"
            strategy="beforeInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <Script
            id="Google-Analytics"
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-7388CCFNX6"
          />
          <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7388CCFNX6');
        `}
      </Script>
      <Head>
        <title>Rolstoelhockey app</title>
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