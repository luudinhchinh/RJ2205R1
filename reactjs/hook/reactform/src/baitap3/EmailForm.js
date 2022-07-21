import { useState } from "react";
import { Formik } from "formik";

export default function EmailForm() {
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
            <h1>contact form</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>

                        <div className={`custom-input ${errors.to ? "custom-input-error" : ""}`}>
                            <label>to</label>
                            <input type="text" name="to" value={form.to || ""} onChange={handleChange} />
                            <p className="error">{errors.name}</p>
                        </div>

                        <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
                            <label>title</label>
                            <input type="text" name="title" value={form.title || ""} onChange={handleChange} />
                            <p className="error">{errors.email}</p>
                        </div>

                        <div className={`custom-input ${errors.message ? "custom-input-error" : ""}`} >
                            <label>message</label>
                            <textarea name="message"/>
                            <p className="error">{errors.message}</p>
                        </div>
                        <div>
                            <input type='file' />
                        </div>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}