import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Layout from '@/components/Layout/Layout'
import { blackBeauty } from '@/src/utils/typography/color'
import Link from 'next/link'
import theme from '@/src/theme'

const inter = Inter({ subsets: ['latin'] })
       



export default function Home() {
  return (
    <>
      <Head>
        <title>Maliek Davis | Full-Stack Developer</title>
        <meta name="description" content="Maliek Davis | Full Stack Web Applications Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      


      
      <Card elevation={0} sx={{paddingBlock: '0', marginBlock:'0', bgcolor:'transparent' }}>
          {/* <CardMedia 
          component='img'
          sx={{ position:'fixed', maxHeight: '100vh', objectFit: 'contain', bgcolor:'transparent' }}
          image='/images/maliek-hero.png'
          alt='Dark work out area with a barbell as the center of attention'
          /> */}
          <CardContent
          sx={{  width:'100%', maxHeight:'100vh',  paddingBlockStart: {xs:'20vh', md:'25vh'}, paddingInline:'0', bgcolor:'transparent'}}
          >
            <div style={{display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
            width:'100%',overflow:'hidden',}}>
              <Typography variant='h1' component='div' 
                sx={{
                    color: blackBeauty[100],
                  display: 'flex',
                  fontFamily: 'mongoose', fontSize: {xs: '5rem'},
                  width: '100%',
                  flexShrink: 0,
                  alignItems: 'center',
                  animation: {
                    xs: 'slide-left 9s linear infinite',
                    md: 'slide-left 17s linear infinite'
                  },
                }}>  Hello, I&#39;m Maliek.
              </Typography>

              

            </div>
            <div style={{display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
            width:'100%',overflow:'hidden',}}>
                            
              <Typography variant='h3' component='div' 
                  sx={{
                    color: blackBeauty[100],
                    fontFamily: 'mongoose', fontSize: {xs: '4rem'},
                    width: '100%',
                    display: 'flex',
                    flexShrink: 0,
                    alignItems: 'center',
                    animation: {
                      xs: 'slide-left2 15s linear infinite',
                      md: 'slide-left2 16s linear infinite'
                    } 
                  }}>  Full Stack Developer/Project Manager 
                </Typography>
            </div>


            <Box  sx={{textAlign:'center', paddingBlock: '5vh 0', paddingInline: {xs: '17.5vw'}}}>
            <Link  href='/contact'><Button className='' fullWidth elevation='5'
              variant='contained'
              
              sx={{fontFamily: 'mongoose', paddingBlock: {xs:'2vh'}, fontSize: {xs:'1.5rem'} }}
              > <Typography variant='h4'   className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'> CONTACT ME</Typography></Button></Link>
              
            </Box>


            <div style={{display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
            width:'100%',overflow:'hidden',}}>
                            
              <Typography variant='h3' component='div' 
                  sx={{
                    color: blackBeauty[100],
                    fontFamily: 'mongoose',
                    width: '100%',
                    display: 'flex',
                    flexShrink: 0,
                    alignItems: 'center',
                    animation: {
                      xs: 'slide-left2 15s linear infinite',
                      md: 'slide-left2 18s linear infinite'
                    } 
                  }}>  HTML CSS JS6
                </Typography>
            </div>
            <div style={{display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
            width:'100%',overflow:'hidden',}}>
                            
              <Typography variant='h5' component='div' 
                  sx={{
                    color: blackBeauty[100],
                    fontFamily: 'mongoose',
                    width: '100%',
                    display: 'flex',
                    flexShrink: 0,
                    alignItems: 'center',
                    animation: {
                      xs: 'slide-left2 7s linear infinite',
                      md: 'slide-left2 15s linear infinite'
                    } 
                  }}>  USER INTERFACE
                </Typography>
            </div>
            <div style={{display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
            width:'100%',overflow:'hidden',}}>
                            
              <Typography variant='h6' component='div' 
                  sx={{
                    color: blackBeauty[100],
                    fontFamily: 'mongoose',
                    width: '100%',
                    display: 'flex',
                    flexShrink: 0,
                    alignItems: 'center',
                    animation: {
                      xs: 'slide-left2 12s linear infinite',
                      md: 'slide-left2 16s linear infinite'
                    } 
                  }}>  USER EXPERIENCE
                </Typography>
            </div>
            <div style={{display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
            width:'100%',overflow:'hidden',}}>
                            
              <Typography variant='h3' component='div' 
                  sx={{
                    color: blackBeauty[100],
                    fontFamily: 'mongoose',
                    width: '100%',
                    display: 'flex',
                    flexShrink: 0,
                    alignItems: 'center',
                    animation: {
                      xs: 'slide-left2 9s linear infinite',
                      md: 'slide-left2 19s linear infinite'
                    } 
                  }}>  API INTERGRATION
                </Typography>
            </div>
            <div style={{display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
            width:'100%',overflow:'hidden',}}>
                            
              <Typography variant='h3' component='div' 
                  sx={{
                    color: blackBeauty[100],
                    fontFamily: 'mongoose',
                    width: '100%',
                    display: 'flex',
                    flexShrink: 0,
                    alignItems: 'center',
                    animation: {
                      xs: 'slide-left2 10s linear infinite',
                      md: 'slide-left2 14s linear infinite'
                    } 
                  }}>  RESPONSIVE DESIGN
                </Typography>
            </div>
            
            
            
            
          </CardContent>
        </Card>     
       
    </>
  )
}
