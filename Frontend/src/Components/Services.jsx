import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'
import { RiTodoLine } from "react-icons/ri";
import { FaTooth } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEarListen } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { BiSolidDonateBlood } from "react-icons/bi";

function Services() {
  return (
    <><Style>
    <div className='content'>
        <h1>We Offer Different Services To Improve Your Health</h1>
        <img src='img/section-img.png' style={{margin:"20px"}}></img>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aperiam iure, provident quod consequuntur laboriosam </p>
    </div>
    <div className='container' >
        <div className='row' >
            <div className='col-lg-4 col-md-12 con' >
            <div className='icon'>  <RiTodoLine  /></div><div><h4>General Treatment</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad recusandae enim dignissimos ipsum. Fugiat, eligendi illum ulla</p></div>
            </div>
            <div className='col-lg-4 col-md-12 con'>
              <div className='icon'>  <FaTooth/></div><div><h4>Teeth Whitening</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad recusandae enim dignissimos ipsum. Fugiat, eligendi illum ulla</p></div>
            </div>
            <div className='col-lg-4 col-md-12 con'>
            <div className='icon'> <FaHeart/></div><div> <h4>Heart Surgery</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad recusandae enim dignissimos ipsum. Fugiat, eligendi illum ulla</p></div>
            </div>
        </div>
        <div className='row' style={{marginTop:"50px"}}>
            <div className='col-lg-4 col-md-12 con'>
            <div className='icon'> <FaEarListen/></div><div>  <h4>Ear Treatment</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad recusandae enim dignissimos ipsum. Fugiat, eligendi illum ulla</p></div>
            </div>
            <div className='col-lg-4 col-md-12 con'>
            <div className='icon'>  <FaEye/></div><div><h4>Vision Problems</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad recusandae enim dignissimos ipsum. Fugiat, eligendi illum ulla</p></div>
            </div>
            <div className='col-lg-4 col-md-12 con'>
            <div className='icon'>  <BiSolidDonateBlood/></div><div><h4>Blood Transfusion</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad recusandae enim dignissimos ipsum. Fugiat, eligendi illum ulla</p></div>
            </div>
        </div>

    </div>
    </Style>
    </>
  )
}

const Style=styled.section`


.content{
    text-align:center;
    margin:100px;
},

.con{
    display:flex;
    justify-content:space-around;
   
},
.icon{
    font-size:50px;
    margin-right:20px;
    color:blue;
   
}
`

export default Services