import { useState } from "react";
import { Formik } from "formik";

export default function Library() {
    const [books, setBooks] = useState([])
    const [form, setForm] = useState({})
    const [indexSelected, setIndexSelected] = useState(-1)

    const handleSubmit = ()=>{
        setBooks([...books])
    }
    return (
        <div>
            <h1>Library</h1>
            <div>
                <label>tiêu đề</label>
                <input type='text' onChange={(e) => { setBooks(e.target.value) }} />
            </div>
            <div>
                <label>số lượng</label>
                <input type='number' onChange={(e) => { setBooks(e.target.value) }} />
            </div>
            <button onClick={handleSubmit}>submit</button>
            <div>
                <table>
                    <tr>
                        <th>title</th>
                        <th>number</th>
                        <th>action</th>
                    </tr>

                    {books.map((book) => (
                        <tr>
                            <td>{book.title}</td>
                            <td>{book.number}</td>
                            <td>{book.action}</td>
                        </tr>
                    ))}

                </table>
            </div>
        </div>
    )
}