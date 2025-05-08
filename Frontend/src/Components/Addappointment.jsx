import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'
import { json } from 'react-router-dom'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

   
function Addappointment() {



    const [data, setdata] = useState({
        pname: "", dob: "", department: "", date: "", email: "", drname: "", time: "", number: ""
    })

    const [error, seterror] = useState({})

    const handleinputs = (e) => {
        let name, value

        name = e.target.name
        value = e.target.value
        setdata({ ...data, [name]: value })

    }
    console.log(data);
    console.log(data.pname);



    const sendtobackend = async (e) => {
        e.preventDefault()

        const newError = validateForm(data)
        seterror(newError)

        if (Object.keys(newError).length == 0) {

            const res = await fetch("http://localhost:8001/appointmentdata", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data })
            })
            console.log(res.json());
            if(res.ok){
            toast.success("your appointment has been  successfully booked!")
            setdata({
                pname: "",
                dob: "",
                department: "",
                date: "",
                email: "",
                drname: "",
                time: "",
                number: "",
              });
            }
           
        }
        else {
            toast.error("form submission failed due to validation errrs")
        }
    }

    const validateForm = (fdata) => {

        const errors = {}

        if (!fdata.pname) {
            errors.pname = 'patient name is requird'
        }
        if (!fdata.email.trim()) {
            errors.email = 'email is requird'
        } else if (!/\S+@\S+\.\S+/.test(fdata.email)) {
            errors.email = 'email is invalid'
        }
        if (!fdata.dob) {
            errors.dob = ' DOB is requird'
        }
        if (!fdata.department) {
            errors.department = 'department is requird'
        }
        if (!fdata.date) {
            errors.date = ' enter date'
        }
        if (!fdata.drname) {
            errors.drname = 'enter dr.name '
        }
        if (!fdata.time) {
            errors.time = 'enter time'
        }
        if (!fdata.number) {
            errors.number = 'phone number is requird'
        } else if (fdata.number.length < 10) {
            errors.number = 'enter valid no.'
        }
        return errors
    }

    return (
        <><Style>
            <h2 className='text-center'>Add Appointment</h2>
            <form className='container' onSubmit={sendtobackend}>
                <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                        <label>Patient name</label>
                        <input type='text' className='form-control' value={data.pname} name='pname' onChange={handleinputs} ></input>

                        {error.pname &&
                            <span className='error-message'>
                                {error.pname}
                            </span>
                        }
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <label>Patient DOB</label>
                        <input type='date' className='form-control' value={data.dob} name='dob' onChange={handleinputs} ></input>

                        {error.dob &&
                            <span className='error-message'>
                                {error.dob}
                            </span>
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                        <label>Department</label>
                        <select className='form-control' value={data.department} name='department' onChange={handleinputs} >
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
                    <div className='col-lg-6 col-md-6'>
                        <label>Date</label>
                        <input type='date' className='form-control' value={data.date} name='date' onChange={handleinputs} ></input>

                        {error.date &&
                            <span className='error-message'>
                                {error.date}
                            </span>
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                        <label>Patient email</label>
                        <input type='email' className='form-control' value={data.email} name='email' onChange={handleinputs} ></input>

                        {error.email &&
                            <span className='error-message'>
                                {error.email}
                            </span>
                        }
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <label>Doctor name</label>
                        <input type='text' className='form-control' value={data.drname} name='drname' onChange={handleinputs} ></input>

                        {error.drname &&
                            <span className='error-message'>
                                {error.drname}
                            </span>
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                        <label>Time</label>
                        <input type='time' className='form-control' value={data.time} name='time' onChange={handleinputs} ></input>

                        {error.time &&
                            <span className='error-message'>
                                {error.time}
                            </span>
                        }
                    </div>
                    <div className='col-lg-6 col-md-6'>
                        <label> Patient Phone number</label>
                        <input type='number' className='form-control' value={data.number} name='number' onChange={handleinputs} ></input>

                        {error.number &&
                            <span className='error-message'>
                                {error.number}
                            </span>
                        }
                    </div>
                </div>
                <button type='submit' className='btn btn-info'  >Create Appointment</button>
            </form>
        </Style>
        </>
    )
}

const Style = styled.section`


button{
    border-radius:20px;
},
.row{
    margin:40px;
},
h2{
    margin:20px;
},
form{
    background-color:beige;
    padding:20px;
},

.error-message{
color:red;
}
`
export default Addappointment