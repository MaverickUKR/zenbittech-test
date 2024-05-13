import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <header className="header">
      <nav className="btns-wrapper">
        {location.pathname !== "/login" && !isLoggedIn && (
          <>
            <Link to="/login">
              <button className="button login">Log In</button>
            </Link>
            <button className="button signup">Sign Up</button>
          </>
        )}
        {isLoggedIn && (
          <Link to="/" onClick={handleLogout}>
            <button className="button login">Sign Out</button>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
