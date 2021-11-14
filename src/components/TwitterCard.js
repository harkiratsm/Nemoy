import React from 'react'
import {makeStyles} from "@mui/styles"
import Paper from "@mui/material/Paper"
const useStyles=makeStyles(({
    root:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        marginTop:'auto',
        marginBottom:'auto',
        marginRight:'2rem',
        borderRadius:'18px',
        
    },
    img1:{
        borderRadius:'50%',
        border:'2px solid rgb(41,171,226)',
        height:'40px',
    },
    img2:{
        borderRadius:'50%',
        height:'15px'
    },
    innerdiv:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'1rem'
        
    },
    font1:{
        fontSize:'1.05rem',
        fontWeight:'600',
    },
    font2:{
        fontSize:'.95rem',
        color:'rgb(41,171,226)'
    }
    
}))
function TwitterCard() {
    const classes=useStyles()
    return (
        <Paper className={classes.root} elevation={2}>
            
                
                <img src="https://avatars.githubusercontent.com/u/71957674?v=4" className={classes.img1} alt="profilepic" />
                <div className={classes.innerdiv}>
                    <span className={classes.font1}>Made By Harkirat</span>
                    <span className={classes.font2}>Follow on Twitter <img className={classes.img2} src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo-700x394.png" alt="twitter"  /></span>
                </div>
                
            
        </Paper>
    )
}

export default TwitterCard
