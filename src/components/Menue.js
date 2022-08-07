import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product15.jpg";
import product6 from "../assets/product16.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import product9 from "../assets/product9.jpg";
import product10 from "../assets/product20.jpg";
import product11 from "../assets/product11.jpg";
import product12 from "../assets/product18.jpg";
import product13 from "../assets/product13.jpg";
import product21 from "../assets/product21.jpg";
import product22 from "../assets/product22.jpg";

// import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
// import Spinner from "./Spinner";


export default function Products() {
  const data = [
    {
      image: product1,
      name: "Strawberry flavour cake",
      price: "RS 22.4/pcs",
    },
    {
      image: product2,
      name: "Full rose cake",
      price: "RS 5.5/pcs",
    },
    {
      image: product3,
      name: "Butterscotch cake",
      price: "RS 350/pcs 1 Pound",
    },
    {
      image: product4,
      name: "Chocolate truffel/overloaded cake",
      price: "RS 12.5/pcs",
    },
    {
      image: product5,
      name: "Black forest cake",
      price: "RS 22.4/pcs",
    },
    {
      image: product6,
      name: "Red velvet cake",
      price: "RS 5.5/pcs",
    },
    {
      image: product7,
      name: "Doll cake",
      price: "RS 8/pcs",
    },
    {
      image: product8,
      name: "Strawberry flavour cake",
      price: "RS 12.5/pcs",
    },
    {
      image: product9,
      name: "Pineapple cake",
      price: "RS 22.4/pcs",
    },
    {
      image: product10,
      name: "Orange flavour cake",
      price: "RS 5.5/pcs",
    },
    {
      image: product11,
      name: "Gravity cake",
      price: "RS 8/pcs",
    },
    {
      image: product12,
      name: "Rashamalia cake",
      price: "RS 12.5/pcs",
    },
    {
      image: product13,
      name: "Butterscotch rose cake",
      price: "RS 12.5/pcs",
    },
    {
      image: product21,
      name: "Two tier cake",
      price: "RS 12.5/pcs",
    },
    {
      image: product22,
      name: "Butterscotch cake",
      price: "RS 12.5/pcs",
    }
  ];

  const priceStyle = {
    // color: 'red', 
    fontSize: '24x !important', 
    fontWeight: '700',
    marginBottom: '50px',
    paddingBottom: '40px'
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
                            className="menu-img img-fluid img-responsive rounded mx-auto d-block img-thumbnail"
                            alt="product"
                            style={{width: "300px", height: "300px"}}
                          />
                        </div>
                      </a>
                      <h3 className="my-3 text-center" style={priceStyle}>{product.name}</h3>
                      {/* <p className="ingredients text-center">
                        Lorem, deren, trataro, filede, nerada
                      </p> */}
                      {/* <h3 className="price text-center mb-10" style={priceStyle}>{product.price}</h3> */}
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
