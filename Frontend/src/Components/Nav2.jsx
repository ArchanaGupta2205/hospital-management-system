import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'

function Nav2() {
  return (
    <>
    <Style>
    <div className='nav container-fluid' > <img src='img/logo.png' height={50} width={200} ></img></div>
    </Style>
    </>
  )
}

const Style=styled.section`
.nav{
height:70px;
width:100%;
background-color:skyblue;
},
img{
margin-left:20px;
}
`
export default Nav2