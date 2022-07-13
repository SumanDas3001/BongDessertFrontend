import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>
            Learn More <span>About Us</span>
          </p>
        </div>

        <div className="row gy-4">
          <div
            className="col-lg-12 d-flex align-items-end"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                We are makes it easy to delight your family, friends and colleagues with our freshly baked desserts delivered right to their doorstep ready to enjoy.  Our experienced bakers mix all of our batters and frostings by hand, just like grandma used to make.  We always bake with whole buttermilk, fresh eggs and real butter – never a cake mix or commercially made frostings.  
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check2-all"></i> Duis aute irure dolor in
                  reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              {/* <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
