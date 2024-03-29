import React from "react";

export default function Home(props) {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container">
        <a class="navbar-brand" href="#hero">
          <img src="https://bongdessert.s3.amazonaws.com/Bong+Dessert+Logo.png" alt="" width="50" height="50" style={{borderRadius: '50%'}} />
        </a>
        <a className="navbar-brand" href="#hero"><h2 data-aos="fade-up">{props.data.name}</h2></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav my-2">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#menu">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#testimonials">Testimonials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
