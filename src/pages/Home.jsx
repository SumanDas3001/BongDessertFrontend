import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet.js'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

import heroImg from '../assets/images/HeroImage.png';
import '../styles/hero-section.css';

import { Link } from 'react-router-dom';
import Category from "../components/UI/category/Category.jsx";
import products from "../assets/fake-data/products.js";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import foodCategoryImg01 from "../assets/images/cake.png";
import foodCategoryImg02 from "../assets/images/cupcake.png";
import foodCategoryImg03 from "../assets/images/mousse.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import whyImg from "../assets/images/profile_picture.jpg";

// import networkImg from "../assets/images/network.png";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
// import axios from "axios";


const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Nothing can slow us down.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Will.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Ahare Cake will bring it to your doorstep with pull me up cake delivery",
  },
];

const Home = () => {

  const [category, setCategory] = useState("CELEBRATION_CAKES");
  const [allProducts, setAllProducts] = useState(products);
  const [popularCake, setPopularCake] = useState([]);


  // const [APIData, setAPIData] = useState([])
  // const backend_url = 'http://localhost:3001/admin/products.json'
  // useEffect(() => {
  //   axios.get(backend_url)
  //     .then((response) => {
  //       console.log(response.data[0].price)
  //       console.log(response.data[0].description.body)
  //       setAPIData(response.data);
  //     })
  //     .catch(error => console.log(error))
  // }, []);

  useEffect(() => {
    const filteredCake = products.filter((item) => item.category === "Celebration Cakes");
    const cake = filteredCake.slice(0, 4);
    setPopularCake(cake);
  }, []);

  useEffect(() => {
    // if(category === 'ALL'){
    //   setAllProducts(products)
    // }

    if (category === 'CELEBRATION_CAKES') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Celebration Cakes'
      );
      setAllProducts(filteredProducts.slice(0, 20))
    }

    if (category === 'CUP_CAKES') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Cup Cakes'
      );
      setAllProducts(filteredProducts.slice(0, 20))
    }

    if (category === 'MOUSSE') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Mousse'
      );
      setAllProducts(filteredProducts.slice(0, 20))
    }
  }, [category])

  const handleClick = (url) => {
    if (url === 'order') {
      window.open('https://wa.me/919330349714', '_blank');
    }
  }


  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='mb-4 hero__title'>
                  <span>HUNGRY?</span> Just wait <br /> cake at
                  <span> your door</span>
                </h1>

                <p>
                  We are thrilled to offer you our hand made freshly made Cake's in a wide range of variations.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between" onClick={() => handleClick('order')}>
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all cakes</Link>
                  </button>
                </div>

                <div className='hero__service  d-flex align-items-center gap-5 mt-5'>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>
                  <p className='d-flex align-items-center gap-2'>
                    <span className='shipping__icon'>
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__image">
                <img src={heroImg} alt="hero-img" className='w-100' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Birthday Cakes - Wedding Cakes OR Just a simple Cake | Gift cakes Home Delivery to your Place | Same day Delivery | Schedule your Cake Delivery | ORDER NOW!.
              </p>
              {/* <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p> */}
            </Col>

            {featureData.map((item, index) => (
              <Col lg='4' md='6' sm='6' key={index} className="mt-5">
                <div className='feature__item text-center px-5 py-3'>
                  <img
                    src={item.imgUrl}
                    alt='feature-img'
                    className='w-25 mb-3'
                  />
                  <h5 className='fw-bold mb-3'>{item.title}</h5>
                  {/* <p>{item.desc}</p> */}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2>Popular Cake</h2>
            </Col>

            <Col lg='12'>
              <div className='food__category d-flex align-items-center justify-content-center gap-4'>
                {/* <button className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button> */}
                <button className={`d-flex align-items-center gap-2 ${category === "CELEBRATION_CAKES" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("CELEBRATION_CAKES")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Celebration Cakes
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${category === "CUP_CAKES" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("CUP_CAKES")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Cup Cakes
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${category === "MOUSSE" ? "foodBtnActive" : ""
                    } `}
                  onClick={() => setCategory("MOUSSE")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Mousse
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Ahare Cake?</span>
                </h2>
                <p className="tasty__treat-desc">
                  We are makes it easy to delight your family, friends and colleagues with our freshly baked desserts delivered right to their doorstep ready to enjoy.
                  Our experienced bakers mix all of our batters and frostings by hand, just like grandma used to make.
                  We always bake with whole buttermilk, fresh eggs and real butter – never a cake mix or commercially made frostings.
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Fresh and tasty
                      cake's
                    </p>
                    <p className="choose__us-desc">
                      Cakes available in our bakery are always fresh, soft, moist, mushy, and puffy in texture. We have delicious cakes to brighten up your every events.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i> Custom cake
                    </p>
                    <p className="choose__us-desc">
                      Ahare Cake offers customized designer cakes for birthdays, anniversaries, parties, meetups, weddings and every event or ocassions.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i>Reasonable price{" "}
                    </p>
                    <p className="choose__us-desc">
                      Not only are we best at what we do, but we also offer cakes at relatively affordable prices along with same-day cake delivery options.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i className="ri-checkbox-circle-line"></i>Order from any
                      location{" "}
                    </p>
                    <p className="choose__us-desc">
                      Looking for the best online cake order delivery service? Look no further! Order from Ahare Cake.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Featured Products</h2>
            </Col>

            {popularCake.map((item) => (
              <Col lg="3" md="4" sm='6' xs='6' key={item.id} className='mt-5'>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" md="12" className='mb-5 mt-5'>
              <div className="testimonial ">
                <h5 className="testimonial__subtitle text-center mb-4">Customer Review</h5>
                <h2 className="testimonial__title text-center mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc text-center">
                  Every Review are important for us, it help us to improve the quality our products and services.
                  We Thank you so much for sharing your experience with us
                </p>

                <TestimonialSlider />
              </div>
            </Col>

            {/* <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col> */}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
