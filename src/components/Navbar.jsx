import React from "react";

export default function Home() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="#hero">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav my-2">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#hero">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#menu">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#testimonials">Testimonials</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
