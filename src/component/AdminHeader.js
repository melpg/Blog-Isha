import React, { Component } from 'react';
import './Header.css';

import { Link } from 'react-router-dom';


class AdminHeader extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-sm bg-light navbar-light" id="navbar">
          <div className="container">
            <Link className="navbar-brand" to={'/Admin/Gallerys'}><img src="https://i.ibb.co/Trc7Gqv/logo2.jpg" alt="logo" id="image" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/Admin/Gallerys">Home</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="/Admin/ImageList">GalleryList</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link" href="/#contact">Contact</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
export default AdminHeader;