// import React from 'react';
// import { Navigate } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("jwt")
  // const request = {"Authorization": token };

  const request = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    }
  };

  axios.delete('https://squid-app-3xlu8.ondigitalocean.app/api/v1/revoke', request)
  .then(response => {
    console.log(response);
  })
  .catch(error => console.log('error', error));

  localStorage.removeItem('jwt');
  return(
    // window.location = 'https://aharecake.com'
    navigate("/home")
  )
}

export default Logout;
