import React, { useEffect } from 'react'
import { FaHome } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaRegCalendarDays } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

function Hookcontent() {
    useEffect (() => {
        let valuedisplays = document.querySelectorAll('.num');
        let interval = 5000;
        valuedisplays.forEach((valuedisplay) => {

            let startvalue = 0

            let endvalue = parseInt(valuedisplay.getAttribute('data-val'))
            console.log(endvalue);

            let duration = Math.floor(interval / endvalue)
            let counter = setInterval(function () {
                startvalue += 1
                valuedisplay.textContent = startvalue;
                if (startvalue == endvalue) {
                    clearInterval(counter)
                }
            }, duration)


        })
    }, [])

    return (
        <>
            <S> <div className='container-fluid'>
                <div className='row'>
                    <div className='con col-lg-3 col-md-6 col-sm-12'>
                        <div className='iconbox'><h4 className='icon'><FaHome /></h4></div>
                        <div className='content'>
                            <h3 className='num' data-val="3468"></h3>
                            <h6>Hospital Rooms</h6>
                        </div>
                    </div>
                    <div className='con col-lg-3 col-md-6 col-sm-12'>
                        <div className='iconbox'><h4 className='icon'><GoPersonFill /></h4></div>
                        <div className='content'>
                            <h3 className='num' data-val="557"></h3>
                            <h6>Specialist Doctors</h6>
                        </div>
                    </div>
                    <div className='con col-lg-3 col-md-6 col-sm-12'>
                        <div className='iconbox'><h4 className='icon'><RiEmotionHappyLine /></h4></div>
                        <div className='content'>
                            <h3 className='num' data-val="4347"></h3>
                            <h6>Happy Patients</h6>
                        </div>
                    </div>
                    <div className='con col-lg-3 col-md-6 col-sm-12'>
                        <div className='iconbox'><h4 className='icon'><FaRegCalendarDays /></h4></div>
                        <div className='content'>
                            <h3 className='num' data-val="32"></h3>
                            <h6>Years of Experience</h6>
                        </div>
                    </div>
                </div>
            </div></S>

        </>
    )
}

const S = styled.section`


.container-fluid{
    margin-top:100px;
    background-image:url("img/bread-bg.jpg");
    background-size: 100% 100%;
    background-repeat:no-repeat;
    display:flex;
    justify-content:center;
   
},

.row{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-image:linear-gradient(#1A76D1, rgba(0, 0, 255, 0.4));
    
},
.con{
    height:200px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    color:white;
    
},
.iconbox{
    height:70px;
    width:70px;
    border:solid white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
 


},
.icon{
    font-size:40px;
}
`

export default Hookcontent