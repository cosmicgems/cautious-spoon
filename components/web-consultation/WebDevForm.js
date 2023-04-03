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
import {webformdata} from '@/public/form-data/form-data';
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
export default function WebDevForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [subject, setSubject] = useState('');
    const [primaryGoal1, setPrimaryGoal1] = useState('');
    const [userActions2, setUserActions2] = useState('');
    const [topTask3, setTopTask3] = useState('');
    const [targetAudience4, setTargetAudience4] = useState('');
    const [contentType5, setContentType5] = useState('');
    const [muse6, setMuse6] = useState('');
    const [dislike7, setDislike7 ] = useState('');
    const [measureSuccess8, setMeasureSuccess8] = useState([]);
    const [budget9, setBudget9] = useState('');
    const [timeline10, setTimeline10] = useState('');
    const [existingBrandGuide11, setExistingBrandGuide11] = useState('');
    const [specificFeatFunc12, setSpecificFeatFunc12] = useState('');
    const [contentCreation13, setContentCreation13] = useState('');
    const [seo14, setSeo14] = useState('');
    const [maintenance15, setMaintenance15] = useState('');
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
                    primary_goal: primaryGoal1, 
                    user_actions: userActions2, 
                    top_task: topTask3, 
                    target_audience: targetAudience4, 
                    content_type: contentType5, 
                    websites_inspiration: muse6, 
                    steer_away:dislike7, 
                    success_measurement:measureSuccess8, 
                    budget_amount: budget9, 
                    deadline: timeline10, 
                    brand_guidelines: existingBrandGuide11, 
                    features_functions: specificFeatFunc12,
                    content_creation: contentCreation13,
                    seo_needs: seo14,
                    maintenance_needs: maintenance15,

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
        setPrimaryGoal1('');
        setUserActions2('');
        setTopTask3('');
        setTargetAudience4('');
        setContentType5('');
        setMuse6('');
        setDislike7('');
        setMeasureSuccess8('');
        setBudget9('');
        setTimeline10('');
        setExistingBrandGuide11('');
        setSpecificFeatFunc12('');
        setContentCreation13('');
        setSeo14('');
        setMaintenance15('');
        console.log(requestStatus)
    } catch(error) {
        setRequestError(error);
        setRequestStatus('error');
        }
        

    }

    const [primaryGoal, userActions, topTask, targetAudience, contentType, muse, dislike, measureSuccess, budget, timeline, existingBrandGuide, specificFeatFunc, contentCreation, seo, maintenance,] =webformdata;





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
const deleteByValueContent = value => {
    setContentType5(oldValues => {

      return oldValues.replace(option => option !== value)
    })
  }

const handleMeasure = (event) => {
    if (event.target.checked) {
        measureSuccess.push(event.target.value);
    } 
    if (!event.target.checked) {
        
    }
}



const [checkboxValues, setCheckboxValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
        setCheckboxValues([...checkboxValues, value]);
        if (event.target.id === 'content-type') {
            setContentType5([...checkboxValues, value])
            console.log(contentType5);
        }
        if (event.target.id === 'measure-success') {
            setMeasureSuccess8([...checkboxValues, value])
            console.log(measureSuccess8);
        }
        if (event.target.id === 'specific-feat-func') {
            setSpecificFeatFunc12([...checkboxValues, value])
            console.log(specificFeatFunc12);
        }
    } else {
        setCheckboxValues(checkboxValues.filter((v) => v !== value));
        if (event.target.id === 'content-type') {
            setContentType5(contentType5.filter((v) => v !== value));
        }
        if (event.target.id === 'measure-success') {
            setMeasureSuccess8(measureSuccess8.filter((v) => v !== value));
        }
        if (event.target.id === 'specific-feat-func') {
            setSpecificFeatFunc12(specificFeatFunc12.filter((v) => v !== value));
        }
    }
    console.log(contentType5, measureSuccess8, specificFeatFunc12);
  };



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
            <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{primaryGoal.question}</FormLabel>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        >
        {primaryGoal.answeroptions.map((option, i)=> {
        const helpertext = primaryGoal.answerguide[i];
        return <Tooltip key={option} TransitionComponent={Zoom} title={helpertext}> 
        <FormControlLabel value={option} control={<Radio />} label={option} />
        </Tooltip>


        })}

        </RadioGroup>
                    </FormControl>

            <TextField
                            
                            sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'}, 
            "& .MuiFormLabel-root.Mui-focused": {
                color: outlandishOrange[700],  letterSpacing: 'normal',
            }, "& .MuiInputBase-root": {
                color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
            }  }}
                            label={userActions.question}
                            variant='outlined' 
                            multiline
                            fullWidth
                            rows={2}
                            />

            <TextField
                            
                            sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'}, 
            "& .MuiFormLabel-root.Mui-focused": {
                color: outlandishOrange[700],  letterSpacing: 'normal',
            }, "& .MuiInputBase-root": {
                color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
            }  }}
                            label={userActions.question}
                            variant='outlined' 
                            multiline
                            fullWidth
                            rows={2}
                            />

            <TextField
                            
                            sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'}, 
            "& .MuiFormLabel-root.Mui-focused": {
                color: outlandishOrange[700],  letterSpacing: 'normal',
            }, "& .MuiInputBase-root": {
                color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
            }  }}
                            label={targetAudience.question}
                            variant='outlined' 
                            multiline
                            fullWidth
                            rows={2}
                            />

            <FormGroup>
                        
                            <FormLabel id="demo-radio-buttons-group-label">{contentType.question}</FormLabel>

                            {contentType.answeroptions.map((option, i)=> {
                    const helpertext = contentType.answerguide[i];
                                return (
                                    <Tooltip key={option} TransitionComponent={Zoom} title={helpertext}>
                                        <FormControlLabel control={<Checkbox id='content-type' onChange={handleCheckboxChange} value={option}  />} label={option} />
                                    </Tooltip>
                                )
                            })}
                            

                        
                    </FormGroup>    
                    {showButton()}

        </>
    }


    {part3 &&
        <>
            <TextField
                  
                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'}, 
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: outlandishOrange[700],  letterSpacing: 'normal',
                    }, "& .MuiInputBase-root": {
                        color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                    }  }}
                    label={muse.question}
                    variant='outlined' 
                    multiline
                    fullWidth
                    rows={2}
                />     

            <TextField
                  
                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'}, 
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                label={dislike.question}
                variant='outlined' 
                multiline
                fullWidth
                rows={2}
                />  

            <FormGroup>
            
                <FormLabel id="demo-radio-buttons-group-label">{measureSuccess.question}</FormLabel>

                {measureSuccess.answeroptions.map((option, i)=> {
        const helpertext = measureSuccess.answerguide[i];
                    return (
                        <Tooltip key={option} TransitionComponent={Zoom} title={helpertext}>
                            <FormControlLabel   control={<Checkbox value={option} id='measure-success' onChange={handleCheckboxChange} />} label={option} />
                        </Tooltip>
                    )
                })}
                

            
            </FormGroup>    

        <TextField
                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'}, 
