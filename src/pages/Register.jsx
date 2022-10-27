import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate} from "react-router-dom";
import { post } from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  const signupConfirmPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwotrd_confirmation = document.getElementById('passwotrd_confirmation').value;

    const request = {"grant_type": "password", "email": email, "password": password, password_confirmation: passwotrd_confirmation, "client_id": "9-V7D1HFLyAhjtVDmu6VTaZAxhf29gacuMIIfspC680" };

    post("http://localhost:3001/api/v1/users", request)
    .then(response => {
      console.log(response.data.status);
      if (response.data.status === 200) {
        console.log(response);
        localStorage.setItem("jwt", response.data.access_token);
        navigate("/home");
      }
    })
    .catch(error => {
      console.log("registration error", error);
    });

  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                {/*<div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>*/}
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                    id="email"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                    id="password"
                  />
                </div>

                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    ref={signupConfirmPasswordRef}
                    id="passwotrd_confirmation"
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
