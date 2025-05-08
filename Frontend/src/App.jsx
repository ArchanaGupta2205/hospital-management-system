import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Signup from './Components/Signup'
import Addappointment from './Components/Addappointment';
import EditModal from './Components/EditModal';
import Sidebar from './Components/Sidebar';
import Appointments from './Components/Appointments';
import Doctors from './Components/Doctors';
import AddDoctor from './Components/AddDoctor';
import Contact from './Components/Contact';
import Employee from './Components/Employee';
import AddEmployee from './Components/AddEmployee';
import Edit_employee from './Components/Edit_employee';
import Payslip from './Components/Payslip';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addappointment" element={<Addappointment />} />
        <Route path="/editmodal/:id" element={<EditModal />} />
        <Route path="/contact" element={<Contact />} />

        {/* Render Appointments and Doctors in Sidebar */}
        <Route path="/sidebar"  element={<Sidebar/>}   >  
        
            {/* Default route for Sidebar */}
          <Route index element={<Doctors />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="adddoctor" element={<AddDoctor />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="employee" element={<Employee />} />
          <Route path="addemployee" element={<AddEmployee />} />
          <Route path="edit_employee/:id" element={<Edit_employee />} />
          <Route path="payslip" element={<Payslip/>} />


        </Route>
        
      </Routes>
    </>
  )
}

export default App
