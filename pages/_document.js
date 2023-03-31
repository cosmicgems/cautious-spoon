import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en" style={{background: 'linear-gradient(to left, #4fb576 , #44c489 , #28a9ae , #28a2b7 , #4c7788 , #6c4f63 , #432c39 )', backgroundSize: '400% 400% ', animation: 'gradient 7.5s ease infinite' }}>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Cantata+One&family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Great+Vibes&family=Italiana&family=Martel+Sans:wght@200;300;400;600;700;800;900&family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
    <link rel="stylesheet" href="https://use.typekit.net/gxl0ptg.css" />
    <meta name="theme-color" content="#000000"/>
    </Head>
      <body  >
      
        <Main  /> 
      
        
        <div id='portal'/>
        <NextScript />
      </body>
    </Html>
  )
}
