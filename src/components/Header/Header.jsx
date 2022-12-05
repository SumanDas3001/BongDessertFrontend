import React, { useRef, useEffect } from 'react'
import { Container } from 'reactstrap'
// import logo from "../../assets/images/bongdessert_logo-removebg-preview.png";
// import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from 'react-router-dom'
// import { useSelector, useDispatch } from "react-redux";

// import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import '../../styles/header.css'


const nav_links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Cakes",
    path: "/foods",
  },
  // {
  //   display: "Cart",
  //   path: "/cart",
  // },
  {
    display: "Contact",
    path: "/contact",
  },
]

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  // const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const dispatch = useDispatch();
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  // const toggleCart = () => {
  //   dispatch(cartUiActions.toggle());
  // };


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);


  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          <div className="logo py-3">
            <img src="https://bongdessert.s3.amazonaws.com/Ahare+Cake.png" alt="logo" className='justify-content-end' style={{height: '70px', width: '100px'}}  />
            {/* <img src={logo} alt="logo" className='justify-content-end' style={{height: '60px', width: '100px'}} /> */}
            {/* <h4 className='mt-0'>The Bong Dessert</h4> */}
          </div>

          {/* ================== Menu ======================= */}
          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {
                nav_links.map((item, index) => (
                  <NavLink
                  onClick={toggleMenu}
                    to={item.path}
                    key={index}
                    className={(navClass) =>
                      navClass.isActive ? 'active__menu' :''
                    }
                    >
                    {item.display}
                  </NavLink>
                ))
              }
            </div>
          </div>

          {/* =============== Nav right icon ==================== */}

          <div className="nav__right d-flex align-items-center gap-4 right-menu">
            {/* <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>*/}


            {
              localStorage.getItem("jwt") ?
                <span className="user">
                  <Link to="/logout">
                    Logout
                  </Link>
                </span>
              :
                <span className="user">
                  <Link to="/login">
                    Login
                  </Link>
                </span>
            }

            {
              localStorage.getItem("jwt") ?
                ""
              :

              <span className="user">
                <Link to="/register">
                  Register
                </Link>
              </span>
            }

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
