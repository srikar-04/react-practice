import React, { useState, useContext } from "react";
import userContext from "../context/UserContext";

function login() {
  const [username, setUsername] = useState("");
  const [password, setPssword] = useState("");

  const {setUser} = useContext(userContext)


  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  };

  return (
    <div>
      <h2>login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />

      <input
        value={password}
        onChange={(e) => setPssword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default login;
