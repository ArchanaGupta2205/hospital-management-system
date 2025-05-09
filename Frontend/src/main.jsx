import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const GlobalStyle = createGlobalStyle`

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   
    <BrowserRouter>

      <App />
<ToastContainer/>
    </BrowserRouter>

  </>
)
