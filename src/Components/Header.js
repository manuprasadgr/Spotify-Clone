import React from 'react'
import '../Style/Style.css'
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  return (
    <div>




<div className="topbar">
    <div className="prev-next-buttons">
        <button type="button" class="fa fas fa-chevron-left"> <i class="bi bi-chevron-left"></i></button>
        
        <button type="button" class="fa fas fa-chevron-right"> <i class="bi bi-chevron-right"></i></button>


    </div>
    <div className="navbar">
        <ul>
            <li>
                <a href="#"> Premium</a>
            </li>
            <li>
                <a href="#"> Support</a>
            </li>
            <li>
                <a href="#"> Download</a>
            </li>
            <li class="devider">|</li>
             
            <li>
                <a href="#">Sign Up</a>
            </li>
        </ul>
        <button > <Link to="/loginpage" className='loginLink'> Log In  </Link> </button>
    </div>


</div>

      
    
    </div>
  )
}

export default Header
