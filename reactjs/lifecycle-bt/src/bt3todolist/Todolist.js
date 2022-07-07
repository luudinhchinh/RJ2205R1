import { Component } from "react";

export default class Todolist extends Component{
    constructor(props){
        super(props)
        this.state={list:[],item:''}
    }
    handleChange=(event)=>{
        this.setState({item:event.target.value})
    }
    addItem(item,list){
        if(!list.includes(item)){
            list.push(item)
        }
        return list
    }
    handleAddItem=()=>{
       let newList = this.addItem(this.state.item, this.state.list)
       this.setState({
        list: newList,
        item:''
       })
    }
    render(){
        return(
            <div>
                <input onChange={this.handleChange} />
                <button onClick={this.handleAddItem}>add</button>
                <ul>
                    {this.state.list.map(res=>(
                        <li key={res}>
                            {res}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}