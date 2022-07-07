import React, { Component } from 'react'

export default class ManagerStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: [],
            form: { name: '', phone: '', email: '' },
            isValid: false,
            indexSelected: -1
        }
    }
    handleChange=event=>{
        this.setState(state=>{
            const form=state.form
            form[event.target.value]=event.target.value
            return form
        },()=>{this.checkInvalidForm()})
    }
    checkInvalidForm=()=>{
        const {name,phone,email}=this.state.form
        const value=name&&email&&phone
        this.setState({isValid:value})
    }
    handleSelect = (studentSelected, index) => {
        this.setState({
          form: JSON.parse(JSON.stringify(studentSelected)),
          indexSelected: index
        })
      }
    handleSubmit=()=>{
        if(this.state.isValid){
        }
        if(this.state.indexSelected>-1){
            this.state.studentList.splice(this.state.indexSelected,1)
        }else{
            this.state.studentList.push(this.state.indexSelected)
        }
        this.setState({
            form: { name: '', phone: '', email: '' },
        isValid: false,
        indexSelected: -1})
    }
    handleDelete=(index)=>{

    }
    render() {
        const {studentList,form}=this.state
        return (
            <div>
                <div>
                    <h1>Student List</h1>
                    <div>
                        <label>Name: </label>
                        <input name="name" value={this.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input type="number" name="phone" value={this.phone} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" value={this.email} onChange={this.handleChange} />
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                    <table>
                        <thead>
                            <tr>
                                {/* Tạo Table header Name, Phone, Email, Action */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sử dụng phương thức map() để in danh sách student
                    Tạo button Edit với onClick gọi tới hàm handleSelect
                    Tạo button Delete với onClick gọi tới hàm handleDelete
                */ }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}