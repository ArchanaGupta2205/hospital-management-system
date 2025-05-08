import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/carousel.js'
import { CgNotes } from "react-icons/cg";
import { FaTruckMedical } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";

import styled from 'styled-Components'
import { Link } from 'react-router-dom';


function Carousel() {
    return (
        <>
            <div className='container-fluid' id='carousel' >
                <div className='row' >

                    <div className='carousel slide' data-bs-ride='carousel' id='mycarousel' style={{marginTop:"100px"}} >
                        <S>  <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <img src='img/slider.jpg' className='d-block w-100' alt='img' height={550}></img>
                                <div className='carousel-caption ' style={{ color: "black" }}>
                                    <h1>We Provide<span style={{ color: "blue" }}> Medical</span> Services That You Can <span style={{ color: "blue" }}>Trust!</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam pariatur autem voluptatibus quis distinctio, culpa veniam velit labore dolor nostrum quisquam odit accusamus voluptatem. Quia ad quaerat eaque in.</p>
                                    <button className='btn btn-info'>    <Link to='/Addappointment'> Book Appointment</Link></button>
                                </div>
                            </div>
                            <div className='carousel-item '>
                                <img src='img/slider2.jpg' className='d-block w-100' alt='img' height={550}></img>
                                <div className='carousel-caption ' style={{ color: "black" }}>
                                    <h1>We Provide<span style={{ color: "blue" }}> Medical</span> Services That You Can <span style={{ color: "blue" }}>Trust!</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam pariatur autem voluptatibus quis distinctio, culpa veniam velit labore dolor nostrum quisquam odit accusamus voluptatem. Quia ad quaerat eaque in.</p>
                                    <button className='btn btn-info'>    <Link to='/Addappointment'> Book Appointment</Link></button>
                                </div>
                            </div>
                            <div className='carousel-item '>
                                <img src='img/slider3.jpg' className='d-block w-100' alt='img' height={550}></img>
                                <div className='carousel-caption ' style={{ color: "black" }}>
                                    <h1>We Provide<span style={{ color: "blue" }}> Medical</span> Services That You Can <span style={{ color: "blue" }}>Trust!</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam pariatur autem voluptatibus quis distinctio, culpa veniam velit labore dolor nostrum quisquam odit accusamus voluptatem. Quia ad quaerat eaque in.</p>
                                    <button className='btn btn-info'>  <Link to='/Addappointment'> Book Appointment</Link></button>
                                </div>
                            </div>
                        </div>
                        </S>

                        <A> <a href='#mycarousel' className='carousel-control-prev' data-bs-slide="prev">
                            <span className='carousel-control-prev-icon'></span>
                        </a>
                            <a href='#mycarousel' className='carousel-control-next' data-bs-slide="next">
                                <span className='carousel-control-next-icon'></span>
                            </a></A>
                    </div>
                </div>

            </div>
            <St>    <div className='container'>
                <div className='row boxes'>
                    <div className='col-lg-3 col-md-6 col-sm-12 box' ><h3>Emergency Cases</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum magni perspiciatis quidem deleniti
                    </p><h1 className='icon'><FaTruckMedical /></h1></div>
                    <div className='col-lg-3 col-md-6 col-sm-12 box'><h3>Doctors Timetable</h3><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos praesentium dolor, perferendis</p><h1 className='icon'><CgNotes /></h1></div>
                    <div className='col-lg-3 col-md-6 col-sm-12 box'><h3>Opening hours</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae corporis, maxime amet laborum, ipsam, inventore </p><h1 className='icon'><FaRegClock /></h1></div>
                </div>
            </div></St>
        
        </>
    )
}



const A = styled.section`

  a span{
    height:30px;
    width:30px;
    background-color:blue;
    border-radius:50%;
  }

`
const S = styled.section`
.carousel-caption{
    position:absolute;
    top:80px;
   text-align:start;
    width:600px;
    
  },

`
const St = styled.section`
.boxes{
    
    display:flex;
    justify-content:space-around;
    position:relative;
     bottom:100px;

},
.box{
   background-color:lightblue;
   height:200px;
   border-radius:10px;
   padding:20px;
  
   
}
.icon{
    color:white;
    text-align:end;
    font-size:100px;
    margin-top:-50px;
    overflow:hidden;
}
`

export default Carousel