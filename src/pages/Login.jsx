import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { post } from 'axios';


const Login = () => {
  // const navigate = useNavigate();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targeturl, setTargeturl] = useState('');

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const request = {"email": email, "password": password}
    
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      setTargeturl('http://localhost:3001/api/v1/login')
    } else {
      setTargeturl('https://squid-app-3xlu8.ondigitalocean.app/api/v1/login')
    }

    post(targeturl, request)
    .then(response => {
      if (response.data.response_code === 200) {
        localStorage.setItem("jwt", response.data.response_data.access_token);
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
          window.location = 'http://localhost:3000'
        } else {
          window.location = 'https://aharecake.com'
        }
      } else {
        alert(response.data.response_message);
      }
      // navigate("/home");
    })
    .catch(error => console.log('error', error));
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    onChange={handleEmail}
                    value={email}
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginEmailRef}
                    id="email"
                  />
                </div>
                <div className="form__group">
                  <input
                    onChange={handlePassword}
                    value={password}
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                    id="password"
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
