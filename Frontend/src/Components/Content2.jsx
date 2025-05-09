import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { IoMdArrowDroprightCircle } from "react-icons/io";


function Content2() {
    return (
        <>
            <Style>    <div className='content'>
                <h1>We Offer Different Services To Improve Your Health</h1>
                <img src='img/section-img.png' style={{margin:"20px"}}></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, earum placeat modi vero </p>
            </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <h3> Who We Are</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.</p>

                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <ul>
                                            <li><IoMdArrowDroprightCircle style={{color:"blue"}}/> Maecenas vitae luctus nibh.</li>
                                            <li><IoMdArrowDroprightCircle style={{color:"blue"}}/>  Duis massa massa. </li>
                                            <li><IoMdArrowDroprightCircle style={{color:"blue"}}/>  Aliquam feugiat interdum. </li>  </ul></div>
                                    <div className='col-lg-6 col-md-12 col-sm-12'>
                                        <ul>
                                            <li><IoMdArrowDroprightCircle style={{color:"blue"}}/> vitae luctus nibh.</li>
                                            <li><IoMdArrowDroprightCircle style={{color:"blue"}}/>Duis massa massa.</li>
                                            <li><IoMdArrowDroprightCircle style={{color:"blue"}}/>Aliquam feugiat interdum.</li></ul></div></div></div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <img src='img/video-bg.jpg' height={300} width={500} ></img>
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

},
ul li{
   list-style:none;
}
`


export default Content2