import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


function AddDoctor() {
    const [data, setdata] = useState({
        name: "", gender: "", department: "", address: "", email: "", phone: "", image: null,
    })

    const [error, seterror] = useState({})

    function handleform(e) {
        let name, value
        if (e.target.type === 'file') {
            name = 'image';
            value = e.target.files[0];
        } else {

            name = e.target.name
            value = e.target.value
        }
        setdata({ ...data, [name]: value })

    }


    async function tobackend() {

        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }

        const newError = validateForm(data)
        seterror(newError)

        if (Object.keys(newError).length == 0) {
            try {
                const res = await fetch("http://localhost:8001/adddoctor", {
                    method: "post",
                    /*   headers: {
                          "Content-Type": "multipart/form-data"
                      },  */
                    body: formData
                })

                if (res.ok) {
                    toast.success("doctor added successfully ")
                    setdata({
                        name: "", gender: "", department: "", address: "", email: "", phone: "", image: null,
                    })
                }
            } catch (err) {
                console.log(err);

            }
        }

    }

    const validateForm = (fdata) => {

        const errors = {}

        if (!fdata.name) {
            errors.name = 'patient name is requird'
        }
        if (!fdata.email.trim()) {
            errors.email = 'email is requird'
        } else if (!/\S+@\S+\.\S+/.test(fdata.email)) {
            errors.email = 'email is invalid'
        }
        if (!fdata.gender) {
            errors.gender = ' enter gender'
        }

        if (!fdata.department) {
            errors.department = 'department is requird'
        }
        if (!fdata.address) {
            errors.address = 'address is requird'
        }

        if (!fdata.phone) {
            errors.phone = 'phone number is requird'
        } else if (fdata.phone.length < 10) {
            errors.phone = 'enter valid no.'
        }
        return errors
    }
    return (
        <><Style>
            <div className='container' >
                <form><div className='row'>
                    <div className=' col-md-6 form-group'>
                        <label>Doctor's name</label>
                        <input type='text' className='form-control' name='name' value={data.name} onChange={handleform}></input>

                        {error.name &&
                            <span className='error-message'>
                                {error.name}
                            </span>
                        }
                    </div>
                    <div className='col-md-6 form-group'>
                        <label>Gender </label>
                        <select className='form-control' name='gender' value={data.gender} onChange={handleform}>
                            <option></option>
                            <option>female</option>
                            <option>male</option>
                        </select>

                        {error.gender &&
                            <span className='error-message'>
                                {error.gender}
                            </span>
                        }
                    </div>
                </div>
                    <div className='row'>
                        <div className='col-md-6  form-group'>
                            <label>Department</label>
                            <select className='form-control' name='department' value={data.department} onChange={handleform}>
                                <option></option>
                                <option>Dentist</option>
                                <option>Anesthetics</option>
                                <option>General Surgery</option>
                                <option>gynecologist</option>
                                <option>Cardiology</option>
                                <option>Breast Screening</option>
                                <option>Orthopedics</option>
                                <option>Ear,nose,throat (ENT)</option>
                                <option>Neurology</option>
                                <option>Physiotherapy</option>
                            </select>

                            {error.department &&
                                <span className='error-message'>
                                    {error.department}
                                </span>
                            }
                        </div>
                        <div className='col-md-6 form-group'>
                            <label>address</label>
                            <input type='text' className='form-control' name='address' value={data.address} onChange={handleform}></input>

                            {error.address &&
                                <span className='error-message'>
                                    {error.address}
                                </span>
                            }
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 form-group'>
                            <label>email</label>
                            <input type='email' className='form-control' name='email' value={data.email} onChange={handleform}></input>

                            {error.email &&
                                <span className='error-message'>
                                    {error.email}
                                </span>
                            }
                        </div>
                        <div className='col-md-6 form-group'>
                            <label>phone no.</label>
                            <input type='text' className='form-control' name='phone' value={data.phone} onChange={handleform}></input>

                            {error.phone &&
                                <span className='error-message'>
                                    {error.phone}
                                </span>
                            }
                        </div>

                    </div>
                    <div className='col-md-6 form-group'>
                        <label>profile image</label>
                        <input type='file' className='form-control' name='image' onChange={handleform}></input>

                    </div>
                    <button type='button' className='btn btn-success ' onClick={tobackend} >add</button>
                </form>

            </div></Style>
        </>
    )
}
const Style = styled.section`

.container{
   
    width:900px;
    height:500px;
    display:flex;
    align-items:center;
    justify-content:center;
},
.row{
    margin:10px;
    padding:20px;
},
.error-message{
color:red;}
`
export default AddDoctor