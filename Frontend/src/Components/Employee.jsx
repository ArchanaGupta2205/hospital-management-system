import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Employee() {

  const [data, setdata] = useState([])

  async function get() {
    try {

      const res = await fetch("http://localhost:8001/getemployee")
      const employeedata = await res.json();
      setdata(employeedata)
     
    } catch(error) {
      console.error("Error fetching data:", error)
    }
  }
  get()

  function deleteitem(id){
    fetch(`http://localhost:8001/delemployee/${id}`,{
      method:"post"

    })
  }


  return (<>
    <Style>
      <div className='container'><h3>Employees...</h3>
        <Link to='/Sidebar/AddEmployee'> <button type='button' className='btn btn-info'>+ Add Employee</button></Link>
      </div>

      <table className='table table-striped ' >
        <thead>
          <tr>
          
            <th>employee name</th>
            <th>Email</th>
            <th>contact</th>
            <th>join date</th>
            <th>Role</th>
            <th>salary</th>
            <th>payslip</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>

          {data.map((item) => {                  // if we don't want to use return statement then we can use parenthesis in place of curly braces
            return (                            // or you can use the implicit return if you remove the curly braces:
              <tr key={item._id}>

                
                <td>  {item.name} </td>
                <td>  {item.email}</td>
                <td>  {item.Contact}</td>
                <td>   {item.joindate}</td>
                <td>   {item.role}</td>
                <td>  {item.salary}</td>
                <td><Link to="/sidebar/Payslip"> <button className='btn btn-info' style={{width:"120px"}}>Generate slip</button> </Link> </td>
                <td  ><button type='button' className='btn btn-info action'><Link to={`/sidebar/Edit_employee/${item._id}`} >edit</Link></button><button type='button' className='btn btn-danger action' onClick={() => deleteitem(item._id)}>del</button></td>

              </tr>
            )
          })}
        </tbody>
      </table>
    </Style>
  </>

  )
}

const Style = styled.section`


 .action{
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
export default Employee