import { useState } from "react";
import { Formik } from "formik";

export default function HelthyForm(){
    const REGEX = {
        to: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState({});

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.to) {
            errors.to = "Required";
        } else if (!REGEX.to.test(form.to)) {
            errors.to = "Invalid to ";
            console.log("code");
        }
        if (!form.title) {
            errors.title = "Required";
        }
        if (!form.message) {
            errors.message = "Required";
        }
        return errors;
    }

    function handleSubmit() {
        alert("Login in successfully!!!");
    }
    return (
        <div>
            <h1>tờ khai y tế</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                        <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
                            <label>họ tên</label>
                            <input type="text" name="name" value={form.name || ""} onChange={handleChange} />
                            <p className="error">{errors.name}</p>
                        </div>

                        <div className={`custom-input ${errors.nmnd ? "custom-input-error" : ""}`}>
                            <label>sổ hộ chiếu/CMND</label>
                            <input type="cmnd" name="title" value={form.cmnd || ""} onChange={handleChange} />
                            <p className="error">{errors.cmnd}</p>
                        </div>

                        
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}