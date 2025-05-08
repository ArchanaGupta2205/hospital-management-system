import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'
import { useState } from 'react'

function AddEmployee() {

    const [data, setdata] = useState({
        ename: "", email: "", contact: "", joiningdate: "", role: "", salary: ""
    })
    const [error, seterror] = useState('')



    const handleinput = (e) => {
        let name, value
        name = e.target.name,
            value = e.target.value

        setdata({ ...data, [name]: value })
    }

    const sendtobackend = async (e) => {
        e.preventDefault()

        const newError = validateForm(data)
        seterror(newError)

        if (Object.keys(newError).length == 0) {

            const res = await fetch("http://localhost:8001/employeedata", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data })
            })


            let successmessage = document.querySelector('.success-message')

            let text = document.createElement('h5')
            text.textContent = 'form submitted successfully'
            text.style.color = "green"

            successmessage.appendChild(text)
        }


    }

    const validateForm = (fdata) => {

        const errors = {}

        if (!fdata.ename) {
            errors.ename = 'employee name is requird'
        }
        if (!fdata.email.trim()) {
            errors.email = 'email is requird'
        } else if (!/\S+@\S+\.\S+/.test(fdata.email)) {
            errors.email = 'email is invalid'
        }

        if (!fdata.role) {
            errors.role = 'role is requird'
        }
        if (!fdata.joiningdate) {
            errors.joiningdate = ' enter joiningdate'
        }


        if (!fdata.contact) {
            errors.contact = 'phone number is requird'
        } else if (fdata.contact.length < 10) {
            errors.contact = 'enter valid no.'
        }

        if (!fdata.salary) {
            errors.salary = ' enter salary'
        }

        return errors
    }
    return (
        <>
            <Style>
                <h3 style={{ margin: "30px" }}> Add Employee</h3>
                <div className='container'>
                    <form onSubmit={sendtobackend} >
                        <div className='row'>
                            <div className='col-lg-6'>

                                <input type='text' placeholder='employee name' className='form-control' value={data.ename} name='ename' onChange={handleinput}></input>
                                {error.ename &&
                                    <span className='error-message'>
                                        {error.ename}
                                    </span>
                                }
                            </div>
                            <div className='col-lg-6'>

                                <input type='email' placeholder='employee email' className='form-control' value={data.email} name='email' onChange={handleinput}></input>
                                {error.email &&
                                    <span className='error-message'>
                                        {error.email}
                                    </span>
                                }
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>

                                <input type='text' placeholder='contact' className='form-control' value={data.contact} name='contact' onChange={handleinput}></input>
                                {error.contact &&
                                    <span className='error-message'>
                                        {error.contact}
                                    </span>
                                }
                            </div>
                            <div className='col-lg-6'>

                                <input type='date' placeholder='joining date' className='form-control' value={data.joiningdate} name='joiningdate' onChange={handleinput}></input>
                                {error.joiningdate &&
                                    <span className='error-message'>
                                        {error.joiningdate}
                                    </span>
                                }
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>

                                <input type='text' placeholder='employee role' className='form-control' value={data.role} name='role' onChange={handleinput}></input>
                                {error.role &&
                                    <span className='error-message'>
                                        {error.role}
                                    </span>
                                }
                            </div>
                            <div className='col-lg-6'>

                                <input type='number' placeholder='salary' className='form-control' value={data.salary} name='salary' onChange={handleinput}></input>
                                {error.salary &&
                                    <span className='error-message'>
                                        {error.salary}
                                    </span>
                                }
                            </div>
                        </div>
                        <button type='submit' className='btn btn-success'>add</button>
                        <div className='success-message'></div>
                    </form>
                </div>
            </Style>
        </>
    )
}
const Style = styled.section`
.container{
   
    width:900px;
    height:300px;
    display:flex;
    align-items:center;
    justify-content:center;
},

.row{
margin:30px;},

form{
    
    padding:20px;
},

.error-message{
color:red;
}

`

export default AddEmployee