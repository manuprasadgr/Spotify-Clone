import React from 'react'

export default function PlaybackFooter() {
  return (
    <div>

        
    <div className="footer">    
        
  
        
        <div className="left">
            <div className="song-info">
                <img src="playlist (1).jpeg" alt="loading"/>
            </div>
                <div className="details">
                   <h5>Dynamite</h5>
                    <div>
                        BTS
                    </div>
               </div>
        </div>



        <div className="music-playbar">

            
        
            <div className="playbar-icons">

                <i className="bi bi-shuffle"></i>

                <i className="bi bi-skip-start-fill"></i>

                <i className="bi bi-play-circle-fill"></i>

                <i className="bi bi-skip-end-fill"></i>

                <i className="bi bi-repeat"></i>

            </div>

         
            
            <div className="music-duration">
               
                <div id="music-start">
                    -:--
                </div>
                   
                    <div className="bar">
                      <input type="range" id="seek"/>
                    </div>
                
                    <div id="music-end">
                    -:--
                </div>

            </div>

        </div>


        
        <div className="music-volume">

            <i className="bi bi-play-btn"></i>

            <i className="bi bi-collection"></i>

            <i className="bi bi-pc-display"></i>

            <i className="bi bi-volume-down"></i>

            <div className="volume-bar">
                
                <input type="range" id="seek"/>

            </div>

        </div>

    </div>






      
    </div>
  )
}
