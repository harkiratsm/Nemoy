import React from 'react'
import Button from './Button'
const Div =({info,emoji})=>{
    return (
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:'13px 0'}}>
            {emoji.map((i,index)=>{
                if(index>=info.a&&index<info.b){
                    return <Button info={i} key={index}/>
                }
                else{
                    return null;
                }
                
            })}
        </div>
    )
}
function Main({info}) {
    const limits=[{a:0,b:5},{a:5,b:10},{a:10,b:15},{a:15,b:20}]
    return (
        <div style={{width:'70%',marginLeft:'auto',marginRight:'auto'}}>
            {limits.map((i,index)=>{
                return <Div info={i} key={index} emoji={info}/>
            })}
            
        </div>
    )
}

export default Main
