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
    import CircularProgress from '@mui/material/CircularProgress';
    import TextField from '@mui/material/TextField';
    import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
    import Radio from '@mui/material/Radio';
    import RadioGroup from '@mui/material/RadioGroup';
    import FormControlLabel from '@mui/material/FormControlLabel';
    import FormControl from '@mui/material/FormControl';
    import FormLabel from '@mui/material/FormLabel';
    import Tooltip from '@mui/material/Tooltip';
    import Fade from '@mui/material/Fade';
    import Zoom from '@mui/material/Zoom';
    import FormGroup from '@mui/material/FormGroup';
    import Checkbox from '@mui/material/Checkbox';
    import webformdata, { brandformdata } from '@/public/form-data/form-data';
    import PropTypes from 'prop-types';
    
    
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
              <Typography variant="caption" component="div" color="text.secondary">
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
    export default function BrandDevForm(){
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [company, setCompany] = useState('');
        const [subject, setSubject] = useState('');
        const [brandName1, setBrandName1] = useState('');
        const [missionStatement2, setMissionStatement2] = useState('');
        const [coreValues3, setCoreValues3] = useState('');
        const [targetAudience4, setTargetAudience4] = useState('');
        const [fingerprint5, setFingerprint5] = useState('');
        const [personality6, setPersonality6] = useState('');
        const [usp7, setUsp7] = useState('');
        const [visualAssociation8, setVisualAssociation8] = useState('');
        const [logoLike10, setLogoLike10] = useState('');
        const [logoDislike9, setLogoDislike9] = useState('');
        const [productsServices11, setProductsServices11] = useState('');
        const [marketingChannels12, setMarketingChannels12] = useState('');
        const [timeline13, setTimeline13] = useState('');
        const [existingBrandAssets14, setExistingBrandAssets14] = useState('');
        const [decisionMaker15, setDecisionMaker15] = useState('');
        const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success''error',
        const [requestError, setRequestError] = useState();
        const [part1, setPart1] = useState(true);
        const [part2, setPart2] = useState(false);
        const [part3, setPart3] = useState(false);
        const [part4, setPart4] = useState(false);
        const [finished, setFinished] = useState(false); 
        const [formButton, setFormButton] = useState('next');
        
        useEffect(() => {
            if (requestStatus === 'success' || requestStatus === 'error') {
                const timer = setTimeout(() => {
                    setRequestStatus(null);
                    setRequestError(null);
                }, 5000);
    
                return () => clearTimeout(timer);
            }
        }, [requestStatus])    
        
        
        const handleSubmit = async (event) => {
            event.preventDefault()
            if (part1) {
                setPart1(!part1);
                setPart2(!part2);
                return
            } else if (part2) {
                setPart2(!part2);
                setPart3(!part3);
                return
            } else if (part3) {
                setPart3(!part3);
                setPart4(!part4);
                setFormButton('submit')
                return
            } if(part4) {
                setPart4(!part4);
                setFinished(!finished);
            }
    
            const formData = {
                        name: name, 
                        email: email, 
                        phone:phone, 
                        company:company, 
                        subject:subject, 
                        brand_name: brandName1, 
                        mission_statement: missionStatement2, 
                        core_values: coreValues3, 
                        target_audience: targetAudience4, 
                        fingerprint: fingerprint5, 
                        personality: personality6, 
                        usp:usp7, 
                        visual_association: visualAssociation8, 
                        logo_dislike: logoDislike9, 
                        logo_like: logoLike10, 
                        products_services: productsServices11, 
                        marketing_channels: marketingChannels12,
                        timeline: timeline13,
                        existing_brand_assets: existingBrandAssets14,
                        decision_maker: decisionMaker15,
    
                    }


            console.log(formData);
            setRequestStatus('pending');    
            event.preventDefault();
            try {// Stop the form from submitting and refreshing the page.
            
    
                // Send the data to the server in JSON format.
                const JSONdata = JSON.stringify({formData})
    
                // API endpoint where we send form data.
                const endpoint = '/api/consultation/web-development'
    
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
            setBrandName1('');
            setMissionStatement2('');
            setCoreValues3('');
            setTargetAudience4('');
            setFingerprint5('');
            setPersonality6('');
            setUsp7('');
            setVisualAssociation8('');
            setLogoLike10('');
            setLogoDislike9('');
            setProductsServices11('');
            setMarketingChannels12('');
            setTimeline13('');
            setExistingBrandAssets14('');
            setDecisionMaker15('');
            console.log(requestStatus)
        } catch(error) {
            setRequestError(error);
            setRequestStatus('error');
            }
            
    
        }
    
        
    
    
    
    
    
        const showButton = () => {
                return    <Button type='submit' variant='outlined' fullWidth> {formButton} </Button> 
            
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

    const [
        {question:brand_name}, 
        {question:mission_statement}, 
        {question:target_audience}, 
        {question:core_values}, 
        {question:fingerprint}, 
        {question:personality}, 
        {question:usp}, 
        {question:visual_association}, 
        {question:logo_dislike}, 
        {question:logo_like}, 
        {question:products_services}, 
        {question:marketing_channels}, 
        {question:timeline}, 
        {question:existing_brand_assets}, 
        {question:decision_maker}
    ] = brandformdata;
    
        return(
            <>
                        <Box sx={{position:'relative', paddingInline: {xs: '8vw', xl:'25vw'}}}>
                        <Card sx={{bgcolor: blackBeauty[800]}} > 
                        <CardContent > 
                        {requestStatus && sendStatus()}
    
    
        <form onSubmit={handleSubmit} > 
    
        {part1 &&
            <>
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
            {showButton()}
           </>
        }
    
    
        {part2 && 
            <>
                <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={brand_name}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
                <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={mission_statement}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
                <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={core_values}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
                <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={target_audience}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
                <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={fingerprint}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />


                        {showButton()}
    
            </>
        }
    
    
        {part3 &&
            <>
                
            <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={personality}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
            <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={usp}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
            <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={visual_association}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
            <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={logo_like}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
            <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={logo_dislike}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
                    {showButton()}
            </>
        }
    
        {part4 &&
            <>
                
            <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={products_services}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
            <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={marketing_channels}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
            <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={timeline}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
            <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={existing_brand_assets}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
            <TextField
                                
                                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]},  
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                                label={decision_maker}
                                variant='outlined' 
                                multiline
                                fullWidth
                                rows={2}
                                />
            {showButton()}
            </>
        }
    
        {finished &&
            <>
                <Typography variant='h3' component='div'  className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'> Thank you for completing the brand consultation, I will reach out shortly to speak with your more about the amazing solutions I can provide!</Typography>
            </>
        }   
    
    
     
    
    
    
    
    
        </form>
    
    
        </CardContent></Card></Box>
            </>
        )
    }