import React, {useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import AllFoods from '../pages/AllFoods'
import FoodDetails from '../pages/FoodDetails'
import Checkout from '../pages/Checkout'
// import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import LoadingBar from 'react-top-loading-bar'


const Routers = () => {

  const [progress, setProgress] = useState(0)

  const setProgressBar = (progress) => {
    setProgress(progress)
  }


  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route path='' element={<Navigate to="/home"/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/foods' element={<AllFoods progress={setProgressBar} />} />
        <Route path='/foods/:id' element={<FoodDetails />} />
        {/* <Route path='/cart' element={<Cart />} /> */}
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default Routers
