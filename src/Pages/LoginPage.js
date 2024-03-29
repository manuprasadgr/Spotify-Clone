import React from 'react'
import Loginheader from '../Components/LoginHeader'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div>
        <Loginheader/>

        <section>
    <div className='main-container-login'>
<h1> Log in to Spotify</h1>
<div className='account-login'>
    <button className='account-login-btn' id='google' >
        <img src='google.jpg' /><span> Continue with Google </span>
    </button>
    <button className='account-login-btn' id='facebook' >
        <img src='facebook.jpg' /><span> Continue with Facebook </span>
    </button>
    <button className='account-login-btn' id='apple' >
        <img src='apple.jpg' /><span> Continue with Apple</span>
    </button>
    <button className='account-login-btn' id='number' >
    <span> Continue with phone number</span>
    </button>
  
    </div>
    <hr/>


<div className='log-in'>
    <form>
        <label>Email or username</label>
        <input type='text' placeholder='Email or username'></input>
        <label>Password</label>
        <input type='text' placeholder='Password'></input>

        <div className='switch' >
            <input type='checkbox' id='switch' />
            <label for='switch'></label>
            <span>Remember me</span>
        </div>
        <button> <Link to="/playbackpage"  > Log In  </Link> </button>
        <span className='forgot'>Forgot your Password?</span>

    </form>
</div>
<hr/>


<div className='last-qtn'>
    <div className='qtn'>Don't you have an account?</div>
    <span>Sign up for Spotify</span>
</div>
    </div>

 </section>




      
    </div>
  )
}
