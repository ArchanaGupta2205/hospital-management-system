import React, { useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-Components'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


function Payslip() {

  function netpay() {
    let totalboxearning = totalEarning()
    let totalboxdetuction = totalDetuction()
  

    let netpay = document.querySelector('.netpay')
    let netpayamount = totalboxearning - totalboxdetuction
    netpay.innerHTML = netpayamount
    
  }

  function totalEarning() {
    let sum = 0

    let num = document.getElementsByClassName('e')

    for (let i = 0; i < num.length; i++) {
      const value = parseFloat(num[i].value) || 0; // Convert num value string  to number
      sum = sum + value
    }
    let totalbox = document.querySelector('.totalearning')
    totalbox.innerHTML = sum
    return sum
  }


  function totalDetuction() {
    let sum = 0

    let num = document.getElementsByClassName('d')

    for (let i = 0; i < num.length; i++) {
      const value = parseFloat(num[i].value) || 0; 
      sum = sum + value
    }
    let totalbox = document.querySelector('.totaldeduction')
    totalbox.innerHTML = sum
    return sum

  }


  const pdfRef = useRef()
  const download = () => {
    const input = pdfRef.current
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4', true)
     const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 30  

      pdf.addImage(imgData ,'PNG'  , imgX, imgY, imgWidth * ratio, imgHeight * ratio  )
      pdf.save('invoice.pdf')

    })
  }
  return (
    <>
      <Style>
        <div ref={pdfRef} style={{ padding: "50px", border: "0.5px solid black" }}>
          <div style={{ width: "900px", display: "flex", justifyContent: "center", margin: "20px" }}>PAYSLIP FOR THE MONTH OF  <input type='month'></input></div>

          <img src='/img/favicon.png' height={100} width={100}></img>
          <div>
            MediPlus<br />
            abc road ,kanpur,<br></br>
            4567
          </div>

          <div style={{ margin: "40px", marginLeft: "0", }} className='employee'>
            <h6>Employee</h6>
            <input type='text' placeholder='role' ></input><br />
            employee id:<input type='text' placeholder='employee id'></input><br />
            joining date: <input type='date' placeholder='joining date'></input><br />
            email:<input type='email' placeholder='email'></input><br />
            contact:<input type='number' placeholder='contact'></input>
          </div>
          <div className='row'>
            <div className='col-lg-5'>
              <h3>Earnings</h3>
              <table className='table table-striped' border={3} >
                <tbody>
                  <tr><th>Basic salary</th><td><input type='number' placeholder='Rs' className='form-control e' onChange={netpay}></input></td></tr>
                  <tr><th>House Rent Allowance</th><td><input type='number' placeholder='Rs' className='form-control e' onChange={netpay}></input></td></tr>
                  <tr><th>Conveyance</th><td><input type='number' placeholder='Rs' className='form-control e' onChange={netpay}></input></td></tr>
                  <tr><th>Other Allowance</th><td><input type='number' placeholder='Rs' className='form-control e' onChange={netpay}></input></td></tr>
                  <tr><th>Total Earnings</th><td className='totalearning'></td></tr>
                </tbody>
              </table>
            </div>
            <div className='col-lg-5'>
              <h3>Deductions</h3>
              <table className='table table-striped' border={3}>
                <tbody>
                  <tr><th>Tax Detucted at Source</th><td><input type='number' placeholder='Rs' className='form-control d' onChange={netpay}></input></td></tr>
                  <tr><th>Provident Fund</th><td><input type='number' placeholder='Rs' className='form-control d' onChange={netpay}></input></td></tr>
                  <tr><th>ESI</th><td><input type='number' placeholder='Rs' className='form-control d' onChange={netpay}></input></td></tr>
                  <tr><th>Loan</th><td><input type='number' placeholder='Rs' className='form-control d' onChange={netpay}></input></td></tr>
                  <tr><th>Total Detuctions</th><td className='totaldeduction'></td></tr>
                </tbody>
              </table>
            </div>
            <div style={{display:"flex"}}><h4>Net Pay(A)-(B) : </h4><h4 className='netpay'></h4></div>
            <div style={{ marginTop: "5px" }}><h4 >Net salary: </h4></div>
          </div>
        </div>
        <button className='btn btn-info' onClick={download}>Download</button>
      </Style>
    </>
  )
}

const Style = styled.section`
.employee input {
border-left:none;
border-right:none;
border-top:none;
margin:4px
}
`
export default Payslip



/* 

1. num[i].value

Accesses the value (string) from the i-th input element in a collection called num.

2. parseFloat(...)

Converts that string to a floating-point number.

Example: "3.14" → 3.14, "abc" → NaN, "" → NaN.


3. || 0

If parseFloat(...) returns a falsy value (like NaN, null, "", or undefined), then 0 is used instead.

This ensures you never end up assigning NaN—you get a clean 0 as a fallback.

*/

/* 
parseFloat(" 100 ") = 100
parseFloat("2018@geeksforgeeks") = 2018
parseFloat("geeksforgeeks@2018") = NaN
parseFloat("3.14") = 3.14
parseFloat("22 7 2018") = 22 */

/*  both parseint and parsefloat do same work but parseint return whole number  

parseint("3.14")= 3
*/