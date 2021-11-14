import React from 'react'
import {makeStyles} from "@mui/styles"
import TwitterCard from './TwitterCard';
const useStyles=makeStyles(({
    root:{
        
        width:'100%',
        height:'70px',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'rgb(245,245,245)',
    },
    heading:{
        fontSize:'2rem',
        fontWeight:'600',
        marginLeft:'1.25rem',
        marginTop:'auto',
        marginBottom:'auto',
    }
}))
function Navbar() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <span className={classes.heading}>Nemoy</span>
            <TwitterCard />
        </div>
    )
}

export default Navbar
