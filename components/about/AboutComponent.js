
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
import Stack from '@mui/material/Stack';


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
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
        <>
            
            
            
                <Card sx={{paddingBlockStart: '10vh', marginBlock:'0', width: '100%', bgcolor: 'transparent'}}>
                    

                    
            <div style={{position:'absolute'  ,display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
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
                    }}>  Once Upon A Time...
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
                    }}>  My Story.
                    </Typography>
                </div>

            <CardContent
            sx={{  width:'100%',  paddingInline: '6vw'}}
            > 

                                    
            <CardContent
            sx={{ position:'relative',  maxWidth: '100%', display:'flex', overflowX:'scroll'}}
            >
            
            <Stack direction='row' justifyContent="center" alignItems='center' style={{display:'flex', textAlign:'center'}}>

                        <Card 
                        sx={{ 
                        width: {
                            xs: '80vw',
                            lg: '45vw'
                        }, 
                        margin: '1vw', marginInlineStart: {xl:'25vw'},
                        bgcolor: blackBeauty[800]
                        }}>
                            <CardMedia
                                component="img"
                                alt="pearlbox.co website"
                                sx={{  maxHeight: {xs:'150px', xl: '300px'}, objectFit: 'fill',
                               }}
                                image="/images/past.JPG"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>
                                    In the beginning...
                                
                                </Typography>
                                <Typography variant="body" sx={{color: blackBeauty[100], letterSpacing: '2px', fontFamily: 'Bellota Text'}}>
                                The foundation that forged unrelenting will power.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded}
                                onClick={()=>{setExpanded(!expanded)}}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon  sx={{color: blackBeauty[100]}} />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent >
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>
                                I was born into the hustle and bustle of Detroit, a city that had seen better days. Growing up, I was always told that if I wanted something, I had to go out and get it for myself. It was a tough environment to grow up in, but I never let it get me down. I was always ready to take on whatever challenges came my way. 

                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>At the age of 11, my family moved to Rochester Hills, a suburb of Detroit. It was a drastic change, going from the city to the suburbs, and I had to adjust quickly. But even in this new environment, there were challenges. I struggled to find my focus and direction, and it seemed like everyone else around me had it all figured out. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>But I didn&#39;t let that discourage me. I knew that if I wanted to succeed, I had to keep moving forward, no matter what. And that&#39;s exactly what I did. I took every opportunity that came my way, and I worked hard to make the most of it. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>As I got older, I began to realize that my purpose in life was to help others. I wanted to use my skills and talents to make a positive impact in the world. And with that realization came a newfound sense of confidence and determination. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>Looking back on my journey so far, I realize that it&#39;s been a series of ups and downs. But through it all, I&#39;ve learned to weather the storms and come out stronger on the other side. And I know that whatever challenges come my way in the future, I&#39;ll be ready to take them on with the same resilience and determination that has brought me this far.
                                </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>

                            
                        <Card 
                        sx={{ 
                        width: {
                            xs: '80vw',
                            lg: '45vw'
                        }, 
                        margin: '1vw',
                        bgcolor: blackBeauty[800] 
                        }}>
                            <CardMedia
                                component="img"
                                alt="pearlbox.co website"
                                sx={{  maxHeight: {xs:'150px', xl: '300px'}, objectFit: 'cover'}}
                                image="/images/present.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>
                                    Path to Identity...
                    
                                </Typography>
                                <Typography variant="body"  sx={{color: blackBeauty[100], letterSpacing: '2px', fontFamily: 'Bellota Text'}}>
                                    This is the story telling the journey about how I did a tremendous amount of self-reflection.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded2}
                                onClick={()=>{setExpanded2(!expanded2)}}
                                aria-expanded={expanded2}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon sx={{color: blackBeauty[100]}} />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded2} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>
                                I was always driven to pursue my passion for technology. From the time I was a child, I was fascinated by how computers and other devices worked. As I grew older, my interest in technology only grew stronger, and I knew that this was the path I wanted to take in life. 

                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>But I also knew that the road ahead would not be easy. There were challenges to overcome, obstacles to navigate, and setbacks to endure. But I was not deterred. I knew that if I could stay focused on my goals, and keep my eyes on the prize, I could achieve anything I set my mind to. 

                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>And so I began my journey into the world of technology, learning everything I could about programming, web development, and other cutting-edge fields. I worked hard, put in long hours, and refused to give up, even when things got tough. 
                                
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>Through it all, I remained focused on my purpose, and my passion for technology never wavered. I knew that this was where I belonged, and I was determined to make my mark in the field. 
                                
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>Today, I am proud to say that I have achieved many of my goals, and I continue to push myself to new heights every day. With hard work, dedication, and a never-give-up attitude, I know that anything is possible. And I am excited to see where my journey will take me next.
                                
                                </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>

                            
                        <Card 
                        sx={{ 
                        width: {
                            xs: '80vw',
                            lg: '45vw'
                        }, 
                        margin: '1vw', marginInlineEnd: {xl: '25vw'},
                        bgcolor: blackBeauty[800] 
                        }}>
                            <CardMedia
                                component="img"
                                alt="pearlbox.co website"
                                sx={{  maxHeight: {xs:'150px', xl: '300px'}, objectFit: 'cover'}}
                                image="https://images.pexels.com/photos/8849288/pexels-photo-8849288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>
                                    FTL Vision

                                </Typography>
                                <Typography variant="body"  sx={{color: blackBeauty[100], letterSpacing:'2px', fontFamily: 'Bellota Text'}}>
                                    The future has been written, and it&#39;s pretty intersting.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                expand={expanded3}
                                onClick={()=>{setExpanded3(!expanded3)}}
                                aria-expanded={expanded3}
                                aria-label="show more"
                                >
                                    <ExpandMoreIcon  sx={{color: blackBeauty[100]}} />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded3} timeout="auto" unmountOnExit>
                                <CardContent>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>
                                Ah, it&#39;s good to see you again. Have a seat, my friend. Let me tell you a story about how I came to be the most valuable asset to a certain company.  

                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>It was a brisk morning when I walked into the interview room. I had been waiting for this moment my entire life. I knew that my skills and talents would make me an indispensable addition to any company. As I sat down, I looked around the room and saw the skeptical faces of the interviewers. They had seen many candidates before me, but I knew that I was different. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>I confidently answered their questions and showed them how I could solve problems that others couldn&#39;t. I could see the doubt in their eyes beginning to fade away. They were starting to see what I could bring to the table. As the interview progressed, I could feel their excitement growing. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>After the interview, I was hired on the spot. The company knew that I was the missing piece to their puzzle. I walked out of that interview with my head held high, knowing that I had achieved something great. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>But the real work was yet to come. I knew that I had to prove myself and show them that their decision to hire me was the right one. I dove headfirst into my work, learning everything I could about the company and its goals. I made sure that every project I worked on was flawless, and I always found ways to improve upon what had been done before. As the months passed, I could see the impact that I was having on the company. They were growing faster than ever before, and I knew that I was a big part of that success. They began to see me as a leader and a mentor, and I embraced that role with open arms. Through hard work and dedication, I had become the most valuable asset to the company. And they knew it too. As we toasted to our success at the annual company party, I couldn&#39;t help but smile. I had come a long way from that young boy in Detroit, but I knew that my journey was far from over. So here I am, my friend, telling you my story. A story of perseverance, determination, and success. And let me tell you, it feels good to be the most valuable asset to a company.
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>As the months passed, I could see the impact that I was having on the company. They were growing faster than ever before, and I knew that I was a big part of that success. They began to see me as a leader and a mentor, and I embraced that role with open arms. 
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>Through hard work and dedication, I had become the most valuable asset to the company. And they knew it too. As we toasted to our success at the annual company party, I couldn&#39;t help but smile. I had come a long way from that young boy in Detroit, but I knew that my journey was far from over. So here I am, my friend, telling you my story. A story of perseverance, determination, and success. And let me tell you, it feels good to be the most valuable asset to a company.
                                </Typography>
                                <Typography sx={{color: blackBeauty[100], letterSpacing:'2px', textAlign: 'left', fontFamily: 'Bellota Text'}} paragraph>So here I am, my friend, telling you my story. A story of perseverance, determination, and success. And let me tell you, it feels good to be the most valuable asset to a company.
                                </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>

                </Stack>
        
            </CardContent>
            </CardContent>
                
                    
                        
            
                    </Card> 
             
        </>
    )
}