import React from "react";

export default function Hero(props) {
  return (
    <section id="hero" className="hero d-flex align-items-center section-bg">
      <div className="container">
        <div className="row justify-content-between gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
            <h2 data-aos="fade-up">
              Enjoy Our Testy
              <br />
              Cake's
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              {props.data.bannerContent} 
            </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href={`tel://${props.data.phone}`} className="btn-book-a-table">
                <i className="fa fa-phone" style={{fontSize:'20px'}}> Order Now</i>
              </a>
              {/* <a href="https://wa.me/9330349714" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-whatsapp whatsapp-icon" style={{fontSize:'20px'}}></i>
              </a> */}
              {/* <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a> */}
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img
              src="assets/img/slashio-photography-0uBlylsBuWk-unsplash-removebg-preview.png"
              className="img-fluid"
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}