import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="btn btn-primary" to="/my-portfolio">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="btn btn-success" to="contact">
                  Contact
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="btn btn-danger" to="projects">
                  Project Gallery
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
