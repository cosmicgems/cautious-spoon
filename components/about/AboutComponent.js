
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Layout from '@/components/Layout/Layout'
import { blackBeauty } from '@/src/utils/typography/color'
import Link from 'next/link'
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import * as React from 'react';


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
  

export default function AboutComponent(){
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
        <>
            
            <main style={{minHeight: '100vh', paddingBlockEnd: '0', marginBlockEnd: '0'}}>
            
                <Card maxHeight='100vh' sx={{paddingBlock: '0', marginBlock:'0', width: '100%'}}>
                    <CardMedia 
                    component='img'
                    sx={{ position:'fixed', maxHeight: '100vh', objectFit: 'contain'}}
                    image='/images/maliek-hero.png'
                    alt='Dark work out area with a barbell as the center of attention'
                    />
                    <div style={{display: 'flex', width:'100%', flexWrap: 'nowrap', whiteSpace: 'nowrap', overflow:'hidden',  position:'absolute',  paddingBlockStart: '10vh'}}>
                        <Typography variant='h1' component='div' 
                            sx={{
                                color: blackBeauty[100],
                            display: 'flex',
                            fontFamily: 'mongoose',
                            width: '100%',
                            flexShrink: 0,
                            alignItems: 'center',
                            animation: {
                                xs: 'slide-left-about 8s linear infinite',
                                md: 'slide-left-about 20s linear infinite'
                            },
                            }}>  My Story.
                        </Typography>

                        

                        </div>
                        
                                
            <CardContent
            sx={{ position:'absolute',  paddingBlockStart: '35vh', maxWidth: '100%', display:'flex', overflowX:'scroll'}}
            >
            
                <div style={{display:'flex', textAlign:'center'}}>

                        <Card 
                        sx={{ 
                        width: {
                            xs: '80vw',
                            lg: '30vw'
                        }, 
                        margin: '1vw',
                        bgcolor: blackBeauty[800]
                        }}>
                            <CardMedia
                                component="img"
                                alt="pearlbox.co website"
                                sx={{  maxheight: '150px', objectFit: 'contain'}}
                                image="/images/maliek-hero3.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>
                                    In the beginning...
                                
                                </Typography>
                                <Typography variant="body" sx={{color: blackBeauty[100], letterSpacing: '2px'}}>
                                The foundation that forged unrelenting will power.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon  sx={{color: blackBeauty[100]}} />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>
                                I was born into the hustle and bustle of Detroit, a city that had seen better days. Growing up, I was always told that if I wanted something, I had to go out and get it for myself. It was a tough environment to grow up in, but I never let it get me down. I was always ready to take on whatever challenges came my way. 

                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>At the age of 11, my family moved to Rochester Hills, a suburb of Detroit. It was a drastic change, going from the city to the suburbs, and I had to adjust quickly. But even in this new environment, there were challenges. I struggled to find my focus and direction, and it seemed like everyone else around me had it all figured out. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>But I didn&#39;t let that discourage me. I knew that if I wanted to succeed, I had to keep moving forward, no matter what. And that&#39;s exactly what I did. I took every opportunity that came my way, and I worked hard to make the most of it. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>As I got older, I began to realize that my purpose in life was to help others. I wanted to use my skills and talents to make a positive impact in the world. And with that realization came a newfound sense of confidence and determination. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>Looking back on my journey so far, I realize that it&#39;s been a series of ups and downs. But through it all, I&#39;ve learned to weather the storms and come out stronger on the other side. And I know that whatever challenges come my way in the future, I&#39;ll be ready to take them on with the same resilience and determination that has brought me this far.
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
                        margin: '1vw',
                        bgcolor: blackBeauty[800] 
                        }}>
                            <CardMedia
                                component="img"
                                alt="pearlbox.co website"
                                sx={{  maxHeight: '150px', objectFit: 'contain'}}
                                image="/images/maliek-hero3.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>
                                    Path to Identity...
                    
                                </Typography>
                                <Typography variant="body"  sx={{color: blackBeauty[100], letterSpacing: '2px'}}>
                                    This is the story telling the journey about how I did a tremendous amount of self-reflection.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon sx={{color: blackBeauty[100]}} />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>
                                I was always driven to pursue my passion for technology. From the time I was a child, I was fascinated by how computers and other devices worked. As I grew older, my interest in technology only grew stronger, and I knew that this was the path I wanted to take in life. 

                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>But I also knew that the road ahead would not be easy. There were challenges to overcome, obstacles to navigate, and setbacks to endure. But I was not deterred. I knew that if I could stay focused on my goals, and keep my eyes on the prize, I could achieve anything I set my mind to. 

                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>And so I began my journey into the world of technology, learning everything I could about programming, web development, and other cutting-edge fields. I worked hard, put in long hours, and refused to give up, even when things got tough. 
                                
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>Through it all, I remained focused on my purpose, and my passion for technology never wavered. I knew that this was where I belonged, and I was determined to make my mark in the field. 
                                
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>Today, I am proud to say that I have achieved many of my goals, and I continue to push myself to new heights every day. With hard work, dedication, and a never-give-up attitude, I know that anything is possible. And I am excited to see where my journey will take me next.
                                
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
                        margin: '1vw',
                        bgcolor: blackBeauty[800] 
                        }}>
                            <CardMedia
                                component="img"
                                alt="pearlbox.co website"
                                sx={{  maxHeight: '150px', objectFit: 'contain'}}
                                image="/images/maliek-hero3.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>
                                    Path to Identity...

                                </Typography>
                                <Typography variant="body"  sx={{color: blackBeauty[100], letterSpacing:'2px'}}>
                                    This is the story telling the journey about how I did a tremendous amount of self-reflection.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon  sx={{color: blackBeauty[100]}} />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>
                                I was born into the hustle and bustle of Detroit, a city that had seen better days. Growing up, I was always told that if I wanted something, I had to go out and get it for myself. It was a tough environment to grow up in, but I never let it get me down. I was always ready to take on whatever challenges came my way. 

                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>At the age of 11, my family moved to Rochester Hills, a suburb of Detroit. It was a drastic change, going from the city to the suburbs, and I had to adjust quickly. But even in this new environment, there were challenges. I struggled to find my focus and direction, and it seemed like everyone else around me had it all figured out. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>But I didn&#39;t let that discourage me. I knew that if I wanted to succeed, I had to keep moving forward, no matter what. And that&#39;s exactly what I did. I took every opportunity that came my way, and I worked hard to make the most of it. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>As I got older, I began to realize that my purpose in life was to help others. I wanted to use my skills and talents to make a positive impact in the world. And with that realization came a newfound sense of confidence and determination. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left'}} paragraph>Looking back on my journey so far, I realize that it&#39;s been a series of ups and downs. But through it all, I&#39;ve learned to weather the storms and come out stronger on the other side. And I know that whatever challenges come my way in the future, I&#39;ll be ready to take them on with the same resilience and determination that has brought me this far.
                                </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>

                </div>
        
            </CardContent>
                    </Card> 
            </main>    
        </>
    )
}