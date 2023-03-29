import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Layout from '@/components/Layout/Layout'
import PortfolioComponent from '/components/portfolio/PortfolioComponent'
import { blackBeauty } from '@/src/utils/typography/color'

export default function Portfolio() {
    return(
        <>
        <Layout>
            <div style={{maxWidth: '100%'}}>

        <PortfolioComponent/>
            </div>
        </Layout>
            
        </>
    )
}