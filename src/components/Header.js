import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header id="masthead" className="site-header">
        <div className="site-branding">
          <span className="site-title">
            <Link to="/" className="site-title-link img-fluid"></Link>
          </span>
          <h2 className="site-description">꿈을 키우는 세상</h2>
        </div>
        <nav className="main-menu">
          <ul id="menu-menu-1" className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/booklist"}>
                Booklist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/bookdetail/1"}>
                Bookdetail
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/team"}>
                Team
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
