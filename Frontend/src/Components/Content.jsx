import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'
import { FaTruckMedical  } from "react-icons/fa6";
import { CiStethoscope  } from "react-icons/ci";

function Content() {
    return (
        <>
            <St>   <div className='con'><h2>We Are Always Ready To Help You and Your Family</h2>
                <img src='img/section-img.png' height={100} width={100}></img>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur unde nesciunt earum? Ut id earum omnis amet </p> </div>
            </St>
            <Sty>
                <div className="container-fluid " >
                    <div className='row contwo'>
                        <div className='col-lg-3 col-md-12 col-sm-12 box' >
                        <div className='icon'>   <FaTruckMedical style={{fontSize:"50px"}}/></div> 
                            <h3>Emergency Help</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores </p>
                            
                        </div>
                      
                        <div className='col-lg-3 col-md-12 col-sm-12 box'>
                        <div className='icon'>  <img src='img/download.jpg' height={100} width={100}></img></div> 
                            <h3>Enriched Pharmacy</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores </p>
                           
                        </div>
                       
                        <div className='col-lg-3 col-md-12 col-sm-12 box'>
                          <div className='icon'> <CiStethoscope style={{fontSize:"50px"}} /></div> 
                            <h3>Medical Treatment</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores </p>
                        </div>
                        

                    </div>
                </div>
            </Sty>


            
        </>
    )
}
const St = styled.section`


 .con{
    text-align:center;
 }

`
const Sty = styled.section`

 .contwo{
    display:flex;
    justify-content:space-around;
 },

 .box{
    height:200px;
    border-radius:10px;
    text-align:center;
    
 },
 .icon{
    height:100px;
    width:100px;
    border:solid black;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:80px;
    color:blue;
    
 }
 .icon:hover{
    background-color:blue;
    color:white;

 }

`

export default Content