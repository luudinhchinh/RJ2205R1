import { Component } from "react";
import Text from "./Text";

export default class BThandleLogic extends Component{
    constructor(props){
        super(props)
        this.state={isExpan:false,title:'xem giới thiệu'}
    }
    handleClick=()=>{
        if(this.state.isExpan==false){
            this.setState({isExpan:true,title:'đóng giới thiệu'})
        }else{
            this.setState({isExpan:false,title:'xem giới thiệu'})
        }

    }
    render(){
        let comp 
        if(this.state.isExpan){
            comp=<Text/>
        }
        return(
            <div>
                <h1>condition rendering</h1>
                <button onClick={this.handleClick}>{this.state.title}</button>
                <span>{comp}</span>
            </div>
        )
    }
}