import React from 'react'
import SidebarPlaylist from '../Components/SidebarPlaylist'
import HeaderPlaylist from '../Components/HeaderPlaylist'
import MusicPlaylistPage from '../Components/MusicPlaylistPage'
import PlaybackFooter from '../Components/PlaybackFooter'

export default function MusicPage() {
  return (
    <div>


<SidebarPlaylist/>

<div className='main-container'>
    <HeaderPlaylist/>
    <MusicPlaylistPage/>
    <PlaybackFooter/>

</div>



      
    </div>
  )
}
