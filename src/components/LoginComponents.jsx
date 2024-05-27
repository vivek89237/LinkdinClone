import React from 'react';
import '../sass/LoginComponent.scss';
import {LoginAPI} from '../api/AuthAPI';

function LoginComponents() {
  return (
    <div>
        <h1>LoginComponents</h1>
        <button className='login-btn'>Login</button>
    </div>
    
  )
}

export default LoginComponents