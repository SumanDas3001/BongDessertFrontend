import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import product9 from "../assets/product9.jpg";
import product10 from "../assets/product10.jpg";
import product11 from "../assets/product11.jpg";
import product12 from "../assets/product12.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState } from "react";
import Spinner from "./Spinner";


export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chicken Burger",
      price: "RS 22.4/pcs",
    },
    {
      image: product2,
      name: "Toasted Bread",
      price: "RS 5.5/pcs",
    },
    {
      image: product3,
      name: "Egg Sandwich",
      price: "RS 8/pcs",
    },
    {
      image: product4,
      name: "Raspberry Cake",
      price: "RS 12.5/pcs",
    },
    {
      image: product5,
      name: "Chicken Burger",
      price: "RS 22.4/pcs",
    },
    {
      image: product6,
      name: "Toasted Bread",
      price: "RS 5.5/pcs",
    },
    {
      image: product7,
      name: "Egg Sandwich",
      price: "RS 8/pcs",
    },
    {
      image: product8,
      name: "Raspberry Cake",
      price: "RS 12.5/pcs",
    },
    {
      image: product9,
      name: "Chicken Burger",
      price: "RS 22.4/pcs",
    },
    {
      image: product10,
      name: "Toasted Bread",
      price: "RS 5.5/pcs",
    },
    {
      image: product11,
      name: "Egg Sandwich",
      price: "RS 8/pcs",
    },
    {
      image: product12,
      name: "Raspberry Cake",
      price: "RS 12.5/pcs",
    }
  ];


  const perPage = 4; 
  const [lastPosition, setLastPosition] = useState(perPage); 
  const [allPhotos, setAllPhotos] = useState(data.slice(0, perPage)); 
  const [hasMore, setHasmore] = useState(true); 

  const loadProducts = () => { 
    setTimeout(() => { 
      setAllPhotos((prev) => [...prev, ...data.slice(lastPosition, lastPosition + perPage)]
    ); }, 4000); 
    setLastPosition(lastPosition + perPage);
    if (allPhotos.length === 12){
      setHasmore(false) 
    }
  };

  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <InfiniteScroll
        dataLength={allPhotos.length}
        next={loadProducts}
        hasMore={hasMore}
        loader={<Spinner />}
      >
        
        <div className="products">
          {allPhotos.map((product, index) => {
            return (
              <div className="product" key={index}>
                <div className="image">
                  <img src={product.image} alt="Product" />
                </div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>He Printing and Typesetting the industry. Lorem Ipsum has</p>
                <button>Buy Now</button>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
