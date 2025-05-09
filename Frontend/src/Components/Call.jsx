import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Call() {
    return (
        <>
            <Style><div className='container-fluid con'>
                <div className='container-fluid con2'>
                    <div className='container'>
                        <h2>Do You Need Emergency Medical Care? Call @ 12345 6789</h2><br/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sit temporibus velit </p><br/>
                        <button type='button' ><Link to='/Contact'>Contact Now</Link></button>
                    </div>
                </div>
            </div>
            </Style>
        </>
    )
}

const Style = styled.section`

  .con{
    background-image:url("img/call-bg.jpg");
    margin-top:100px;
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
}

`

export default Call