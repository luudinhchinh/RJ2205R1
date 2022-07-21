import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import './App.css';
import TextField from './TextField';
import Checkbox from './Checkbox';

export default function HelthyForm() {
    const SEX_LIST = [{ label: 'Nam', value: 'male' }, { label: 'Nữ', value: 'female' }]
    const [form, setForm] = useState({})
    // handle change
    const handleChange = function (event) {
        let value = (
            event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value
        )
        setForm({ ...form, [event.target.name]: value })
    }

    // handle validate
    const validate = function (values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Name is required'
        }
        if (!values.number) {
            errors.number = 'Phone Number is required'
        }
        return errors;
    }

    // handle submit
    const handleSubmit = function (values) {
        alert(values)
    }

    return (
        <div className='App'>
            <Formik
                initialValues={form}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {
                    formik => (
                        <div>
                            <h1>Tờ Khai Y Tế</h1>
                            <Form onSubmit={formik.handleSubmit}>
                                <TextField onChange={formik.handleChange} label={"Họ Tên"} name="name" />
                                <TextField onChange={formik.handleChange} label={"CCCD"} name="cccd" />
                                <TextField onChange={formik.handleChange} label={"Năm sinh"} name="dateOfBirth" type={'date'} />
                                <TextField onChange={formik.handleChange} label={"Quốc tịch"} name="nationality" />
                                <TextField onChange={formik.handleChange} label={"Công ty làm việc"} name="placeOfWork" />
                                <TextField onChange={formik.handleChange} label={"Bộ Phận làm việc"} name="boPhanLamViec" />
                                <Checkbox onChange={formik.handleChange} label={"Có thẻ BHYT"} name="coTheBHYT" />
                                <h2>Địa chỉ liên lạc tại Việt Nam</h2>
                                <TextField onChange={formik.handleChange} label={"Tỉnh thành"} name="tinhThanh" />
                                <TextField onChange={formik.handleChange} label={"Quận /huyện"} name="quanHuyen" />
                                <TextField onChange={formik.handleChange} label={"Phường /xã"} name="phuongXa" />
                                <TextField onChange={formik.handleChange} label={"Số nhà, phố, tổ dân phố /thôn /đội"} name="soNha" />
                                <TextField onChange={formik.handleChange} label={"Điện thoại"} name="phone" />
                                <TextField onChange={formik.handleChange} label={"Email"} name="email" type={'email'} />
                                <h3>Trong vòng 14 ngày qua, anh chị có đến quốc gia /vùng lãnh thổ nào?</h3>
                                <TextField onChange={formik.handleChange} label={""} name="quocGiaDiQua" type={'text'} />
                                <h3>Trong vòng 14 ngày qua, anh/chị có thấy dấu hiệu nào sau đây không?</h3>
                                <Checkbox label={'Sốt'} name={'fever'} />
                                <Checkbox label={'Ho'} name={'Cough'} />
                                <Checkbox label={'Khó thở'} name={'khoTho'} />
                                <Checkbox label={'Viêm phổi'} name={'vienPhoi'} />
                                <Checkbox label={'Đau họng'} name={'soreThroat'} />
                                <Checkbox label={'Mệt mỏi'} name={'tired'} />
                                <Checkbox label={'Nóng'} name={'hot'} />

                                <h3>Anh/chị có tiếp xúc với?</h3>
                                <Checkbox label={'Người bệnh hoặc nghi ngờ, mắc bệnh covid-19'} name={'nguoiBenh'} />
                                <Checkbox label={'Người từ nước có bệnh covid-19'} name={'nguoiBenh'} />
                                <Checkbox label={'Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)'} name={'nguoiBenh'} />

                                <button type="submit">Submit</button>
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </div>
    )
}