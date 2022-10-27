import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link , useNavigate} from "react-router-dom";
import { post } from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {"grant_type": "password", "email": email, "password": password, "client_id": "9-V7D1HFLyAhjtVDmu6VTaZAxhf29gacuMIIfspC680", "client_secret": "EYe0wLBKRqnLskx-Gw860dLayWIaUtKGCduK-3mevt0"};
    post('http://localhost:3001/api/v1/oauth/token', request)
      .then(response => {
        console.log(response);
        localStorage.setItem("jwt", response.data.access_token);
        navigate("/home");
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
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginEmailRef}
                    id="email"
                  />
                </div>
                <div className="form__group">
                  <input
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
