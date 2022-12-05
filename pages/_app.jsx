import '../styles/globals.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <> 
   <Head>
      <title>SISCON</title>
      <meta name="description" content="Sistema de gestión y control" />
      <link rel="icon" href="/sisconlogo.png" />
    </Head>
   <Component {...pageProps} />
   
   </>
}

export default MyApp
