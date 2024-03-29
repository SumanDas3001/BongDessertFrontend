import React, { useState, useEffect } from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

// import { useDispatch } from "react-redux";
// import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";

import ProductCard from "../components/UI/product-card/ProductCard";

const FoodDetails = () => {
  // const [tab, setTab] = useState("desc");
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  // const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const shareUrl = window.location.href;
  // const addItem = () => {
  //   dispatch(
  //     cartActions.addItem({
  //       id,
  //       title,
  //       price,
  //       image01,
  //     })
  //   );
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   console.log(enteredName, enteredEmail, reviewMsg);
  // };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const handleClick = (url) => {
    if (url === 'order'){
      window.open('https://wa.me/919330349714', '_blank');
    }
  }

  // const openWhatsApp = () => {
  //   window.open(`https://web.whatsapp.com/send?text=${desc}`);
  // }

  return (
    <Helmet title="Product-details">
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            {/* <Col lg="2" md="2">
              <div className="product__images ">
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image01)}
                >
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div
                  className="img__item mb-3"
                  onClick={() => setPreviewImg(product.image02)}
                >
                  <img src={product.image02} alt="" className="w-50" />
                </div>

                <div
                  className="img__item"
                  onClick={() => setPreviewImg(product.image03)}
                >
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col> */}

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="8" md="8" mb='8' className="mb-5">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {" "}
                  Price: <span>₹{price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>

                <p className="descrption mb-5">
                  <h6>Description:</h6> <span>{desc}</span>
                </p>

                {/* <button onClick={addItem} className="addTOCart__btn">
                  Add to Cart
                </button> */}

                <p className="category mb-5">
                  Social share:
                  <FacebookShareButton
                    url={shareUrl}
                    quote={desc}
                    hashtag={'#aharecake'}
                  >
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>

                  <WhatsappShareButton
                    url={shareUrl}
                    quote={desc}
                    hashtag={'#aharecake'}
                  >
                    <WhatsappIcon size={40} round={true} />
                  </WhatsappShareButton>
                  <TwitterShareButton
                    url={shareUrl}
                    quote={desc}
                    hashtag={'#aharecake'}
                  >
                    <TwitterIcon size={40} round={true} />
                  </TwitterShareButton>
                </p>

                <button onClick={() => handleClick('order')} className="addTOCart__btn">
                  Order
                </button>


                {/* <img src= "https://image.freepik.com/free-vector/whatsapp-icon-design_23-2147900927.jpg" onClick={openWhatsApp} />   */}

                {/* <a
                  href={`https://web.whatsapp.com/send?text=${desc}`}
                  rel="nofollow noopener" target="_blank"
                  className="share-icon"><img src={`${previewImg}`} style={{height:'36px'}}/>Share via Whatsapp
                </a> */}
              </div>
            </Col>

            {/* <Col lg="12" md='12' sm='12' className="py-5">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={` ${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Product Description
                </h6>
                <h6
                  className={` ${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div>

                  <div className="review">
                    <p className="user__name mb-0">Jhon Doe</p>
                    <p className="user__email">jhon1@gmail.com</p>
                    <p className="feedback__text">great product</p>
                  </div> 
                  <form className="form" onSubmit={submitHandler} >
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
                </div>
              )}
            </Col> */}

            <Col lg="12" className="mb-5 mt-5">
              <h2 className="related__Product-title text-center">You may also like</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm='6' xs='6' className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
