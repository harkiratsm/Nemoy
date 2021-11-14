import React from 'react'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom';
const useStyles=makeStyles(({
    root:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'70%',
        marginLeft:'auto',
        marginRight:'auto',
        
    },
    button:{
        borderRadius:'18px',
        backgroundColor:'white',
        color:'rgb(29,155,240)',
        borderColor:'rgb(29,155,240)',
        margin:'2rem 0.5rem',
        width:'150px',
        fontSize:'1.2rem',
        height:'70px'
    }
}))
// emotion , Math , Sports , Weather 
const Button=({text,link})=>{
    const classes=useStyles();
    return (
        <>
            <Link to={link}>
                <button className={classes.button}>{text}</button>
            </Link>     
        </>
    )
}
const data=[
    {name:'Emotion',link:'/'},
    {name:'Maths',link:'/math'},
    {name:'Greetings',link:'/greet'},
    {name:'Text To Speech',link:'/texttospeech'}
]
function Group() {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            {data.map((i,index)=>{
                return <Button text={i.name} link={i.link} />
            })}
        </div>
    )
}

export default Group
