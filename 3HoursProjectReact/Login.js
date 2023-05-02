import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "pass") {
      handleLogin();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br /> <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br /> <br />
        <button type="submit" className="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
