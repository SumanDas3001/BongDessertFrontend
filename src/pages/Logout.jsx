import React from 'react';
import { Navigate } from 'react-router-dom'
import { post } from 'axios';

const Logout = () => {
  let token = localStorage.getItem("jwt")
  const request = {"token": token, "client_id": "9-V7D1HFLyAhjtVDmu6VTaZAxhf29gacuMIIfspC680", "client_secret": "EYe0wLBKRqnLskx-Gw860dLayWIaUtKGCduK-3mevt0"};
  post('http://localhost:3001/api/v1/oauth/revoke', request)
  .then(response => {
    console.log(response);
  })
  .catch(error => console.log('error', error));

  localStorage.removeItem('jwt');
  return <Navigate to='/' />
}

export default Logout;
