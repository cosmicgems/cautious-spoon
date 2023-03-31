import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import '../styles/globals.css'
import Layout from '@/components/Layout/Layout';
const clientSideEmotionCache = createEmotionCache();


export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      
    <meta name="theme-color" content="#000000"/>
    </Head>
    <ThemeProvider theme={theme} >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <Layout>
        <CssBaseline />

            <Component {...pageProps} />
      </Layout>
            
       </ThemeProvider>
  </CacheProvider>
  );
 }
