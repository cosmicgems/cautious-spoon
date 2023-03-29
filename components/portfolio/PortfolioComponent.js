
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Layout from '@/components/Layout/Layout'
import { blackBeauty } from '@/src/utils/typography/color'
import Link from 'next/link'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import Collapse from '@mui/material/Collapse';
import theme from '@/src/theme'


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function Portfolio(){
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
        <>
            
      <main style={{minHeight: '100vh', paddingBlockEnd: '0', marginBlockEnd: '0'}}>
      
      <Card maxHeight='100vh' sx={{paddingBlock: '0', marginBlock:'0'}}>
          <CardMedia 
          component='img'
          sx={{ position:'fixed', maxHeight: '100vh', objectFit: 'contain'}}
          image='/images/maliek-hero.png'
          alt='Dark work out area with a barbell as the center of attention'
          />
          <div style={{display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap', overflow:'hidden',  position:'absolute', width:'100%',  paddingBlockStart: '10vh'}}>
              <Typography variant='h1' component='div' 
                sx={{
                    color: blackBeauty[100],
                  display: 'flex',
                  fontFamily: 'mongoose',
                  width: '100%',
                  flexShrink: 0,
                  alignItems: 'center',
                  animation: {
                    xs: 'slide-left-portfolio 8s linear infinite',
                    md: 'slide-left-portfolio 20s linear infinite'
                  },
                }}>  My Portfolio.
              </Typography>


            </div>
            <CardContent
          sx={{ position:'absolute',  paddingBlockStart: '35vh', minWidth: '100%', maxWidth: '100%', display:'flex',  }}
          >
            
            <div style={{display:'flex', textAlign:'center', overflow:'auto'}}>


              <Card 
            sx={{ 
              width: {
                xs: '80vw',
                lg: '30vw'
              }, 
              margin: '1vw', bgcolor:blackBeauty[800]
              }}>
                <CardMedia
                  component="video"
                  alt="pearlbox.co website"
                    sx={{  maxHeight: '150px', objectFit: 'contain', bgcolor: 'white'}}
                  src="/images/pearlbox-screencapture.mp4"
                  controls
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" sx={{letterSpacing: {xs: '4px', md: '16px'}}}  className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'>
                  <Link  href='http://www.pearlbox.co'>
                    PearlBox.co
                  </Link>
                    
                  </Typography>
                  <Typography variant="body" color={theme.palette.secondary.subone}  sx={{letterSpacing:  {xs: '2px', md: '5px'}, fontSize: {xs: '1.1rem', md: '1.5rem'}, height: { xs: '15vh'}}}>
                    Lifestyle blog dedicated to people who want to live a life worth living. It&#39;s a curation of value add reads.
                  </Typography>
                </CardContent>
                            <CardActions  disableSpacing>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon sx={{color:blackBeauty[100]}} />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded}  timeout="auto" unmountOnExit>
                                <CardContent>
                                  <Typography variant='h4' component='div' className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' >
                                    Tech Stack
                                  </Typography>
                                </CardContent>
                            </Collapse>
                  </Card>


                  <Card 
            sx={{ 
              width: {
                xs: '80vw',
                lg: '30vw'
              }, 
              margin: '1vw', bgcolor:blackBeauty[800]
              }}>
                <CardMedia
                  component="video"
                  alt="pearlbox.co website"
                    sx={{  maxHeight: '150px', objectFit: 'contain', bgcolor: 'white'}}
                  src="/images/cosmicgems-screencapture.mp4"
                  controls
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" sx={{letterSpacing:  {xs: '4px', md: '16px'}}}  className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'>
                  <Link  href='http://www.cosmicgemsreality.com'>
                    CosmicGemsReality.com
                  </Link>
                    
                  </Typography>
                  <Typography variant="body" color={theme.palette.secondary.subone} sx={{letterSpacing:  {xs: '2px', md: '5px'}, fontSize: {xs: '1.1rem', md: '1.5rem'}, height: {xs: '15vh'}}}>
                    This is my very &#34;first&#34; personal website... at the very least the one I&#39;m not afraid of showing to the public lol Tremendous growth.
                  </Typography>
                </CardContent>
                            <CardActions  disableSpacing>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon sx={{color: blackBeauty[100]}} />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded}  timeout="auto" unmountOnExit>
                                <CardContent>
                                  <Typography variant='h4' component='div'className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' >
                                    Tech Stack
                                  </Typography>
                                </CardContent>
                            </Collapse>
                  </Card>


              {/* <Card 
            sx={{ 
              width: {
                xs: '80vw',
                lg: '30vw'
              }, 
              margin: '1vw', 
              }}>
      <CardMedia
        component="video"
        alt="pearlbox.co website"
          sx={{  maxHeight: '150px', objectFit: 'contain'}}
        src="/images/pearlbox-screencapture.mp4"
        controls
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Link href='http://www.pearlbox.co'>
          PearlBox.co
        </Link>
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lifestyle blog dedicated to people who want to live a life worth living.
        </Typography>
      </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                  <Typography variant='h5' component='div' >
                                    Tech Stack
                                  </Typography>
                                </CardContent>
                            </Collapse>
                  </Card> */}



            </div>
               
          </CardContent>
        </Card> 
      </main>    
        </>
    )
}