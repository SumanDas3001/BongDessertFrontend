// import React from 'react';
// import { Navigate } from 'react-router-dom'
import axios from "axios";

const Logout = () => {
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
    if (response.data.response_code === 200){
      console.log(response.data.response_code);
    } else {
      alert(response.data.response_message);
    }
  })
  .catch(error => console.log('error', error));

  localStorage.removeItem('jwt');
  return(
    window.location = 'https://aharecake.com'
  )
}

export default Logout;
