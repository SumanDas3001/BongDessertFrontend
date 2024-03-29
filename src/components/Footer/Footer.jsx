import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from "../../assets/images/ahare_cake.png";

import "../../styles/footer.css";
// import { Link } from 'react-router-dom';

const Footer = () => {

  const handleClick = (url) => {
    if (url === 'facebook'){
      window.open('https://www.facebook.com/aharecake', '_blank');
    }else if(url === 'instagram') {
      window.open('https://www.instagram.com/aharecake/', '_blank');

    } else if (url === 'twitter'){
      window.open('https://twitter.com/aharecake', '_blank');
    }
  }

  return (
    <footer className='footer' >
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className="logo py-3 footer_logo text-start">
              {/* <img src="https://bongdessert.s3.amazonaws.com/Ahare+Cake.png" alt="logo"  /> */}
              <img src={logo} alt="logo"  />
              <h5 className='brand__name pt-5 pb-2'>Ahare Cake</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error delectus corrupti quia esse voluptates optio.</p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h4 className='footer__title'>Delivery Time</h4>
            <ListGroup>
              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <span>Monday to Sunday</span>
                <p>Open 24 hours</p>
              </ListGroupItem>
              {/* <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>10:00 AM - 11:00 PM</p>
              </ListGroupItem> */}
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h4 className='footer__title'>Contact</h4>
            <ListGroup>
              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <span>Location: Parulia, Purbasthali, West Bengal 713513</span>
              </ListGroupItem>
              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <span>Phone: +91 9330349714</span>
              </ListGroupItem>
              <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                <span>Email: bongdesserts@gmail.com </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <h4 className='footer__title'>Follow Us:</h4>
            {/* <p>Subscribe our newsletter</p> */}
            {/* <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div> */}
            <div className="social__links d-flex align-items-center gap-4 mt-2">
              {/* <p className='m-0'>Follow Us: </p> */}
              <span>
                {" "}
                  <i className='ri-facebook-line' onClick={() => handleClick('facebook')}></i>
                {" "}
              </span>

              <span>
                <i className='ri-instagram-line' onClick={() => handleClick('instagram')}></i>
              </span>

              <span>
                {" "}
                  <i className='ri-twitter-line' onClick={() => handleClick('facebook')}></i>
                {" "}
              </span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg='12' md='12'>
            <p className='copyright__text text-center'>Copyright - 2022, website made by Ahare Cake Team. All Right Reserved.</p>
          </Col>
          {/* <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className='m-0'>Follow Us: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/muhib160">
                  <i className="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/muhib160">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/muhib160/">
                  <i className="ri-twitter-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col> */}
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
