import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'

function Content3() {
    return (
        <>
            <Style>  <div className='content'>
                <h1>We Maintain Cleanliness Rules Inside Our Hospital </h1>
                <img src='img/section-img.png' style={{ margin: "20px" }}></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officiis </p>
            </div>
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <img src='img/pf1.jpg'></img>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <img src='img/pf2.jpg'></img>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <img src='img/pf3.jpg'></img>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <img src='img/pf4.jpg'></img>
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
    margin:100px;
}




`

export default Content3