import React, { useState } from 'react'
import './login.css'
import Loginimg from './asets/image.png'
import { Link } from 'react-router-dom'

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login_logo' src={Loginimg} alt="" />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form >
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button className='login_sinInButton'>Signin</button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE 
          Condition of Use & Sale. Please see our Privacy Notice, 
          Our cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className='login_registerButton'>Create your amazon account</button>
      </div>
    </div>


  )
}

export default Login