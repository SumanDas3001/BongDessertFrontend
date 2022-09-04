import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'

import { Container, Row, Col } from 'reactstrap'
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../components/Spinner';
import '../styles/all-foods.css'
import "../styles/pagination.css";

const AllFoods = (props) => {

  const productPerPage = 12;
  const [lastPosition, setLastPosition] = useState(productPerPage);
  const [allProducts, setAllProducts] = useState(products.slice(0, productPerPage));
  const [hasMore, setHasmore] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);


  const loadProducts = () => {
    props.progress(10)
    setTimeout(() => {
      setAllProducts((prev) => [...prev, ...products.slice(lastPosition, lastPosition + productPerPage)]
      );
    }, 2000);
    props.progress(100)
    setLastPosition(lastPosition + productPerPage);
    if (allProducts.length === products.length) {
      setHasmore(false)
    }
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = products.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
      setHasmore(false)
    }
    else {
      setAllProducts(products)
    }
  }

  return (
    <Helmet title="All Cakes">
      <CommonSection title="All Cakes" />
      <section>
        <InfiniteScroll
          dataLength={allProducts.length}
          next={loadProducts}
          hasMore={hasMore}
          loader={<Spinner />}
        >
          <Container>
            <Row>
              <Col lg='12' md='12' sm='12' xs='12'>
                <div className="search__widget d-flex align-items-center justify-content-between ">
                  <input
                    type='text'
                    placeholder="I'm looking for..."
                    value={searchInput}
                    onChange={(e) => searchItems(e.target.value)}
                  />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </Col>
              {searchInput.length > 1 ? (
                filteredResults.map((item) => {
                  return (
                    <Col lg='3' md='3' sm='12' xs='12' key={item.id} className='mb-4'>
                      <ProductCard item={item} />
                    </Col>
                  )
                })
              ) : (
                allProducts.map((item) => {
                  return (
                    <Col lg='3' md='3' sm='12' xs='12' key={item.id} className='mb-4'>
                      <ProductCard item={item} />
                    </Col>
                  )
                })
              )}
            </Row>
          </Container>
        </InfiniteScroll>
      </section>
    </Helmet>
  )
}

export default AllFoods
