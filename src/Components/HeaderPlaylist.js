import React from 'react'
import '../Style/Style.css'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function HeaderPlaylist() {
  return (
    <div>

        
    <div class="topbar-playlist">
        <div class="prev-next-buttons">
            <button type="button" class="fa fas fa-chevron-left"> </button>

            <button type="button" class="fa fas fa-chevron-right"> </button>


        </div>
        <div class="navbar">

            <button class="premium">
                Explore Premium 
            </button>

            <button class="install-app">
                 Install App 
            </button>

            <i class="bi bi-bell"></i>

            <i class="bi bi-person"></i>

        </div>

      


    </div>

        

    </div>
  )
}
