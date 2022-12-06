import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { post } from 'axios';

const Register = () => {
  // const navigate = useNavigate();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  const signupConfirmPasswordRef = useRef();
  const signupNameRef = useRef();

  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');


  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handling the confirm password change
  const handleconfirmPassword = (e) => {
    setconfirmpassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '' || confirmpassword === '') {
      alert("Please enter all the required information")
    } else {
      if (password === confirmpassword){
        const request = {"user": {"name": name, "email": email, "password": password, "password_confirmation": confirmpassword}}

        post("https://squid-app-3xlu8.ondigitalocean.app/api/v1/register", request)
        .then(response => {
          console.log(response);
          alert(response.status);
          if (response.status === 200) {
            console.log(response);
            localStorage.setItem("jwt", response.data.response_data.access_token);
            // navigate("/home");
            window.location = 'https://aharecake.com'
          }
        })
        .catch(error => {
          console.log("registration error", error);
        });
      } else{
        alert("Password and Confirm Password does not match.")
      }
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    onChange={handleName}
                    value={name}
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    onChange={handleEmail}
                    value={email}
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
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
                    ref={signupPasswordRef}
                    id="password"
                  />
                </div>

                <div className="form__group">
                  <input
                    onChange={handleconfirmPassword}
                    value={confirmpassword}
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
