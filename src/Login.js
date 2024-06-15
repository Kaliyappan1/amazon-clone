// Login.js
import React, { useState } from 'react';
import './login.css';
import Loginimg from './asets/image.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/');
      })
      .catch((error) => navigate('/'));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login_logo' src={Loginimg} alt="Amazon Logo" />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type='submit' onClick={signIn} className='login_signInButton'>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE
          Condition of Use & Sale. Please see our Privacy Notice,
          Our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login_registerButton'>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
