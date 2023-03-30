
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Layout from '@/components/Layout/Layout'
import { ambitiousBlue, blackBeauty, outlandishOrange } from '@/src/utils/typography/color'
import Link from 'next/link'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { blue, red, yellow } from '@mui/material/colors';
import Collapse from '@mui/material/Collapse';
import theme from '@/src/theme'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';



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
  const [expanded2, setExpanded2] = React.useState(false);


  function CircularStatic() {
    const [progress, setProgress] = React.useState(10);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return <CircularProgressWithLabel value={progress} />;
  }

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}


CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

    return (
        <>
            
      <main style={{minHeight: '100vh',  paddingBlock: '0', marginBlock: '0'}}>
      
      <Card maxHeight='100vh' sx={{paddingBlock: '0', marginBlock:'0', width:'100%'}}>
          <CardMedia 
          component='img'
          sx={{ position:'fixed', maxHeight: '100vh', objectFit: 'contain'}}
          image='/images/maliek-hero.png'
          alt='Dark work out area with a barbell as the center of attention'
          />
          
          <CardContent
            sx={{ position:'absolute', width:'100%', paddingBlockStart: '10vh', paddingInline: '0'}}
            >

              
                <div style={{position:'absolute' ,display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
                width:'100%',overflow:'hidden',}}>
                <Typography variant='h1' component='div' 
                    sx={{
                        color: blackBeauty[300],
                    display: 'flex',
                    fontFamily: 'mongoose',
                    width: '100%',
                    flexShrink: 0,
                    alignItems: 'center',
                    animation: {
                        xs: 'slide-left 9s linear infinite',
                        md: 'slide-left 12s linear infinite'
                    },
                    }}>  Blood, Sweat
                </Typography>

                

                </div>
                <div style={{display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
                width:'100%',overflow:'hidden',}}>
                                
                <Typography variant='h1' component='div' 
                    sx={{
                        paddingBlockStart:{xs:'7vh'},
                        color: blackBeauty[100],
                        fontFamily: 'mongoose',
                        width: '100%',
                        display: 'flex',
                        flexShrink: 0,
                        alignItems: 'center',
                        animation: {
                        xs: 'slide-left2 15s linear infinite',
                        md: 'slide-left2 12s linear infinite'
                        } 
                    }}>  & Tears 
                    </Typography>
                </div>

                
            <CardContent
            sx={{ position:'absolute',  maxWidth: '100%', minWidth:'100%', display:'flex', overflow: 'auto'}}
            >



            {/* Card Slider */}
            <Stack direction='row' justifyContent="center" alignItems='center' style={{display:'flex', textAlign:'center'}}>


              <Card 
            sx={{ 
              width: {
                xs: '80vw',
                lg: '30vw'
              }, 
              margin: '1vw', bgcolor:blackBeauty[800], marginInlineStart: {xl: '25vw'},
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
                  <Typography variant="body" color={theme.palette.secondary.subone}  sx={{letterSpacing:  {xs: '2px', md: '5px'}, fontFamily:'Bellota Text', fontSize: {xs: '1rem', md: '1rem'}, height: { xs: '15vh'}}}>
                    Lifestyle blog dedicated to people who want to live a life worth living. It&#39;s a curation of value add reads.
                  </Typography>
                </CardContent>
                            <CardActions  disableSpacing>
                                <ExpandMore
                                
                                expand={expanded}
                                onClick={()=> {setExpanded(!expanded)}}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon sx={{color:blackBeauty[100], key: 'pearl'}} />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded}  timeout="auto" unmountOnExit>
                                <CardContent>
                                  <Typography variant='h4' component='div' className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' >
                                    Tech Stack
                                  </Typography>
                                  
                                  <Stack sx={{paddingBlockStart:'2vh'}} spacing={12} direction="row" justifyContent="center"  alignItems='center'>

                                  <Box>
                                      <Typography variant='p' component='div' sx={{color:yellow[500]}}>JavaScript</Typography>
                                      <CircularProgressWithLabel value={94} sx={{color: yellow[500]}} />
                                    </Box>
                                    <Box>
                                      <Typography variant='p' component='div' sx={{color: outlandishOrange[900]}}>HTML</Typography>
                                      <CircularProgressWithLabel value={4} sx={{color: outlandishOrange[900]}} />
                                    </Box>
                                    <Box>
                                      <Typography variant='p' component='div' sx={{color: blue[200]}}>CSS</Typography>
                                      <CircularProgressWithLabel value={2} sx={{color: blue[200]}} />
                                    </Box>
                                    
                                  </Stack>
                                </CardContent>
                            </Collapse>
                  </Card>


                  <Card 
            sx={{ 
              width: {
                xs: '80vw',
                lg: '30vw'
              }, 
              margin: '1vw', bgcolor:blackBeauty[800], marginInlineEnd: {xl:'25vw'},
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
                  <Typography variant="body" color={theme.palette.secondary.subone} sx={{letterSpacing:  {xs: '2px', md: '5px'}, fontFamily: 'Bellota Text', fontSize: {xs: '1rem', md: '1rem'}, height: {xs: '15vh'}}}>
                    This is my very &#34;first&#34; personal website... at the very least the one I&#39;m not afraid of showing to the public lol Tremendous growth.
                  </Typography>
                </CardContent>
                            <CardActions  disableSpacing>
                                <ExpandMore
                                key='cosmic'
                                expand={expanded2}
                                onClick={()=>{setExpanded2(!expanded2)}}
                                aria-expanded={expanded2}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon  sx={{color: blackBeauty[100], key: 'cosmic'}} />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded2}  timeout="auto" unmountOnExit>
                                <CardContent>
                                  <Typography variant='h4' component='div'className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' >
                                    Tech Stack
                                  </Typography>
                                  <Stack sx={{paddingBlockStart:'2vh'}} spacing={12} direction="row" justifyContent="center"  alignItems='center'>

                                  <Box>
                                      <Typography variant='p' component='div' sx={{color:yellow[500]}}>JavaScript</Typography>
                                      <CircularProgressWithLabel value={81} sx={{color: yellow[500]}} />
                                    </Box>
                                    <Box>
                                      <Typography variant='p' component='div' sx={{color: blue[200]}}>CSS</Typography>
                                      <CircularProgressWithLabel value={15} sx={{color: blue[200]}} />
                                    </Box>
                                    <Box>
                                      <Typography variant='p' component='div' sx={{color: blue[700]}}>TypeScript</Typography>
                                      <CircularProgressWithLabel value={4} sx={{color: blue[500]}} />
                                    </Box>
                                    
                                  </Stack>
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



            </Stack>
               
          </CardContent>
            </CardContent>


        </Card> 
      </main>    
        </>
    )
}