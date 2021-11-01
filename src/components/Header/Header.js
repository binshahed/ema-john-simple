import logo from "../../images/logo.png";
import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, handleSignOut } = useAuth()
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>

        
        {
          user.email ? <button className="btn text-warning" onClick={handleSignOut}>Log Out</button> : (
            <Link className="text-warning" to="/login">Login</Link>
          )
        }
        {
          user.email && <span className="text-light">{user.displayName}</span>
        }
      </nav>
    </div>
  );
};

export default Header;
