import React from 'react'
import '../Style/Style.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

export default function SidebarPlaylist() {
  return (
    <div>

        
<div className="playback-page-sidebar">
        <div className="top-side">
            <div> <i className="bi bi-house-door"></i>
                <span>Home</span>
            </div>
            <div> <i className="bi bi-search"></i>
                <span> <Link to="/SearchAPI">Search </Link>  </span>
            </div>
        </div>
        <div className="bottom-side">
            <div className="library">
                <div><i className="bi bi-collection"></i>
                    <span> Your Library</span>
                    <button className="row1">
                        <i className="bi bi-arrow-right"></i>
                    </button><button className="row1">
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </div>
                <div>
                    <button className="row2">Playlists</button>
                    <button className="row2">Prodcasts &Show</button>
                </div>
                <div className="Recents">
                    <i className="bi bi-search"></i>
                    <span>
                        <i className="bi bi-list-ul"></i>
                    </span>
                    <span>Recents</span>
                </div>
            </div>
            
            <div className="music-folders">
               
                <div className="folder">
                    <div>
                        <img src="playlist (1).jpeg" alt="loading"/>
                    </div>
                    <div className="details">
                        <li className="name">liked songs</li>
                        <li className="about">playlist</li>
                    </div>
                </div>
             
                
                <div className="folder">
                    <div>
                        <img src="playlist (1).jpeg" alt="loading"/>
                    </div>
                    <div className="details">
                        <li className="name"> <Link to="/MusicPage"> liked songs </Link>  </li>
                        <li className="about">playlist</li>
                    </div>
                </div>
                <div className="folder">
                    <div>
                        <img src="playlist (1).jpeg" alt="loading"/>
                    </div>
                    <div className="details">
                        <li className="name">liked songs</li>
                        <li className="about">playlist</li>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}
