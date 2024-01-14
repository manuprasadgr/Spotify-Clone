import React from 'react'
import '../Style/Style.css'
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";

function Sidebar() {
  return (
    <div>

<div class="sidebar">
        <div className="logo">
            <a href="#">
                <img src="logo.png" alt="logo"/>
            </a>
        </div>

        <div class="navigation">
            <ul>
                <li>
                    
                        <span ><i class="bi bi-house-door"></i></span>

                        <span  className='size' ><Link to="/home">  Home  </Link></span>
                
                </li>


                <li>
                    <a href="#">
                        <span  ><i class="bi bi-search"></i></span>
                        <span  className='size'>Search</span>
                    </a>
                </li>


                <li>
                    <a href="#">
                        <span className="fa fas fa-book" ><i class="bi bi-collection-fill"></i></span>
                        <span className='librarysize' >Your Library</span>
                    </a>
                </li>
            </ul>
        </div>


        <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span className="fa fas fa-plus-square" ><i class="bi bi-plus-lg"></i></span>
                        <span  className='size' >Create Playlist</span>
                    </a>
                </li>


                <li>
                    <a href="#">
                        <span className="fa fas fa-heart" ><i class="bi bi-heart"></i></span>
                        <span className='size'>Liked Songs</span>
                    </a>
                </li>


                
            </ul>
        </div>

        <div class="policies">

            <ul>
                <li>
                    <a href="#">Cookies</a>
                </li>
                <li>
                    <a href="#">privacy</a>
                </li>
            </ul>

        </div>

    </div>


    </div>
  )
}

export default Sidebar
