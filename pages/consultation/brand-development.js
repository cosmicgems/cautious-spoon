import { Box,  Card, CardActions, CardContent, CardHeader, Grid, 
    Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Layout from '@/components/Layout/Layout'
import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import SendOutlinedIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import WebDevForm from '@/components/web-consultation/WebDevForm'
import { blackBeauty } from '@/src/utils/typography/color';
import BrandDevForm from '@/components/web-consultation/BrandDevForm';


export default function WebConsult(){


    return(
        <>
        <Layout>
        
        <Card elevation={0} sx={{paddingBlock: '10vh', marginBlock:'0', bgcolor: 'transparent'}}> 
        
            <div style={{position:'absolute',display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
            width:'100%',overflow:'hidden',}}>
            <Typography variant='h2' component='div' 
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
                }}>  Consultation
            </Typography>

            

            </div>


            <div style={{ paddingBlockStart: '7vh', display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
            width:'100%',overflow:'hidden',}}>
                            
            <Typography variant='h1' component='div' 
                sx={{
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
                }}>  Brand Development
                </Typography>
            </div>
        <CardContent
        sx={{  width:'100%', paddingBlockStart: '10vh', paddingInline:'0',}}
        >



  <BrandDevForm/>
        </CardContent>
            
      </Card> 
      
        </Layout>
        </>
    )
}