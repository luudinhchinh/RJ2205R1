import { useState } from "react";
import { Formik } from "formik";

export default function Library(){
    const [books,setBooks]=useState([])
    const [form,setForm]=useState({})
    const [indexSelected,setIndexSelected]=useState(-1)

    
    return (
        <div>
            <h1>Library</h1>
            <div>
                <label>tiêu đề</label>
                <input type='text' onChange={(e)=>{setBooks(e.target.value)}} />
            </div>
            <div>
                <label>số lượng</label>
                <input type='number' onChange={(e)=>{setIndexSelected(e.target.value)}} />
            </div>
            <button>submit</button>
            <div>
                <table>
                    <tr>
                        <th>title</th>
                        <th>number</th>
                        <th>action</th>
                    </tr>
                    <tr>
                        {books.map((book)=>(
                            <td>{book}</td>
                        ))}
                        <td>{indexSelected}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}