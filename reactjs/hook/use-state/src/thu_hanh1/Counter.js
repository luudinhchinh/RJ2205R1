import React,{useState} from 'react'
 export default function Counter(){
    const [num,setNum]=useState(0)
    const handleClick=()=>{
        setNum(num+1)
    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={handleClick}>click</button>
        </div>
    )
 }