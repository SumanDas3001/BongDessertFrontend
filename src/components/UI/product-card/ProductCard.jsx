import React from 'react'
import "../../../styles/product-card.css";

import { Link } from 'react-router-dom';

// import { useDispatch } from "react-redux";
// import { cartActions } from "../../../store/shopping-cart/cartSlice";


const ProductCard = (props) => {

  const {id, title, image01, price} = props.item;
  // const dispatch = useDispatch();

  // const addToCart = () => {
  //   dispatch(
  //     cartActions.addItem({
  //       id,
  //       title,
  //       image01,
  //       price,
  //     })
  //   );
  // };

  const handleClick = (url) => {
    if (url === 'order'){
      window.open('https://wa.me/919330349714', '_blank');
    }
  }

  return (
    <div className='product__item'>
      <div className='product__img'>
      <img src={image01} alt="product-img"  style={{width: '100px', height: '100px'}}/>
      </div>
      <div className='product__content'>
        <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
        <div>
          <span className='product__price'>Rs: {price}</span><br/>
          <button onClick={() => handleClick('order')} className="addTOCart__btn">
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
