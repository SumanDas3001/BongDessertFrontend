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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12178.318635062156!2d88.31385730471848!3d23.444839670807994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9034618e9ac9d%3A0x8087d47345b19d3a!2sParulia%20K%20K%20High%20School!5e0!3m2!1sen!2sin!4v1657467573865!5m2!1sen!2sin" 
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