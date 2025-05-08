import React, { createElement, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'
import { Link } from 'react-router-dom'

function Appointments() {

    const [data, setdata] = useState([])

  
        fetch("http://localhost:8001/getapi")

            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setdata(data);
            })
            .catch(err => {
                console.error('There was an error fetching the data:', err);
            });
 



    function deleteitem(key){  
        var id=key
        fetch(`http://localhost:8001/delete/${id}`,{
            
            method:'POST'
        })

       .then(response => {
           if (!response.ok) {
               throw new Error('Network response was not ok');
           }
           return response.json();
       })
      
       .catch(err => {
           console.error('There was an error fetching the data:', err);
       });
   }

    

    

   

    return (
        <><Style>
            <div className='container'><h3>Appointments</h3>
                <Link to='/Addappointment'> <button type='button' className='btn btn-info'>+ Add Appointment</button></Link>
            </div>
            <div>
                <table className='table table-striped'>
                    <thead >
                        <tr>

                            <th>Patients name</th>
                            <th>DOB</th>
                            <th>Departments</th>
                            <th>Dr.name</th>
                            <th>App.date</th>
                            <th>App.time</th>
                            <th>Patient email</th>
                            <th>phone no.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item) => {                  // if we don't want to use return statement then we can use parenthesis in place of curly braces
                            return (                            // or you can use the implicit return if you remove the curly braces:
                                <tr key={item._id}>


                                    <td>  {item.pname} </td>
                                    <td>  {item.dob}</td>
                                    <td>  {item.department}</td>
                                    <td>   {item.drname}</td>
                                    <td>   {item.date}</td>
                                    <td>  {item.time}</td>
                                    <td>   {item.email}</td>
                                    <td>  {item.number}</td>
                                    <td  ><button type='button' className='btn btn-info'><Link to={`/EditModal/${item._id}`} >edit</Link></button><button type='button' className='btn btn-danger' onClick={() => deleteitem(item._id)}>del</button></td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </Style>


        </>


    )
}

const Style = styled.section`


 button{
    border-radius:20px;
 },
 .container{
 width:100vw;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100px;
 }
`
export default Appointments