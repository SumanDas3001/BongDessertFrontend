// import React from "react";
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
// import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
// import Spinner from "./Spinner";


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

  const priceStyle = {
    color: 'red', 
    fontSize: '24x !important', 
    fontWeight: '700',
    marginBottom: '50px'
  }


  // const perPage = 3; 
  // const [lastPosition, setLastPosition] = useState(perPage); 
  // const [allPhotos, setAllPhotos] = useState(data.slice(0, perPage)); 
  // const [hasMore, setHasmore] = useState(true); 

  // const loadProducts = () => { 
  //   setTimeout(() => { 
  //     setAllPhotos((prev) => [...prev, ...data.slice(lastPosition, lastPosition + perPage)]
  //   ); }, 500); 
  //   setLastPosition(lastPosition + perPage);
  //   if (allPhotos.length === 12){
  //     setHasmore(false) 
  //   }
  // };

  return (
    <section id="menu" className="menu">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Menu</h2>
          <p>
            Check Our <span>Yummy Menu</span>
          </p>
        </div>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
          <div className="tab-header text-center">
            <p>Menu</p>
            <h3>Cakes</h3>
          </div>
          {/* <InfiniteScroll
            dataLength={allPhotos.length}
            next={loadProducts}
            hasMore={hasMore}
            loader={<Spinner />}
          > */}

            <div className="container">
              <div className="row">
                {data.map((product, index) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                      <a href={product.image} className="glightbox" >
                        <div>
                          <img
                            src={product.image}
                            className="menu-img img-fluid img-responsive"
                            alt="product"
                            style={{width:'100%',
                              height: '50vh'}}
                          />
                        </div>
                      </a>
                      <h3 className="my-3 text-center">{product.name}</h3>
                      <p className="ingredients text-center">
                        Lorem, deren, trataro, filede, nerada
                      </p>
                      <h3 className="price text-center mb-10" style={priceStyle}>{product.price}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          {/* </InfiniteScroll> */}
        </div>

      </div>
    </section>
  );
}
