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

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const profileRef = useRef(null);
  const menuRef = useRef(null);

  const username = localStorage.getItem("username") || "USERID";

  // Close dropdowns when clicking outside
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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when returning to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background page scrolling while mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen || window.innerWidth > 768) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      const response = await fetch(
        "https://tradevault-backend-9ehr.onrender.com/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        },
      );

      if (!response.ok) {
        throw new Error("Logout request failed");
      }

      localStorage.removeItem("username");
      localStorage.removeItem("email");

      window.location.href = "http://localhost:3000/";
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
      window.alert("Unable to log out. Please try again.");
    }
  };

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
              <div className="profile-info">
                <div className="profile-avatar">
                  {username.charAt(0).toUpperCase()}
                </div>

                <div className="profile-details">
                  <h5>{username}</h5>
                  <small>{localStorage.getItem("email") || ""}</small>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
