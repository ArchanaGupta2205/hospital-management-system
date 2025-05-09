import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

function Footer() {
    return (
        <><Style>
            <div className='container-fluid' style={{ marginTop: "50px", backgroundColor: "rgb(90,90,247)", color: "white" }}>
                <div className='row' id='con'>
                    <div className='col-lg-3 col-md-6 col-sm-12'><h3>About us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et, ratione voluptate, animi molestiae cupiditate iure non, eos quasi quia facilis eligen</p>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'><h3>Quick Links</h3>
                        <p>home</p>
                        <p>Doctors</p>
                        <p>contact us</p>
                        <p>other links</p>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'><h3>Open Hours</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi iuss eum cumque, enim est eos suscipit  excepturi id dignissimos? Mollitia, minus quis!  </p>
                        <div className='row'>
                            <div className='col-lg-6 '><p>Mon-Fri</p>
                                <p>Sat</p>
                                <p>Mon-Thur</p></div>
                            <div className='col-lg-6'><p>8.00-20.00</p>
                                <p>9.00-18.00</p>
                                <p>9.00-15.00</p></div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h3>Newsletter</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem laboriosam nobis. Iure, dicta. Porro laboriosam eius nemo quam at? Dolore dicta deserunt</p>
                        
                    </div>
                </div>
                <div className='container-fluid' style={{ backgroundColor: "navy",textAlign:"center" }}>
                    <div><h2>© Copyright 2018 |</h2>
                        <p>All Rights Reserved by wpthemesgrid.com</p>
                    </div>
                </div>
            </div>
        </Style>
        </>

    )
}
const Style = styled.section`


#con{
    display:flex;
    padding:30px;

}
`

export default Footer