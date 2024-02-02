import React, { useState } from 'react';
import Logotheme from './Logo/Logotheme';
import './index.css';

const Login = (props) => {
  const [username, setUsername] = useState('guest');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div classname="container">
    {/* <Logotheme /> */}
    <form onSubmit={handleSubmit}>
    
      <h5>{props.title}</h5>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign in</button>
    </form>
    </div>
  );
};

export default Login;