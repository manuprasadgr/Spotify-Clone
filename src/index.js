import React from 'react';
import ReactDOM from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import FacePage from './Pages/FacePage';
import Loginheader from './Components/LoginHeader';
import LoginPage from './Pages/LoginPage';
import SpotyfyRouter from './SpotyfyRouter/SpotyfyRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <SpotyfyRouter/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
