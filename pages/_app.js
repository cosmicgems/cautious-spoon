import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import '../styles/globals.css'
const clientSideEmotionCache = createEmotionCache();


export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme} >
    <div className='canvas' style={{height: '100vh', overscrollBehavior: 'contain'}}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            
                <Component {...pageProps} />
            
            
          
            
         
    </div>
       </ThemeProvider>
  </CacheProvider>
  );
 }
