import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'
import { RiScissors2Fill } from "react-icons/ri";
import { FaTooth } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Price() {
    return (
        <><Style>
            <div className='container-fluid' style={{backgroundColor:"beige",margin:"50px"}}>
                <div className='content'  >
                    <h1 >We Provide The Best Treatment In Reasonable Price</h1>
                    <img src='img/section-img.png' style={{ margin: "20px" }}></img>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, nulla quisquam? Quibusdam expedita </p>
                </div>
                <div className='container' style={{marginTop:"50px"}}>
                    <div className='row con'>
                        <div className='col-lg-3 col-md-12 box'>
                            <RiScissors2Fill style={{fontSize:"50px",color:"blue",margin:"20px"}}/>
                            <h3>Plastic Surgery</h3>
                            <h2 style={{color:"blue"}}>$199</h2>
                            <ul>
                                <li>Lorem Ipsum Dolor Sit</li> <TiTick/>
                                <li>Cubitur Sollicitudin Fentum</li><TiTick/>
                                <li>Nullam Interdum Enim</li><RxCross2/>
                                <li>Donec Ultricies Metus</li><RxCross2/>
                                <li>Pellentesque Eget Nibh</li><RxCross2/>
                            </ul>
                            <button className='btn btn-info' style={{width:"200px",margin:"20px"}}><Link to='/addappointment'>Book Now</Link></button>
                        </div>
                        <div className='col-lg-3 col-md-12 box'>
                            <FaTooth style={{fontSize:"50px",color:"blue",margin:"20px"}}/>
                            <h3>Teeth Whitening</h3>
                            <h2 style={{color:"blue"}}>$299</h2>
                            <ul>
                                <li>Lorem Ipsum Dolor Sit</li><TiTick/>
                                <li>Cubitur Sollicitudin Fentum</li><TiTick/>
                                <li>Nullam Interdum Enim</li><TiTick/>
                                <li>Donec Ultricies Metus</li><RxCross2/>
                                <li>Pellentesque Eget Nibh</li><RxCross2/>
                            </ul>
                            <button className='btn btn-info' style={{width:"200px",margin:"20px"}}><Link to='/addappointment'>Book Now</Link></button>
                        </div>
                        <div className='col-lg-3 col-md-12 box'>
                            <FaHeartPulse style={{fontSize:"50px",color:"blue",margin:"20px"}} />
                            <h3>Heart Surgery</h3>
                            <h2 style={{color:"blue"}}>$399</h2>
                           
                            <ul>
                                <li>Lorem Ipsum Dolor Sit</li><TiTick/>
                                <li>Cubitur Sollicitudin Fentum</li><TiTick/>
                                <li>Nullam Interdum Enim</li><TiTick/>
                                <li>Donec Ultricies Metus</li><TiTick/>
                                <li>Pellentesque Eget Nibh</li><TiTick/>
                            </ul>
                            <button className='btn btn-info' style={{width:"200px",margin:"20px"}}><Link to='/addappointment'>Book Now</Link></button>
                        </div>
                    </div>
                </div>


            </div>
        </Style>
        </>

    )
}

const Style = styled.section`


 .content{
    text-align:center;

 },
 ul li{
    list-style:none;
 },
 .box{
    border:solid black;
    text-align:center;
    background-color:white;
    margin:20px;
    
    
 },
 .con{
    display:flex;
    justify-content:space-around;
 },
 .con2{
    display:flex;
    justify-content:space-around;
 }
 
`

export default Price