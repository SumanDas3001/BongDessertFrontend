import React from "react";
import Slider from "react-slick";


import ava01 from "../../../assets/images/testimonials/avatar1.jpeg";
import ava02 from "../../../assets/images/testimonials/avatar2.jpeg";
import ava03 from "../../../assets/images/testimonials/avatar3.jpeg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text text-center">
          "One of the greatest places I've ever visited.
          The cakes were so tasty and the behaviour of the owner is so nice.
          The Cakes were beautifully decorated and hygienic.
          Must order from here."
        </p>
        <div className=" slider__content d-flex align-items-center justify-content-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6 className="text-center">Partha Karmakar</h6>
        </div>
      </div>
      <div>
        <p className="review__text text-center">
          "Oh Moumita, thankyou, thankyou, thankyou! That cake is delicious and all loves it."
        </p>
        <div className="slider__content d-flex align-items-center justify-content-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6 className="text-center">Bapan Saha</h6>
        </div>
      </div>
      <div>
        <p className="review__text text-center">
          "The cake teast was really amazing.  Many congratulations on your achievement. I hope to get this kind of service from you in the future as well
          Thanks for all"
        </p>
        <div className="slider__content d-flex align-items-center justify-content-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6 className="text-center">koustav mukherjee</h6>
        </div>
      </div>
      <div>
        <p className="review__text text-center">
          "Very much appreciated.Good quality cakes!"
        </p>
        <div className="slider__content d-flex align-items-center justify-content-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6 className="text-center">Biplab Sarkar</h6>
        </div>
      </div>

      <div>
        <p className="review__text text-center">
          "Many thanks Moumita for the beautiful cake. My daughter loved it and it made her day special."
        </p>
        <div className="slider__content d-flex align-items-center justify-content-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6 className="text-center">Sathi Gorain</h6>
        </div>
      </div>

      <div>
        <p className="review__text text-center">
          "Just wanted to say a massive thank you! We absolutely loved the cake, as did all of our guests. You nailed it!"
        </p>
        <div className="slider__content d-flex align-items-center justify-content-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6 className="text-center">Santanu Sen</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
