import React, { useState } from "react";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://tradevault-backend-9ehr.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("username", data.user.username);
        localStorage.setItem("email", data.user.email);

        await Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          html: `
            <p><b>Login Successful</b></p>
            <small>Redirecting to your dashboard...</small>
          `,
          timer: 1800,
          timerProgressBar: true,
          showConfirmButton: false,
          confirmButtonColor: "#387ed1",
        });

        window.location.href =
          "https://tradevault-dashboard-jsch.onrender.com/";
      } else {
        await Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message,
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <img src="/logo.png" alt="Kite" className="login-logo" />

        <h2>Login to Kite</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p className="forgot">Forgot user ID or password?</p>
      </div>
    </div>
  );
}

export default Login;
