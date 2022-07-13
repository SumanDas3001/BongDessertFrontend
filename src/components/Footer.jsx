import React from "react";
export default function Footer() {
  return (
    <>
      <div id="contact">
        <div className="section-header footer-pading" style={{marginTop: '10px'}}>
          <h2>Contact</h2>
          <p>
            <span>Contact Us</span> To Find Out More Or How We Can Help You Better.
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
      </div>  
      <div id="footer" className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon"></i>
              <div>
                <h4>Address</h4>
                <p>
                  Parulia, Purbasthali, Purba Bardhaman, West Bengal 713513<br/>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-links d-flex">
              <i className="bi bi-telephone icon"></i>
              <div>
                <h4>For Order</h4>
                <p>
                  <strong>Phone:</strong> <a href="tel://+1234567890" className="text-white">+91 1231231231</a><br/>
                  {/* <strong>Email:</strong> info@example.com<br/> */}
                </p>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-clock icon"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat: 11AM</strong> - 23PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </div> */}

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="/" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
                <a href="/" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Hungry Bakery</span></strong>. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}