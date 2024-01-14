import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import Body from '../Components/Body'
import Rooter from '../Components/Rooter'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function FacePage() {
  return (

    <div>

<Sidebar/>
     

     <div className='main-container'>
     <Header/>
     <Body/>
     <Rooter/>
     </div>
     



      
    </div>
  )
}
