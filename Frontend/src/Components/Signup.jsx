import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { useState } from 'react'
import Nav2 from './Nav2'
import { toast } from 'react-toastify'
import {  useNavigate } from 'react-router-dom'
function Signup() {

  const navigate=useNavigate()


  const [user, setuser] = useState({
    name: "", email: "", password: ""
  })

  const [error, seterror] = useState({})

  let name, value;
  const handleinputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value })
  }

  const sendemail = async (e) => {
    e.preventDefault()

    const newError = validateForm(user)
    seterror(newError)

    
    if (Object.keys(newError) == 0) {
      try {
        const res = await fetch("http://localhost:8001/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ user })
        })
        

        toast("Check your email to verify",{
         
          position:"top-center"
        });

        const data_to_localstorage = JSON.stringify({
          email: user.email,
          password: user.password,
          name: user.name
        })


        if (res.ok) {
          localStorage.setItem('signupuser', data_to_localstorage);
        }

        setuser({
          name: "", email: "", password: ""
      })

        navigate('/')
        /*   const responseData = await res.text(); // Assuming the response is text/plain
    
          // Assuming responseData contains some token or user information
         */
      }
      catch (err) {
        console.log("error", err)
      }
    }
    else {
      toast.error("form submition failed due to validation error")
    }

  }

  const validateForm = (fdata) => {
    const errors = {}

    if (!fdata.name) {
      errors.name = 'username is requird'
    }
    if (!fdata.email) {
      errors.email = 'email is requird'
    } else if (!/\S+@\S+\.\S+/.test(fdata.email)) {
      errors.email = 'enter valid email'
    }
    if (!fdata.password) {
      errors.password = 'password is requird'
    } else if (fdata.password < 8) {
      errors.email = 'enter at least 8 digit password'
    }

    return errors

  }


  return (

    <><Style>
      <Nav2/>
      <div className='scon container-fluid' >
        <div className='container' >
          <div className='img'> <img src='img/favicon.png'></img></div>
          <form >
            <div className='form-group' >
              <label>username</label>
              <input type='text' className='form-control' value={user.name} name='name' onChange={handleinputs}></input>

              {
                error.name &&
                  <span className='message'>
                    {error.name}
                  </span>
              }
            </div>
            <div className='form-group'>
              <label> Email Address</label>
              <input type='text' className='form-control' value={user.email} name='email' onChange={handleinputs}></input>


              {error.email &&
                <span className='message'>
                  {error.email}
                </span>
              }
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input type='text' className='form-control' value={user.password} name='password' onChange={handleinputs}></input>


              {error.password &&
                <span className='message'>
                  {error.password}
                </span>
              }
            </div>
            <button type='submit' className=' btn btn-info' onClick={sendemail} style={{margin:"20px"}}>SIGNUP</button>
          </form>
        </div>
      </div></Style>
    </>

  )
}

const Style = styled.section`



.scon {
  height:500px;
  width:400px;
  background-color:beige;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:30px;
  
},

.img{
  height:50px;
  width:50px;
  border:solid blue;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  justify-self:center;
},
.img img{
  hight:30px;
  width:30px;

  
},
label{
 margin:20px;
},
span{
color:red;
}
`

/* import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Signup() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Send email logic
      
      // Show modal after successful submission
      handleShow();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className='scon'>
      <div className='container'>
        <div className='img'>
          <img src='img/favicon.png' alt="logo"></img>
        </div>
        <form>
          {/* Form inputs *//*}
/*  <button type='submit' className='btn btn-info' onClick={sendEmail}>SIGNUP</button>
</form>
</div>

{/* Modal *//*}
<Modal show={showModal} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Alert</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <h6>Check your email to verify</h6>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
</div>
);
}

export default Signup*/

export default Signup