import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  FaChartLine,
  FaClipboardList,
  FaWallet,
  FaExchangeAlt,
} from "react-icons/fa";

function Navbar() {
  const menuRef = useRef();

  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetch("https://tradevault-backend-9ehr.onrender.com/api/auth/check", {
      credentials: "include",
    })
      .then((res) => {
        setIsLoggedIn(res.ok);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);

  const goToDashboard = (path) => {
    window.location.href = `http://localhost:3001${path}`;
  };

  const handleLogout = async () => {
    try {
      await fetch(
        "https://tradevault-backend-9ehr.onrender.com/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        },
      );

      localStorage.removeItem("token");
      localStorage.removeItem("username");

      window.location.href = "http://localhost:3000/";
    } catch {
      // Logout failed
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container py-2">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/tradevault.jpeg"
            className="navbar-logo"
            alt="Tradevault"
          />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars className="mobile-menu-icon" />
        </button>
        {/* NAVIGATION */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link text-muted" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted" to="/products">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-muted" to="/support">
                Support
              </Link>
            </li>

            {/* MENU */}
            <li className="nav-item position-relative ms-lg-3" ref={menuRef}>
              <button
                type="button"
                className="menu-button"
                onClick={() => setShowMenu(!showMenu)}
                aria-label="Open trading menu"
              >
                <span className="menu-dots">•••</span>
              </button>

              {showMenu && (
                <div className="mega-menu">
                  {/* TOP MENU */}
                  <div className="top-section">
                    <div
                      className="menu-card"
                      onClick={() => goToDashboard("/")}
                    >
                      <FaChartLine className="menu-logo-icon" />

                      <h5>Kite</h5>

                      <p>Trading platform</p>
                    </div>

                    <div
                      className="menu-card"
                      onClick={() => goToDashboard("/orders")}
                    >
                      <FaClipboardList className="menu-logo-icon" />

                      <h5>Orders</h5>

                      <p>Your order history</p>
                    </div>

                    <div
                      className="menu-card"
                      onClick={() => goToDashboard("/holdings")}
                    >
                      <FaWallet className="menu-logo-icon" />

                      <h5>Holdings</h5>

                      <p>Your investments</p>
                    </div>

                    <div
                      className="menu-card"
                      onClick={() => goToDashboard("/positions")}
                    >
                      <FaExchangeAlt className="menu-logo-icon" />

                      <h5>Positions</h5>

                      <p>Track positions</p>
                    </div>
                  </div>

                  {/* BOTTOM MENU */}
                  <div className="bottom-section">
                    <div onClick={() => goToDashboard("/watchlist")}>
                      Watchlist
                    </div>

                    <div onClick={() => goToDashboard("/funds")}>Funds</div>

                    {isLoggedIn ? (
                      <div onClick={handleLogout}>Logout</div>
                    ) : (
                      <div onClick={() => goToDashboard("/login")}>Login</div>
                    )}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
