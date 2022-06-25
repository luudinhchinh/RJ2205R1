import Input from "./Input";
import Button from "./Button";
import{Component}from "react"
// console.log(Component)

export default class Caculater extends Component{
    constructor(){
        super();
        this.state = {firtNumber:0, secondNumber:0, operator: '', displayValue:0}
    }
    calculate = (operator)=>{
        switch(operator){
            case '+': this.setState({displayValue: parseFloat(this.state.firtNumber) + parseFloat(this.state.secondNumber)}); break;
            case '-': this.setState({displayValue: parseFloat(this.state.firtNumber) - parseFloat(this.state.secondNumber)}); break;
            case '*': this.setState({displayValue: parseFloat(this.state.firtNumber) * parseFloat(this.state.secondNumber)}); break;
            case '/': this.setState({displayValue: parseFloat(this.state.firtNumber) / parseFloat(this.state.secondNumber)}); break;
            default: break;
        }
    }
    render(){
        return(
            <div>
                <Input type='number' className='' onKeyUp={e=>{this.setState({firtNumber:e.target.value})}} />
                <br/>
                <br/>
                <Input type='number' className='ab' onKeyUp={e=>{this.setState({secondNumber:e.target.value})}} />
                <br/>
                <br/>
                <h3>result: {this.state.displayValue}</h3>
                <Button onClick={e=>{this.calculate('+')}} label='+' />
                <Button onClick={e=>{this.calculate('-')}} label='-' />
                <Button onClick={e=>{this.calculate('*')}} label='*' />
                <Button onClick={e=>{this.calculate('/')}} label='/' />
            </div>
        )
    }
}