import React from "react";
import styled from "styled-components";
import logo from "../assets/FoodYummy.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <div id="contact">
      <div className="section-header footer-pading" style={{marginTop: '10px'}}>
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
      <div className="footer">
        <Section>
          <div className="brand container">
            <img src={logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
              repudiandae.
            </p>
            <ul>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <FaFacebookF />
              </li>
            </ul>
          </div>
          <div className="about container">
            <div className="title">
              <h3>About Us</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              eligendi repellat laudantium blanditiis iure nulla, ut aliquam
              itaque unde nesciunt cum veritatis perferendis vel expedita! Nam
            </p>
          </div>
          <div className="contact container">
            <div className="title">
              <h3>Contact Us</h3>
            </div>
            <p><a href="tel://+1234567890" className="text-white">+91 1231231231</a></p>
            {/* <p>+91 1231231231</p> */}
            {/* <p>dewanscake@gmail.com</p> */}
            <p>@dewanscake</p>
            <p>Purbasthali, West Bengal</p>
          </div>
        </Section>
      </div>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  // background: linear-gradient(to right, #fc4958, #se85d04);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    padding-left: 0rem;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;