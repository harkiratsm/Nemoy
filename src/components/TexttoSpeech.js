import React ,{useState} from 'react'
import {makeStyles} from "@mui/styles"
import TextField from '@mui/material/TextField';
import { useSpeechSynthesis } from 'react-speech-kit';
import { Button } from '@mui/material';
const useStyles=makeStyles(({
    root:{
        width:"40%",
        marginLeft:'auto',
        marginRight:'auto',
    },
    innerdiv:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    img:{
        height:'22px',

    },
   
}))
function TexttoSpeech() {
    const classes=useStyles();
    const { speak } = useSpeechSynthesis();
    const [text,setText] = useState("");
    const handle=(e)=>{
        setText(e.target.value);
        console.log(text);
    }
    return (
        <div className={classes.root}>
            <div className={classes.innerdiv}>
                <TextField
                required
                onChange={(e)=>{handle(e)}}
                id="outlined-required"
                label="Enter the Text "
                style={{width:'100%',marginBottom:'2.25rem'}}
                />
                <Button style={{width:'50%'}} onClick={() => speak({ text: text })} variant="contained" endIcon={<img className={classes.img} src="https://www.pinclipart.com/picdir/big/43-437157_clip-art-free-library-voice-clipart-low-voice.png" alt="img" />}>Click Me</Button> 
            </div>
        </div>
    )
}

export default TexttoSpeech
