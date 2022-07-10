import React from "react";

export default function Contact() {
  return (
    // <section id="contact" className="contact">
      <div id="contact" className="container-fluid" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact</h2>
          <p>
            Need Help? <span>Contact Us</span>
          </p>
        </div>

        <div className="mb-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12178.318635062156!2d88.31385730471848!3d23.444839670807994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9034618e9ac9d%3A0x8087d47345b19d3a!2sParulia%20K%20K%20High%20School!5e0!3m2!1sen!2sin!4v1657467573865!5m2!1sen!2sin" 
            style={{ border: "0", width: "100%", height: "350px" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="location map"
          ></iframe>
        </div>

        {/* <div className="row gy-4">
          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-map flex-shrink-0"></i>
              <div>
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-share flex-shrink-0"></i>
              <div>
                <h3>Opening Hours</h3>
                <div>
                  <strong>Mon-Sat:</strong> 11AM - 23PM;
                  <br/><strong>Sunday:</strong> Closed
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    // </section>
  );
}