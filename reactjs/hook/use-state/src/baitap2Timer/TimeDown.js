import { useState,useEffect } from "react";

export default function TimeDown(){
    const [time,setTime] = useState(10)
    useEffect(()=>{
        const time = setInterval(()=>{
            setTime(prevState=> prevState-1)
        },1000)
        return ()=>{
            clearInterval(time)
        }
    },[])
    return(
        <div>
            <h1> count down from: {time}</h1>
        </div>
    )
}