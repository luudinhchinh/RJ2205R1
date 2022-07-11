import { useEffect, useState } from "react";

export default function SelectCar(){
    const [selectedCar,setSelectedCar]=useState('')
    const [selectedColor,setSelectedColor]=useState('')
    const [resultCar,setResultCar] = useState('')
    const [resultColor,setResultColor] = useState('')
    useEffect(()=>{
        console.log('selected: ' + selectedCar)
        switch(selectedCar){
            case 'ronroll': setResultCar('ronsroll');break;
            case 'mercedes': setResultCar('mercedes');break;
            case 'bws': setResultCar('bws');break;
            case 'audi': setResultCar('audi');break;
            case 'honda': setResultCar('honda');break;
            default : 
        }
    },[selectedCar])
    useEffect(()=>{
        console.log('selected: ' + selectedColor)
        switch(selectedColor){
            case 'green': setResultColor('green');break;
            case 'red': setResultColor('red');break;
            case 'yellow': setResultColor('yellow');break;
            case 'organe': setResultColor('organe');break;
            default:
        }
    },[selectedColor])
   
    return (
        <div>
            select a car: 
            <select onChange={e=>{setSelectedCar(e.target.value)}}>
                <option value={'ronroll'}>ronsroll</option>
                <option value={'mercedes'}>mercedes</option>
                <option value={'bws'}>bws</option>
                <option value={'audi'}>audi</option>
                <option value={'honda'}> honda</option>
            </select> <br/>
            select a color:
            <select onChange={e=>{setSelectedColor(e.target.value)}}> 
                <option value={'green'}>green</option>
                <option value={'red'}>red</option>
                <option value={'yellow'}>yellow</option>
                <option value={'organe'}>organe</option>
            </select> <br/>
            <span> you selected a {resultCar} - {resultColor}</span>
        </div>
    )
}