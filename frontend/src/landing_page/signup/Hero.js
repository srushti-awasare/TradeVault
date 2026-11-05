import React, { useState } from "react";
import "./Signup.css";
import Swal from "sweetalert2";

function Hero() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3002/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        await Swal.fire({
          icon: "success",
          title: "Account Created!",
          html: `
    <p>Your TradeVault account has been created successfully.</p>
    <small>You can now log in and start trading.</small>
  `,
          confirmButtonText: "Continue to Login",
          confirmButtonColor: "#387ed1",
        });

        window.location.href = "http://localhost:3001/login";
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: data.message,
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: error.message || "Please try again later.",
        confirmButtonColor: "#d33",
      });
    }
  };
  return (
    <div className="container">
      <div className="row py-4 border-bottom text-center">
        {" "}
        <h1>Open a free demat and trading account online</h1>
        <h3 className="text-muted mt-3 fs-5 opacity-75">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h3>
      </div>
      <div className="signup-container ">
        <div className="signup-left">
          <img src="media/images/signup_img.jpeg" />
        </div>
        <div className="signup-right">
          <h2>Signup Now</h2>
          <h4 className="opacity-50">or track your existing application</h4>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Create Account</button>{" "}
          </form>
          <p className="terms">
            By proceeding, you agree to the terms & privacy policy
          </p>
          <p className="login-text">
            Already have an account?{" "}
            <a href="http://localhost:3001/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
