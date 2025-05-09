import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail, MdVisibility } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link, Outlet } from 'react-router-dom';
import Nav2 from './Nav2';


function Sidebar() {
 /*  const employee = () => {
    let item = document.querySelector(".dropdownitem")
    item.style.visibility = "";
    
  } */
    const [showEmployeesList, setShowEmployeesList] = useState(false);

    const toggleEmployeesList = () => {
      setShowEmployeesList(!showEmployeesList);
    };

  return (
    <><Style>
     <div><Nav2 /></div> 
      <div className='container-fluid'>
        <div className='con'  >
          <div><h4>Main</h4></div>
          <div className='list' style={{marginTop:"30px"}}><IoMdHome /><Link to='/'><h5>Home</h5></Link></div>
          <div className='list' style={{marginTop:"30px"}}><FaUserDoctor /><Link to='/sidebar/doctors'><h5>Doctors</h5></Link></div>
          <div className='list' style={{marginTop:"30px"}}><FaRegCalendarDays /><Link to='/sidebar/appointments'><h5>Appointments</h5></Link></div>
          <div className='list' style={{marginTop:"30px"}}><IoPersonSharp /><Link to="" onClick={toggleEmployeesList} ><h5>Employees <IoIosArrowForward />
          </h5></Link> <li className='dropdownitem' style={{ visibility: showEmployeesList ? 'visible' : 'hidden' }}><Link to="/sidebar/employee" >Employees list</Link></li></div>
          <div className='list' style={{marginTop:"30px"}}><MdEmail /><Link to="/sidebar/payslip"><h5>payroll</h5></Link></div>

        </div>
        <div className='con2'>
          <Outlet />
        </div>
      </div>
    </Style>

    </>

  )
}
const Style = styled.section`



 .container-fluid{
  display:flex;
 }
 .con{
    background-color:beige;
    border:1px dotted white;
    width:300px;
    padding:20px;
    height:100vh;
  },


`

export default Sidebar