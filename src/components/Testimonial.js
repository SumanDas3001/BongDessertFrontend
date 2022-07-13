import React from "react";

export default function Testimonial(props) {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>
            What Are They <span>Saying About Us</span>
          </p>
        </div>

        <div
          className="slides-1 swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="swiper-wrapper">
            {props.data.testimonials.map((testimonial, index) => {
              return <div className="swiper-slide" key={index}>
                <div className="testimonial-item">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6">
                      <div className="testimonial-content">
                        <p>
                          <i className="bi bi-quote quote-icon-left"></i>
                          {testimonial.text}
                          <i className="bi bi-quote quote-icon-right"></i>
                        </p>
                        <h3>{testimonial.user}</h3>
                        {/* <h4>Ceo &amp; Founder</h4> */}
                        <div className="stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 text-center">
                      <img
                        src={`assets/img/testimonials/${testimonial.image}`}
                        className="img-fluid testimonial-img"
                        alt="testimonial"
                      />
                    </div>
                  </div>
                </div>
              </div>
            })}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
