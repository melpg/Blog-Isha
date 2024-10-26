import React, { Component } from 'react';
import './Header.css';
import './Home/Slider';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-light navbar-light" id="navbar">
          <div className="container">
            <Link className="navbar-brand" to={'/'}><img src="https://i.ibb.co/Trc7Gqv/logo2.jpg" alt="logo" id="image" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to={'#services'}>Services</Link> */}
                  <a className="nav-link" href="/#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#review">Reviews</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#contact">Contact</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={'/Home/Gallery'}>Gallery</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
export default Header