"& .MuiFormLabel-root.Mui-focused": {
    color: outlandishOrange[700],  letterSpacing: 'normal',
}, "& .MuiInputBase-root": {
    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
}  }}
                label={budget.question}
                variant='outlined' 
                multiline
                fullWidth
                rows={2}
                />

        <TextField
                  
                sx={{marginBlockEnd: '2vh',"& .MuiFormLabel-root": {color: blackBeauty[100]}, letterSpacing: {xs: '1vw'}, 
                "& .MuiFormLabel-root.Mui-focused": {
                    color: outlandishOrange[700],  letterSpacing: 'normal',
                }, "& .MuiInputBase-root": {
                    color: blackBeauty[100], fontFamily: 'Bellota Text', letterSpacing: 'normal', 
                }  }}
                label={timeline.question}
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
            
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{existingBrandGuide.question}</FormLabel>
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            >
            {existingBrandGuide.answeroptions.map((option, i)=> {
            const helpertext = existingBrandGuide.answerguide[i];
            return <Tooltip key={option} TransitionComponent={Zoom} title={helpertext}> 
            <FormControlLabel value={option} control={<Radio />} label={option} />
            </Tooltip>


            })}

            </RadioGroup>
            </FormControl>

            <FormGroup>
                
                <FormLabel id="demo-radio-buttons-group-label">{specificFeatFunc.question}</FormLabel>

                {specificFeatFunc.answeroptions.map((option, i)=> {
        const helpertext = specificFeatFunc.answerguide[i];
                    return (
                        <Tooltip key={option} TransitionComponent={Zoom} title={helpertext}>
                            <FormControlLabel control={<Checkbox  value={option} id='specific-feat-func' onChange={handleCheckboxChange}  />} label={option} />
                        </Tooltip>
                    )
                })}
                

            
            </FormGroup>    

            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{contentCreation.question}</FormLabel>
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            >
            {contentCreation.answeroptions.map((option, i)=> {
            const helpertext = contentCreation.answerguide[i];
            return <Tooltip key={option} TransitionComponent={Zoom} title={helpertext}> 
            <FormControlLabel value={option} control={<Radio />} label={option} />
            </Tooltip>
            })}

        </RadioGroup>
        </FormControl>

        <FormControl fullWidth>
        <FormLabel id="demo-radio-buttons-group-label">{seo.question}</FormLabel>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        >
        {seo.answeroptions.map((option, i)=> {
        const helpertext = seo.answerguide[i];
        return <Tooltip key={option} TransitionComponent={Zoom} title={helpertext}> 
        <FormControlLabel value={option} control={<Radio />} label={option} />
        </Tooltip>


        })}

        </RadioGroup>
        </FormControl>

        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">{maintenance.question}</FormLabel>
        <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        >
        {maintenance.answeroptions.map((option, i)=> {
        const helpertext = maintenance.answerguide[i];
        return <Tooltip key={option} TransitionComponent={Zoom} title={helpertext}> 
        <FormControlLabel value={option} control={<Radio />} label={option} />
        </Tooltip>


        })}

        </RadioGroup>
        </FormControl>
        {showButton()}
        </>
    }

    {finished &&
        <>
            <Typography variant='h3' component='div'  className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black'> Thank you for completing the form! I will reach out with in 24 hours after analyzing the requirements.</Typography>
        </>
    }   


 





    </form>


    </CardContent></Card></Box>
        </>
    )
}