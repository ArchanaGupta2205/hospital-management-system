import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Doctors() {

  const [data, setdata] = useState("")
  const [doctors, setDoctors] = useState([]);

  async function fetchdata() {
    try {
      const docapi = await fetch("http://localhost:8001/doctorapi")
      const doctordata = await docapi.json();
      setDoctors(doctordata)


      /* The line const doctordata = await docapi.json(); is necessary because it retrieves the JSON data from the response object returned by the fetch API.
      
      Here's a breakdown of what this line does:
      
      fetch("http://localhost:8001/doctorapi"): This line sends an HTTP request to the specified URL (http://localhost:8001/doctorapi) and returns a Promise that resolves to a Response object.
      
      await docapi.json(): The await keyword is used to wait for the Promise returned by fetch to resolve. When the Promise resolves, it returns a Response object. The json() method of the Response object reads the response body to completion and returns a Promise that resolves with the result of parsing the body text as JSON. By awaiting this Promise, we ensure that we get the JSON data from the response.
      
      const doctordata = ...: Once the Promise returned by json() resolves, the JSON data is stored in the variable doctordata. This variable can then be used in your code to access the data retrieved from the API endpoint.
      
      In summary, the line const doctordata = await docapi.json(); is necessary to fetch and parse the JSON data from the API response so that you can work with it in your application. Without it, you would only have the raw Response object, and you wouldn't be able to access the data contained within the response body. */


    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchdata()


  const filterdata = doctors.filter((doctor) => {
    return doctor.name.toLowerCase().includes(data.toLocaleLowerCase())
  })

  async function deleteitem(id) {
    await fetch(`http://localhost:8001/deleteDoctor/${id}`, {
      method: "post"
    })
  }



  return (
    <><Style>
      <div className='container'>
        <div><h3>Doctors</h3></div>
        <div ><Link to='/Sidebar/AddDoctor'><button className='btn btn-info'>+Add Doctor</button></Link></div>
      </div>
      <div>
        <input type='text' placeholder='search doctor..' value={data} onChange={(e) => { setdata(e.target.value) }}></input><button className='btn btn-success'>Search</button>
      </div>
      <div  >
        <table className='table table-stripped' >
          <thead>
            <tr>
            
              <th>image</th>
              <th>name</th>
              <th>gender</th>
              <th>department</th>
              <th>address</th>
              <th>email</th>
              <th>phone</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {filterdata.map((item) => (
              <tr key={item._id}>

                
                <td>  <img src={`http://localhost:8001/images/${item.image}`} alt="Doctorimage" onError={(e) => {
                  console.error('Error loading image:', e.target.src);
                  //  e.target.style.display = 'none'; // Hide the image if loading fails
                }} /></td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.department}</td>
                <td>{item.address}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td  ><button type='button' className='btn btn-info'><Link to={`/EditModal/${item._id}`} >edit</Link></button><button type='button' className='btn btn-danger' onClick={() => deleteitem(item._id)}>del</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Style>
    </>
  )
}

const Style = styled.section`


.container{
 
  width:100vw;
  height:100px;
  display:flex;
  justify-content:space-between;
  align-items:center;
},
.btn-info{
border-radius:20px;
},
img{
height:50px;
width:50px;
border-radius:50%;
}

`

export default Doctors