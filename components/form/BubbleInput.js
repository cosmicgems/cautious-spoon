import * as React from 'react';
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
import { TextField } from '@mui/material';
import webformdata from '@/public/form-data/form-data';

export default function FormMaker(){

    const BubbleInput = (props) => {
        
    const answerguide= props.answerguide;
    const answeroption = props.answeroption;


        return<FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{props.question}</FormLabel>
      <RadioGroup
        aria-labelledby="`Possible answers to the question ${props.question}`"
        defaultValue=""
        name="radio-buttons-group"
      >
      {map.answeroption((answeroptions) => {
        return <FormControlLabel value={answeroptions} control={<Radio />} label={answeroptions} />
      })}
       
        
        
      </RadioGroup>
    </FormControl>
    };

    const Nike = (props) => {
        return <FormGroup>
            <Tooltip TransitionComponent={Zoom} title={props.answerguide}>
                <FormLabel id="demo-radio-buttons-group-label">{props.question}</FormLabel>
                <FormControlLabel control={<Checkbox defaultChecked />} label={props.answeroption} />
            </Tooltip>
        </FormGroup>
    }

    const FreeText = () => {
        return  <FormGroup>
            <Tooltip TransitionComponent={Zoom} title={answerguide}> 
                <FormLabel id="demo-radio-buttons-group-label">{question}</FormLabel>
                <TextField value={answer} rows={3} />
            </Tooltip>
        </FormGroup>
    }


    return (
        <>
            {webformdata.map((q)=>{
                if (q.question === 'bubble') {
                    return <div key={q.question}>{BubbleInput()}</div>
                }
            })}
        </>
    )
}