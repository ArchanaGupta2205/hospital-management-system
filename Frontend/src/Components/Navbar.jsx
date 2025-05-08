import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"



function Navbar() {

  // const navigate = useNavigate();                        
  const auth = localStorage.getItem('signupuser')

  const logout = async () => {

    let confirmLogout = confirm("Are you sure you want to sign out?");
  
    if (confirmLogout) {
     
        const { name, email,password } = JSON.parse(auth)
  
        try {
          const response = await fetch(`http://localhost:8001/signout`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ name, password }), 
          });
  
          if (response.ok) {
          
          // Clear user data from localStorage on successful logout
          localStorage.removeItem('signupuser');
          toast('You have successfully signed out!');

          }
  
        } catch (error) {
          console.error('Error during logout:', error);
          alert('Logout failed. Please try again.');
        }
      
    }
  };
  

  const signupalert = () => {
    toast("Sign up for more")
  }


  return (
    <>
      <St >
        {
          auth ?
            <nav className='container-fluid navbar navbar-expand-lg' id='con'>
              <div className='row'>
                <div className='col-lg-4 col-sm-3 '> <img src='img/logo.png' height={100} width={200} ></img></div>
                <button className='navbar-toggler col-sm-3 col-lg-4' type='button' data-toggle="collapse" data-target="#left">
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div className=' collapse  navbar-collapse col-lg-7 col-sm-4 ' id='left'>
                  <ul className='menu navbar-nav ml-auto'>

                    <li className='nav-item'> <Link to='/' className='nav-link' >Home</Link></li>
                    <li className='nav-item'><Link to='/Sidebar' className='nav-link'>Main</Link></li>
                    {/* // <li> <Link to='/Doctors' >Doctors</Link></li> */}
                    <li className='nav-item'> <Link to='/' className='nav-link' onClick={logout} >Signout</Link></li>
                    <li className='nav-item'> <Link to='/Contact' className='nav-link'>Contact us</Link></li>
                    <button className='btn btn-info nav-item'> <Link to='/Addappointment' className='nav-link' >Book Appointment</Link></button>
                  </ul>
                </div>
              </div>
            </nav>
            :
            <nav className='container-fluid navbar navbar-expand-lg' id='con'>
              <div className='row'>
                <div className='col-lg-4  col-sm-3'> <img src='img/logo.png' height={100} width={200} ></img></div>
                <button className='navbar-toggler col-sm-3 col-lg-4' type='button' data-toggle="collapse" data-target="#left">
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div className=' collapse  navbar-collapse  col-lg-7  col-sm-4' id='left'>
                  <ul className='menu navbar-nav ml-auto'>

                    <li className='nav-item'> <Link to='/' className='nav-link' >Home</Link></li>
                    <li className='nav-item'> <Link to='/' className='nav-link' onClick={signupalert} >Doctors</Link></li>
                    <li className='nav-item'> <Link to='/Signup' className='nav-link' >Sign up</Link></li>
                    <li className='nav-item'> <Link to='/' className='nav-link' onClick={signupalert}>appointment</Link></li>
                    <button className='btn btn-info nav-item'> <Link to='/Addappointment' className='nav-link' >Book Appointment</Link></button>
                  </ul>
                </div>
              </div>
            </nav>
        }
      </St>
    </>
  )
}
const St = styled.section`
nav{
position:fixed;
z-index:1;
background-color:white;
border-bottom:1px dotted blue;

},



#con{
   display:flex;
   flex-direction:column;
   width:100%;
},

.row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
},

#left{
 
  padding-right:0;
}

.menu{
  display:flex;
  gap:60px;
},

.menu li{
  list-style:none;
},

li a{
  text-decoration:none;
},

a:hover{
  text-decoration:underline blue 4px;
  text-underline-offset:16px;
},
.navbar-toggler{
width:50px;
}

`

export default Navbar
/* 
import React from 'react';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-Components';

function Navbar() {
  const [auth, setAuth] = useState(localStorage.getItem('signupuser'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('signupuser');
    setAuth(null);
    navigate('/signin'); // Navigate to the sign-in page after logout
  };

  return (
    <St>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <Link to='/'>
              <img src='img/logo.png' height={100} width={200} alt='Logo' />
            </Link>
          </div>
          <div className='col-lg-7'>
            <ul className='menu'>
              <li><Link to='/'>Home</Link></li>
              {auth && (
                <>
                  <li><Link to='/sidebar'>Main</Link></li>
                  <li><Link to='/doctors'>Doctors</Link></li>
                  <li><Link to='/appointments'>Appointments</Link></li>
                  <li><button className='btn btn-info' onClick={logout}>Sign Out</button></li>
                  <li><button className='btn btn-info'><Link to='/addappointment'>Book Appointment</Link></button></li>
                </>
              )}
              {!auth && (
                <>
                  <li><Link to='/signup'>Doctors</Link></li>
                  <li><Link to='/signup'>Sign Up</Link></li>
                  <li><Link to='/signup'>Appointment</Link></li>
                  <li><button className='btn btn-info'><Link to='/addappointment'>Book Appointment</Link></button></li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </St>
  );
}

const St = styled.section`
  .container {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    align-items: center;
  }

  .menu {
    display: flex;
    gap: 20px;
  }

  .menu li {
    list-style: none;
  }

  li a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline blue 4px;
    text-underline-offset: 16px;
  }
`; 

export default Navbar;*/
