import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  console.log(setUser, "this is setUser in login component");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!username || !password) {
      alert("Please fill out all fields");
      return;
    }

    // Set user data in context (not recommended for passwords in real apps)
    setUser({ username });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
