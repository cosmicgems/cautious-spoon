
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
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
            }, 5000);

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
            
            
            setRequestStatus('success');
            setName('');
            setPhone('');
            setEmail('');
            setCompany('');
            setSubject('');
            setMessage('');
            console.log(requestStatus)
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

    function sendStatus(){
        if (requestStatus === 'success') {
            return(
                <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="success">
            Message successfully sent!
            </Alert>
        </Stack>
            )
        }
        if (requestStatus === 'error') {
            return(
                
                <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="error">
            Sorry, there was an error. Try again.
            </Alert>
        </Stack>
            )
        }
    }



    return(
        <>
            <Layout>
            
            <Card  sx={{paddingBlock: '10vh', marginBlock:'0', bgcolor: 'transparent'}}> 
            
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
                    }}>  Let&#39;s Work Together!
                    </Typography>
                </div>
            <CardContent
            sx={{  width:'100%', paddingBlockStart: '10vh', paddingInline:'0',}}
            >



      <Box sx={{position:'relative', paddingInline: {xs: '8vw', xl:'25vw'}}}>
                    <Card sx={{bgcolor: blackBeauty[800]}} >
                    <CardContent >
                    {requestStatus && sendStatus()}
                        <form onSubmit={handleSubmit}>
                            <Typography variant='p' component='div' sx={{textAlign: 'center', marginBlockEnd: '3vh', fontSize:'1.5em'}} className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'>Currently looking to take on new projects and work!</Typography>
                            <TextField onChange={ e => setName(`${e.target.value}`)} value={name} sx={{marginBlockEnd:'2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'}, 
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700],  letterSpacing: 'normal',
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
        }  }}  variant='outlined'  size='small' fullWidth label="Name"     />
                            <TextField onChange={ e => setPhone(`${e.target.value}`)} value={phone} sx={{marginBlockEnd:'2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  letterSpacing: {xs: '1vw'}, 
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700],  letterSpacing: 'normal',
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
        }  }} variant='outlined' size='small' fullWidth label="Phone"  />
                            <TextField onChange={ e => setEmail(`${e.target.value}`)} value={email} sx={{marginBlockEnd:'2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'},  
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700],  letterSpacing: 'normal',
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
        }  }} variant='outlined' size='small' fullWidth label="Email" color='secondary' />
                            <TextField onChange={ e => setCompany(`${e.target.value}`)} value={company} sx={{marginBlockEnd:'2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'},  
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700],  letterSpacing: 'normal',
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
        }  }} variant='outlined' size='small' fullWidth label="Company" color='secondary' />
                            <TextField onChange={ e => setSubject(`${e.target.value}`)} value={subject} sx={{marginBlockEnd:'2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'}, 
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700],  letterSpacing: 'normal',
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
        }  }} variant='outlined' size='small' fullWidth label="Subject" color='secondary' />
                        <TextField
                         onChange={ e => setMessage()} value={message}  
                        sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'}, 
        "& .MuiFormLabel-root.Mui-focused": {
            color: outlandishOrange[700],  letterSpacing: 'normal',
        }, "& .MuiInputBase-root": {
            color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
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
          
            </Layout>
        </>
    )
}