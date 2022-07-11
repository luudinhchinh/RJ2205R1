import { useState,useEffect } from "react";

export default function AddCount(){
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)

    return(
        <div>
            count: {count1}  <br/>
            <button onClick={()=>setCount1(count1+1)}>add 1</button> <br/>
            count: {count2} <br/>
            <button onClick={()=>setCount2(count2+2)}>add 2</button><br/>
        </div>
    )
}