import { React } from 'react';
import "../assets/css/Navbar.css";

import logo from '../assets/images/bixfer_logo_w.png';

// import useScript from "../assets/js/hooks/useScript";

import 'bootstrap/dist/css/bootstrap.min.css';

import ApiService from "../services/ApiService";
const baseUrl = ApiService("baseUrl");

let pathname = window.location.pathname;


function Navbar(props) {
//   useScript("https://use.typekit.net/foobar.js")

    // const { location } = this.props;
    // const { location } = window.location;

    console.log(pathname);
    pathname = window.location.pathname;
    let homeClass = pathname === '/' ? 'active' : '';
    let aboutClass = pathname === '/about' ? 'active' : '';
    let contactClass = pathname === '/contact' ? 'active' : '';
    let loginClass = pathname === '/login' ? 'active' : '';


  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbarScroll navbar-dark navbarDark">
        <div className="container">
          <a className="navbar-brand" href={baseUrl + "/"}>
         <h1 className="h3"><img src={logo} height="60px" width="60px" className="mx-1" alt="BiXfer Logo"/><a href={baseUrl + "/"}>BiXfer</a></h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className={"nav-item " + homeClass}>
                <a className="nav-link" aria-current="page" href={baseUrl + "/"}>
                  Home
                </a>
              </li>
              <li className={"nav-item " + aboutClass}>
                <a className="nav-link" href={baseUrl + "/about"}>
                  About
                </a>
              </li>
              <li className={"nav-item " + contactClass}>
                <a className="nav-link" href={baseUrl + "/contact"}>
                  Contact
                </a>
              </li>
              <li className={"nav-item " + loginClass}>
                <a className="nav-link" href={baseUrl + "/login"}>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

    </div>
  );
}

export default Navbar;
/*
import { Link } from "react-router-dom";
*/

/*
      <ul>
        <li>
          <Link className="nav-link" aria-current="page" to="/">
            Home{" "}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About Us{" "}
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact{" "}
          </Link>
        </li>
      </ul>
*/
