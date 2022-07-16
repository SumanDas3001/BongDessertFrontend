import React from "react";
export default function Footer(props) {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex">
            <i className="bi bi-geo-alt icon"></i>
            <div>
              <h4>Address</h4>
              <p>
                {`${props.data.address.street}, ${props.data.address.city}, ${props.data.address.state} ${props.data.address.zip}`}<br/>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 footer-links d-flex">
            <i className="bi bi-telephone icon"></i>
            <div>
              <h4>For Order</h4>
              <p>
                <strong>Phone:</strong> <a href={`tel://${props.data.phone}`} className="text-white">{props.data.phone}</a><br/>
                <strong>Email:</strong> {props.data.email}<br/>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 footer-links">
            <h4>Follow Us</h4>
            <div className="social-links d-flex">
              <a href="https://www.facebook.com/thebongdessert" className="facebook" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/moumitadewan301/" className="instagram" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>{props.data.name}</span></strong>. All Rights Reserved
        </div>
      </div>
    </div>
  );
}