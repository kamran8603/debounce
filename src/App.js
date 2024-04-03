import React, { useState } from 'react';
import Debounce from './Debounce';

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");

  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/;

  const handleLogin = () => {
    if (!emailRegex.test(username)) {
      setError("Invalid email address");
    } else if (!passwordRegex.test(password)) {
      setError("Password must contain at least 8 characters, including uppercase, lowercase, and numbers");
    } else {
     
      setLogin(true);
    }
  };

  if (login) {
    return (
      <div>
       <Debounce />
      </div>
    );
  }

  return (
    <div>
      <div className="login">
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default App 
