import React from 'react'
import PlaybackFooter from '../Components/PlaybackFooter'
import Body from '../Components/Body'

import SidebarPlaylist from '../Components/SidebarPlaylist'

import Header from '../Components/Header'


function PlaybackPage() {
  return (
    <div>

        
   

<SidebarPlaylist/>
     

     <div className='main-container'>
     <Header/>
     <Body/>
     <PlaybackFooter/>
     
     </div>
     



      
    


      
    </div>
  )
}

export default PlaybackPage
