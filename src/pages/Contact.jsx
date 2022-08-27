import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/product-details.css";



const Contact = () => {

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [reviewMsg, setReviewMsg] = useState("");

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   console.log(enteredName, enteredEmail, reviewMsg);
  // };

  return (
    <Helmet title='Contact'>
      <CommonSection title='Contact' />
      <section>
        <Container>
          <Row>
            <h2 className='text-center'>Contact Us</h2>
            <p className='text-center'>
              <span>Contact Us</span> To Find Out More Or How We Can Help You Better.
            </p>
            <Col lg='12' md='12' sm='12' xs='12' className='mt-5'>
              <div className="section-header footer-pading">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d924.9903556831362!2d88.31545133506908!3d23.448021506413735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9032bf3e96743%3A0x2d7742b4ea878b59!2sThe%20Bong%20Dessert!5e0!3m2!1sen!2sin!4v1660054919483!5m2!1sen!2sin" 
                  style={{ border: "0", width: "100%", height: "420px" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="location map"
                ></iframe>
              </div>
            </Col>
            {/* <Col lg='12' md='12' sm='12' xs='12' className='mb-5'>
              <form className="form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setEnteredName(e.target.value)}
                    required
                  />
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    onChange={(e) => setEnteredEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form__group">
                  <textarea
                    rows={5}
                    type="text"
                    placeholder="Write your review"
                    onChange={(e) => setReviewMsg(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="addTOCart__btn">
                  Submit
                </button>
              </form>
            </Col> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Contact
