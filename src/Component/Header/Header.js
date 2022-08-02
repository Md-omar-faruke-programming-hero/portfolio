import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import "./Header.css"

const Header = () => {
    return (
        <nav class="  navbar navbar-expand-lg navbar-light mb-5 ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse container" id="navbarTogglerDemo01">
        <Fade left>
          <h1>Welcome</h1>
        </Fade>
      <ul class=" navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="aa nav-link active me-3 shadow-lg  " aria-current="page" to="/home">Home</Link>
        </li>
        
        <li class="nav-item">
          <Link class=" aa nav-link me-3 shadow-lg " to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="aa nav-link me-3 shadow-lg" to="/projects">Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="aa nav-link me-3 shadow-lg" to="/blog">Blogs</Link>
        </li>
        <li class="nav-item">
          <Link class="aa nav-link me-3 shadow-lg" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
          <a href="https://drive.google.com/file/d/1aBx7r6qHee6SzBkNfHMLI1uFVxVI4Ib0/view?usp=sharing" rel="noreferrer">
              <button className="btn btn-secondary ms-5">Resume</button>
          </a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    );
};

export default Header;