
import { Box,  Card, CardActions, CardContent, CardHeader, Grid, 
     Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Layout from '@/components/Layout/Layout'
import { blackBeauty, outlandishOrange } from '@/src/utils/typography/color'
import React, { useState, useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import SendOutlinedIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success''error',
    const [requestError, setRequestError] = useState();

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [requestStatus])

        
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


        const handleSubmit = async (event) => {
            const formData = {
                        name: name, email: email, phone:phone, company:company, subject:subject, message: message
                    }
            console.log(formData);
            setRequestStatus('pending');    
            event.preventDefault();
            try {// Stop the form from submitting and refreshing the page.
            

            // Send the data to the server in JSON format.
            const JSONdata = JSON.stringify({formData})

            // API endpoint where we send form data.
            const endpoint = '/api/contact'

            // Form the request for sending data to the server.
            const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
            }

            // Send the form data to our forms API on Vercel and get a response.
            const response = await fetch(endpoint, options)

            // Get the response data from server as JSON.
            // If server returns the name submitted, that means the form works.
            const result = await response.json()
            
            if(!response.ok) {
                throw new Error(result.message || 'Something went wrong!')
            }
            setRequestStatus('success');
            setEnteredMessage('');
            setEnteredEmail('');
            setEnteredName('');
        } catch(error) {
            setRequestError(error);
            setRequestStatus('error');
            }
            
    
        }
        
        let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message....',
            message: 'Your message is on the way!'
        };
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!'
        };
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError,
        }
    }



    return(
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
            sx={{ position:'absolute', width:'100%', paddingBlockStart: '10vh', paddingInline:'0'}}
            >
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
                    }}>  Contact Me
                </Typography>

                

                </div>


                <div style={{position:'absolute', paddingBlockStart: {xs:'7vh'}, display: 'flex', flexWrap: 'nowrap', whiteSpace: 'nowrap',
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
                    }}>  Let&#39;s Work Together!
                    </Typography>
                </div>



                <Box sx={{paddingInline: {xs: '8vw'}, paddingBlockStart: {xs:'25vh'}}}>
                    <Card sx={{bgcolor: blackBeauty[800]}} >
                    <CardContent >
                        <form onSubmit={handleSubmit}>
                            <Typography variant='p' component='div' sx={{textAlign: 'center', marginBlockEnd: '3vh', fontSize:'1.5em'}} className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'>Currently looking to take on new projects and work!</Typography>
                            <TextField onChange={ e => setName(`${e.target.value}`)} sx={{marginBlockEnd:'2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing:'1.15vw',
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700]
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100]
        }  }}  variant='outlined'  size='small' fullWidth label="Name"     />
                            <TextField onChange={ e => setPhone(`${e.target.value}`)} sx={{marginBlockEnd:'2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing:'1.15vw',
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700]
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100]
        }  }} variant='outlined' size='small' fullWidth label="Phone"  />
                            <TextField onChange={ e => setEmail(`${e.target.value}`)} sx={{marginBlockEnd:'2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing:'1.15vw',
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700]
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100]
        }  }} variant='outlined' size='small' fullWidth label="Email" color='secondary' />
                            <TextField onChange={ e => setCompany(`${e.target.value}`)} sx={{marginBlockEnd:'2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing:'1.15vw',
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700]
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100]
        }  }} variant='outlined' size='small' fullWidth label="Company" color='secondary' />
                            <TextField onChange={ e => setSubject(`${e.target.value}`)} sx={{marginBlockEnd:'2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing:'1.15vw',
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700]
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100]
        }  }} variant='outlined' size='small' fullWidth label="Subject" color='secondary' />
                        <TextField
                         onChange={ e => setMessage()} 
                        sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing:'1.15vw',
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700]
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100]
        }  }}
                        label="Message"
                        variant='outlined' 
                        multiline
                        fullWidth
                        rows={4}
                        />
                        <div>
                            <Button variant="outlined" type='submit' sx={{color: blackBeauty[100], borderColor: blackBeauty[100]}} fullWidth ><SendOutlinedIcon /></Button>
                        </div>
                        </form> 

                           

                    </CardContent>
                </Card>
                </Box>
                
                
                
                                
               
                
            
            
            </CardContent>
          </Card> 
            </main>
            </Layout>
        </>
    )
}