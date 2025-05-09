import React, { useState } from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoCall } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from "react-icons/fa";

function Contactpage() {

    const [userdata, setuserdata] = useState({
        name: "", email: "", message: ""
    })

    const sendtobackend = async (e) => {

        e.preventDefault()
        try {

            const res = await fetch("http://localhost:8001/contact", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userdata)
            })
            if (res.ok) {    
                
                toast.success('Thank you! We will contact you soon!', {
                    position: "top-center",
                    icon: <FaCheckCircle  style={{color:"green"}}/>
                });

                setuserdata({
                     name: "", email: "", message: ""
                })
            } 
        } catch (err) {
            console.log(err);

        }
    }

    return (
        <>
            <Style>

                <div className='container-fluid con'>
                    <div className='container-fluid con2'>
                        <div className='container'>
                            <h3>Get in touch with us!</h3>
                            <h3>Feel free to call us for queries.</h3>
                        </div>
                    </div>
                </div>

                <div className='container formpart'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12' >
                            <div className='roundimg'>
                                <img src='img/pf1.jpg'></img>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12' >
                            <form onSubmit={sendtobackend}>
                                <div className='right'>
                                    <h3>Contact Us</h3>
                                    <p>If you have any questions please fell free to contact with us.
                                        and we will get in touch with you as soon as possible
                                    </p>
                                    <div>
                                        <label>Name</label>
                                        <input type='text' className='form-control' placeholder='enter your name' value={userdata.name} name='name' onChange={(e) => { setuserdata({ ...userdata, [e.target.name]: e.target.value }) }} required></input>
                                    </div>
                                    <div>
                                        <label>Email</label>
                                        <input type='email' className='form-control' placeholder='enter a valid email address' value={userdata.email} name='email' onChange={(e) => { setuserdata({ ...userdata, [e.target.name]: e.target.value }) }} required></input>
                                    </div>
                                    <div>
                                        <label>Message</label>
                                        <textarea name="message" className='form-control' value={userdata.message} onChange={(e) => { setuserdata({ ...userdata, [e.target.name]: e.target.value }) }} required></textarea>
                                    </div>
                                    <button type="submit" className='form-control btn btn-info' style={{ marginTop: "20px" }} >submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='row boxes'>
                        <div className='col-lg-3 col-md-3 col-sm-12 box' >
                            <div className='content'>
                                <div><IoCall /> <h4>call log</h4>

                                    <h3>+(000) 1234 56789</h3>
                                    <p>info@company.com</p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12 box'>
                            <div className='content'><div> <IoLocationSharp />
                                <h4>location</h4>
                                <p>xyz road ,kanpur</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-12 box'>
                            <div className='content'>
                                <div>  <FaClock /> <h4>hours</h4>
                                    <h5>Mon - Sat: 8am - 5pm</h5>
                                    <p>Sunday Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Style>
        </>
    )
}

const Style = styled.section`

  .con{
    background-image:url("img/bread-bg.jpg");
   
    background-repeat:no-repeat;
    background-size:100% 400px;
    height:400px;
    color:white;
},
.container{
    text-align:center;
},
.con2{
    height:100%;
    width:100%;
    background-image:linear-gradient(#1A76D1, rgba(0, 0, 255, 0.4));
    display:flex;
    justify-content:center;
    align-items:center;
},
.roundimg img{

height:100%;
width:100%;
border-top-right-radius:45%;
border-bottom-right-radius:45%;
},

.formpart{
margin:80px;}
,
.form-control{
border-top:none;
border-left:none;
border-right:none;
margin:10px},

.right{
text-align:justify;},

.box{
background-color:blue;
 height:200px;
   margin:10px;
   border-radius:10px;

},
.boxes {
display:flex;
justify-content:center;
},

.content{
margin:20px;
color:white;}
`

export default Contactpage