import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/orders", label: "Orders" },
  { to: "/holdings", label: "Holdings" },
  { to: "/positions", label: "Positions" },
  { to: "/funds", label: "Funds" },
  { to: "/apps", label: "Apps" },
];

const API = "https://tradevault-backend-9ehr.onrender.com";
const FRONTEND = "https://tradevault-frontend-5knf.onrender.com";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [user, setUser] = useState(null);

  const profileRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    let active = true;

    fetch(`${API}/api/auth/check`, {
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Not authenticated");
        return res.json();
      })
      .then((data) => {
        if (!active) return;
        setUser(data.user);
        localStorage.setItem("username", data.user.username);
        localStorage.setItem("email", data.user.email);
      })
      .catch(() => {
        if (!active) return;

        setUser(null);
        localStorage.removeItem("username");
        localStorage.removeItem("email");
      });

    return () => {
      active = false;
    };
  }, []);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen || window.innerWidth > 768) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      const response = await fetch(`${API}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) throw new Error("Logout failed");

      setUser(null);
      localStorage.removeItem("username");
      localStorage.removeItem("email");

      window.location.replace(FRONTEND);
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
      window.alert("Unable to log out. Please try again.");
    }
  };

  const username = user?.username || "USERID";

  return (
    <div className="menu-container" ref={menuRef}>
      <NavLink
        to="/"
        className="menu-logo-link"
        aria-label="Kite dashboard"
        onClick={closeMenus}
      >
        <img src="/logo.png" alt="Kite logo" className="menu-logo" />
      </NavLink>

      <button
        type="button"
        className="hamburger"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="kite-navigation"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      <div
        id="kite-navigation"
        className={`menus ${isMobileMenuOpen ? "open" : ""}`}
      >
        <nav aria-label="Main navigation">
          <ul>
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    isActive ? "menu selected" : "menu"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="profile-wrapper" ref={profileRef}>
          <button
            type="button"
            className="profile"
            aria-expanded={isProfileDropdownOpen}
            aria-haspopup="true"
            onClick={() => setIsProfileDropdownOpen((prev) => !prev)}
          >
            <span className="avatar">
              {username.substring(0, 2).toUpperCase()}
            </span>
            <span className="username">{username}</span>
          </button>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              {user ? (
                <>
                  <div className="profile-info">
                    <div className="profile-avatar">
                      {username.charAt(0).toUpperCase()}
                    </div>
                    <div className="profile-details">
                      <h5>{username}</h5>
                      <small>{user.email}</small>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="logout-btn"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                  >
                    {isLoggingOut ? "Logging out..." : "🚪 Logout"}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="logout-btn"
                  onClick={() =>
                    window.location.replace(`${window.location.origin}/login`)
                  }
                >
                  Login
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
