import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FacePage from '../Pages/FacePage';
import LoginPage from '../Pages/LoginPage';
import PlaybackPage from '../Pages/PlaybackPage';
import MusicPage from '../Pages/MusicPage';
import SearchAPI from '../Pages/SearchAPI';


function SpotyfyRouter() {
  return (
   
        <Router>
    
     
      <Routes>
        <Route path="/" element={ <SearchAPI/>} />
        <Route path="/home" element={ <FacePage/>} />
        <Route path="/playbackpage" element={<PlaybackPage/>} />
        <Route path="/loginpage" element={<LoginPage/>} />
        <Route path="/MusicPage" element={<MusicPage/>}/>
        <Route path="/SearchAPI" element={<SearchAPI/>}/>
        <Route path="/Facepage" element={<FacePage/>}/>

      </Routes>

  </Router>
      
      

    
  )
}

export default SpotyfyRouter
