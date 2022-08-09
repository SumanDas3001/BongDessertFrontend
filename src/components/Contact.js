import React from "react";

export default function Contact() {
  return (
    <div id="contact">
      <div className="section-header footer-pading" style={{marginTop: '10px'}}>
        <h2>Contact</h2>
        <p>
          <span>Contact Us</span> To Find Out More Or How We Can Help You Better.
        </p>
      </div>
      <div className="mb-0">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d924.9903556831362!2d88.31545133506908!3d23.448021506413735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9032bf3e96743%3A0x2d7742b4ea878b59!2sThe%20Bong%20Dessert!5e0!3m2!1sen!2sin!4v1660054919483!5m2!1sen!2sin" 
          style={{ border: "0", width: "100%", height: "350px" }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="location map"
        ></iframe>
      </div>
    </div> 
  );
}