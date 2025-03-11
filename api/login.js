// pages/login.js
import { useState } from "react";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      window.location.href = "/private"; // If password correct, redirect to the private page
    } else {
      const data = await response.json();
      setError(data.message); // Show error message if password is wrong
    }
  };

  return (
    <div>
      <h1>Enter Password to Access the Website</h1>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
