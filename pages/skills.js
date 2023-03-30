import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Layout from '@/components/Layout/Layout'
import { ambitiousBlue, blackBeauty, outlandishOrange } from '@/src/utils/typography/color'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import theme from '@/src/theme'
import { green, yellow } from '@mui/material/colors'

export default function SkillsExp() {
    
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

        const [expanded, setExpanded] = React.useState(false);
      
        const handleExpandClick = () => {
            setExpanded(!expanded);
        };
    return (
        <> 
        <Layout>
                    <main style={{minHeight: '100vh', paddingBlockEnd: '0', marginBlockEnd: '0'}}>     
        <Card maxHeight='100vh' sx={{paddingBlock: '0', marginBlock:'0'}}>
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
                    }}>  Skills &
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
                    }}>  Experience 
                    </Typography>
                </div>


            <CardContent sx={{  maxWidth: '100%', display:'flex', overflowX:'auto'}}
             >

                <div style={{display:'flex', textAlign:'center'}}>
                <Card sx={{ minWidth: 345 , maxWidth: 345, marginInlineEnd: {xs:'5vw'}, bgcolor: blackBeauty[800]}} >
                    <CardContent>
                        <Typography variant="h4" component='div' className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>
                            FULL-STACK WEB DEVELOPMENT
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Typography variant='p' component='div' sx={{textAlign: 'right', color:blackBeauty[100], }} style={{fontSize: '1.5rem'}}>What I Do...</Typography>
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
                        <CardContent style={{letterSpacing: '.85vw', fontWeight:'100', fontSize: '1.05rem'}}  sx={{overflow:'auto', height: {xs: '22.5vh'}}}>
                        <Typography sx={{color: blackBeauty[100]}} variant='p'   paragraph>
                        As a Detroit-based full-stack web developer, I have a passion for computer science, physics, and figuring out how things work. I bring my enthusiasm and technical expertise to every project I work on, and I am always looking for new opportunities to expand my skills and knowledge. 
                        </Typography>
                        <Typography sx={{color: blackBeauty[100]}} variant='p'  paragraph>
                        With project management experience in the automotive technical field, I have successfully managed production projects with budgets over 25 million dollars. As an independent contract employee and freelancer, I have worked on a variety of web development projects, where I have honed my skills in coding, design, and branding. My eye for branding helps me create websites that not only look good but also provide an excellent user experience. 
                        </Typography>
                        <Typography  sx={{color: blackBeauty[100]}} variant='p' paragraph>
                        I am passionate about using my skills to make a positive impact on society through the advancement of technology. Keeping up with the latest trends and techniques in the industry is essential to me, and I constantly seek new challenges to push my limits. 
                        </Typography>
                        <Typography sx={{color: blackBeauty[100]}} variant='p'  paragraph>
                        Whether you are looking for a web developer to build your next project or collaborate on an existing one, I am here to help. Take a look at my portfolio to see my work, and don&#39;t hesitate to reach out to discuss how we can work together to achieve your goals.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                
                <Card sx={{ maxWidth: 345, marginInlineEnd: {xs:'5vw'}, bgcolor: blackBeauty[800] }}>
                <CardContent>
                    <Typography variant="h4" component='div' className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>SKILLS</Typography>
                    
                </CardContent>
                    <CardContent sx={{  maxWidth: '100%', display:'flex', overflowX:'scroll', bgcolor: blackBeauty[700]}}>
                    
                    
                <div style={{display:'flex', textAlign:'center'}}>


                    {/* Javascript logo */}

                  

                   
                        <Grid  container minWidth={300} sx={{marginInlineEnd: '5vw', bgcolor:blackBeauty[800], padding:'1vh 3vw', borderRadius:'10px'}}>
                        <Grid item xs={12}>
                            <Typography variant='h5' component='div'  className='animate-text bg-gradient-to-r from-yellow-100 via-yellow-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>Javascript</Typography>
                        </Grid>
                            <Grid  item xs={2}>
                                <div style={{height: '25'}}>
                                    <Image src='https://cdn.worldvectorlogo.com/logos/javascript-1.svg' height={25} width={25} alt='javascript logo' />
                                </div>
                            </Grid>
                            <Grid item xs={10}>
                                <Stack sx={{ width: '100%', color: 'grey.500', alignContent:'center' }} spacing={2}>
                                    <LinearProgress variant='determinate' value={87}  color="inherit" sx={{marginBlockStart:'5%', color: "yellow" }} />
                                </Stack>
                            </Grid>
                        </Grid>
                  
                    {/* HTML5 */}

                        <Grid container minWidth={300} sx={{marginInlineEnd: '5vw', bgcolor:blackBeauty[800], padding:'2vh 3vw', borderRadius:'10px'}}>
                        <Grid item xs={12}>
                            <Typography variant='h5' component='div' className='animate-text bg-gradient-to-r from-orange-100 via-yellow-500 to-orange-900 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>HTML5</Typography>
                        </Grid>
                            <Grid item xs={3}>
                                <div style={{height: '25'}}>
                                    <Image src='https://cdn.worldvectorlogo.com/logos/html-1.svg' height={25} width={25} alt='HTML5 logo' />
                                </div>
                            </Grid>
                            <Grid item xs={9}>
                                <Stack sx={{ width: '100%', color: 'grey.500', alignContent:'center' }} spacing={2}>
                                    <LinearProgress color="inherit" variant='determinate' value={93} sx={{marginBlockStart:'5%', color:outlandishOrange[900]}} />
                                </Stack>
                            </Grid>
                        </Grid>

                        {/* CSS  */}
                        <Grid container minWidth={300} sx={{marginInlineEnd: '5vw', bgcolor:blackBeauty[800], padding:'1vh 3vw', borderRadius:'10px'}}>
                        <Grid item xs={12}>
                            <Typography variant='h5' component='div' className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>CSS</Typography>
                        </Grid>
                            <Grid item xs={3}>
                                <div style={{height: '25'}}>
                                    <Image src='https://cdn.worldvectorlogo.com/logos/css-3.svg' height={25} width={25} alt='CSS logo' />
                                </div>
                            </Grid>
                            <Grid item xs={9}>
                                <Stack sx={{ width: '100%', color: 'grey.500', alignContent:'center' }} spacing={2}>
                                    <LinearProgress color="inherit" variant='determinate' value={93} sx={{marginBlockStart:'5%', color:ambitiousBlue[300]}} />
                                </Stack>
                            </Grid>
                        </Grid>

                        {/* Node.js  */}
                        <Grid container minWidth={300}  sx={{marginInlineEnd: '5vw', bgcolor:blackBeauty[800], padding:'1vh 3vw', borderRadius:'10px'}}>
                        <Grid item xs={12}>
                            <Typography variant='h5' component='div' className='animate-text bg-gradient-to-r from-green-500 via-yellow-500 to-green-800 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>NodeJS</Typography>
                        </Grid>
                            <Grid item xs={3}>
                                <div style={{height: '25'}}>
                                    <Image src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' height={25} width={25} alt='NODE javascript logo' />
                                </div>
                            </Grid>
                            <Grid item xs={9}>
                                <Stack sx={{ width: '100%', color: 'grey.500', alignContent:'center' }} spacing={2}>
                                    <LinearProgress color="inherit" variant='determinate' value={77} sx={{marginBlockStart:'5%', color:green[600]}} />
                                </Stack>
                            </Grid>
                        </Grid>

                        {/* MongoDB  */}
                        <Grid container minWidth={300}  sx={{marginInlineEnd: '5vw', bgcolor:blackBeauty[800], padding:'1vh 3vw', borderRadius:'10px'}}>
                        <Grid item xs={12}>
                            <Typography variant='h5' component='div' className='animate-text bg-gradient-to-r from-green-300 via-white-500 to-green-900 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>MongoDB</Typography>
                        </Grid>
                            <Grid item xs={3}>
                                <div style={{height: '25'}}>
                                    <Image src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' height={25} width={25} alt='Mongo DB logo' />
                                </div>
                            </Grid>
                            <Grid item xs={9}>
                                <Stack sx={{ width: '100%', color: 'grey.500', alignContent:'center' }} spacing={2}>
                                    <LinearProgress color="inherit" variant='determinate' value={93} sx={{marginBlockStart:'5%', color:blackBeauty[100]}} />
                                </Stack>
                            </Grid>
                        </Grid>

                        {/* SQL  */}
                        <Grid container minWidth={300}  sx={{marginInlineEnd: '5vw', bgcolor:blackBeauty[800], padding:'1vh 3vw', borderRadius:'10px'}}>
                        <Grid item xs={12}>
                            <Typography variant='h5' component='div' className='animate-text bg-gradient-to-r from-teal-500 via-blue-100 to-blue-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>SQLite</Typography>
                        </Grid>
                            <Grid item xs={3}>
                                <div style={{height: '25'}}>
                                    <Image src='https://cdn.worldvectorlogo.com/logos/sqlite.svg' height={50} width={50} alt='SQL Logo' />
                                </div>
                            </Grid>
                            <Grid item xs={9}>
                                <Stack sx={{ width: '100%', color: 'grey.500', alignContent:'center' }} spacing={2}>
                                    <LinearProgress color="inherit" variant='determinate' value={78} sx={{marginBlockStart:'5%', color:ambitiousBlue[200]}} />
                                </Stack>
                            </Grid>
                        </Grid>

                        {/* Python */}
                        <Grid container minWidth={300}  sx={{marginInlineEnd: '5vw', bgcolor:blackBeauty[800], padding:'1vh 3vw', borderRadius:'10px'}}>
                        <Grid item xs={12}>
                            <Typography variant='h5' component='div' className='animate-text bg-gradient-to-r from-yellow-500 via-blue-500 to-white-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>Python</Typography>
                        </Grid>
                            <Grid item xs={3}>
                                <div style={{height: '25'}}>
                                    <Image src='https://cdn.worldvectorlogo.com/logos/python-5.svg' height={25} width={25} alt='Python Programming Language Logo' />
                                </div>
                            </Grid>
                            <Grid item xs={9}>
                                <Stack sx={{ width: '100%', color: 'grey.500', alignContent:'center' }} spacing={2}>
                                    <LinearProgress color="inherit" variant='determinate' value={83} sx={{marginBlockStart:'5%', color: yellow[500]}} />
                                </Stack>
                            </Grid>
                        </Grid>
                        
                </div>

                    </CardContent>
                </Card>
                                
                <Card sx={{ maxWidth: 345, marginInlineEnd: {xs:'5vw'}, bgcolor: blackBeauty[800] }}>
                    <Typography variant='h4' component='div'  className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black' sx={{fontWeight:'bold', textAlign: 'center'}}>EXPERIENCE</Typography>
                    <CardContent sx={{  maxWidth: '100%', display:'flex', overflowX:'scroll',  bgcolor: blackBeauty[700]}}>
                    
                    
                    <div style={{display:'flex', textAlign:'center'}}>

                    <Box sx={{bgcolor: blackBeauty[800],padding: '2vh', borderRadius: '10px', marginInlineEnd: '2vw'}}>
                          
                     <Grid container  sx={{marginInlineEnd: '5vw', width: '68vw' }}>
                            <Grid item xs={3}>
                                <div style={{paddingBlockStart: '1vh'}}>
                                    <Image src='https://cdn.worldvectorlogo.com/logos/daqri-1.svg' height={50} width={50} alt='DAQRI logo' />
                                </div>
                            </Grid>
                            <Grid item xs={9}>
                         <Typography variant='h6' component='div' sx={{fontWeight: 'bold', textAlign: 'left', color: blackBeauty[100], letterSpacing: '.75vw'}}>
                                    DAQRI <span style={{fontWeight:'normal', marginInlineStart:'1vw'}}>   Jan 18&#39; - Aug 19&#39;</span>
                                </Typography>

                            </Grid>
                            <Grid item xs={12}>
                                <CardActions disableSpacing>
                        <Typography variant='p' component='div' sx={{textAlign: 'right', color:blackBeauty[100], }} style={{fontSize: '1.5rem'}}>Read more...</Typography>
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
                        <CardContent style={{letterSpacing: '.85vw', fontWeight:'100', fontSize: '1.05rem', width: 'inherit'}}  sx={{ height: {xs: '22.5vh'}}}>
                                <Typography variant='p' component='div' sx={{ textAlign: 'left', color: blackBeauty[100], letterSpacing: '2px', fontSize: {xs: '1.05rem'}}}>
                                As a junior software developer at DAQRI, I collaborated with senior developers to design and develop software applications for augmented reality products. I wrote clean and efficient code, tested software components and applications, and documented software to facilitate future maintenance and enhancements. I provided feedback in code reviews, stayed up-to-date with industry trends and emerging technologies, and contributed to a supportive team culture.
                                </Typography>
                        </CardContent>
                    </Collapse>
                            </Grid>
                        </Grid>
                    </Box>
                     

                        
                    <Box sx={{bgcolor: blackBeauty[800],padding: '2vh', borderRadius: '10px', marginInlineEnd: '2vw'}}>
                       
                        <Grid container minWidth={300} sx={{marginInlineEnd: '5vw', width: '68vw'}}>
                            <Grid item xs={3}>
                                <div style={{paddingBlockStart:'1vh'}}>
                                    <Image src='/images/thb.png' height={50} width={50} alt='THB Tianhai Electric North America Logo' />
                                </div>
                            </Grid>
                            <Grid item xs={9}>
                                <Typography variant='p' component='div' sx={{fontWeight: 'bold', textAlign: 'left', color: blackBeauty[100], letterSpacing: '.75vw'}}>
                                    THB <span style={{fontWeight:'normal', marginInlineStart:'1vw'}}>   Aug 14&#39; - Dec 17&#39;</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                            <CardActions  disableSpacing>
                            <Typography variant='p' component='div' sx={{textAlign: 'right', color:blackBeauty[100], }} style={{fontSize: '1.5rem'}}>Read more...</Typography>
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
                                <Typography variant='p' component='div' sx={{ textAlign: 'left', color:blackBeauty[100], letterSpacing: '2px', fontSize: {xs: '1.05rem'}}}>
                                As a successful project manager, I led cross-functional teams and implemented a change management system for engineering and organization-wide processes, improving efficiency and reducing errors. I managed project timelines, budgets, and vendor relationships, conducted risk assessments, monitored progress using project management software, and fostered a culture of collaboration and continuous improvement. I communicated project updates to stakeholders, recruited and trained team members, and continuously evaluated project performance to drive greater efficiency and quality.
                                </Typography>
                                </CardContent>
                            </Collapse>
                                
                            </Grid>
                        </Grid>
                       </Box>
                                                    
                    </div>

                    </CardContent>
                </Card>
              </div>
            </CardContent>
              
                
                
            
            
            </CardContent>
            
          </Card> 
          </main>
        </Layout>

        </>
    )
}