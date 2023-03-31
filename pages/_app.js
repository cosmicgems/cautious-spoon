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
import { AnimatePresence, motion } from "framer-motion"
import { Router } from 'react-router-dom';
import { useRouter } from 'next/router';


export default function App(props) {
  const router = useRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      
    <meta name="theme-color" content="#000000"/>
    </Head>
    <ThemeProvider theme={theme} >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      
      <Layout>
        <AnimatePresence mode='wait'>
        <motion.div
        key={router.route}
        initial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{
          duration: 1.5,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity:1,
          },
          exitState: {

          }
        }}
        >
          <Component {...pageProps} />
        </motion.div>
        </AnimatePresence>
            
      </Layout>
            
       </ThemeProvider>
  </CacheProvider>
  );
 }
