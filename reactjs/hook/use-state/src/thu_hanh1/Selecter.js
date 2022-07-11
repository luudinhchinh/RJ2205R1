import React,{useState, useEffect} from "react";

export default function Selecter(){
    const [select,setSelect]=useState(0)
    const [valueSelect,setValueSelect]=useState('')
    useEffect(()=>{
        switch(select){
            case '0': setValueSelect('java');break;
            case '1': setValueSelect('angular');break;
            case '2': setValueSelect('javascript');break;
            case '3': setValueSelect('php');break;
            default:
        }
    },[select])
    const choice=(e)=>{
        setSelect(e.target.value)
    }
    return(
        <div>
            khóa học:
            <section onChange={e=> {
                choice(e)
            }}>
                <option value='0'>java</option>
                <option value='1'>angular</option>
                <option value='2'>javascript</option>
                <option value='3'>php</option>
            </section>
            <h2>your selected: {valueSelect}</h2>
        </div>
    )
}