import React from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import {makeStyles} from "@mui/styles"
const useStyles=makeStyles(({
    root:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',  
    },
    outerdiv:{
        backgroundColor:'white',
        width:'10rem',
        height:'10rem',
        borderRadius:'16px',
    },
    
}))
function Button({info}) {
  const { speak } = useSpeechSynthesis();
  const classes=useStyles();
  return (
      <div className={classes.outerdiv} onClick={() => speak({ text: info?.text })}>
        <p style={{color:'rgba(0,0,0,0.8)',fontSize:'.85rem',margin:'0.75rem'}}>{info?.title}</p>    
        <div className={classes.root}>  
            <span style={{marginTop:'-1rem'}} ><p style={{fontSize:'40px'}}>{info?.emoji}</p></span>
        </div>
    </div>
  )
}

export default Button
