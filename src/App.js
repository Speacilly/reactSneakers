import React, { useEffect, useState } from 'react'
import Cart from './components/Cart.jsx'
import Header from './components/Header.jsx'
import Favorite from './pages/favorite.jsx'
import Profile from './pages/profile.jsx'
import Home from './pages/home.jsx'
import {useSelector } from 'react-redux';
import {Route,Routes} from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { PRODUCTS } from './graphql/querys.js'
import Card from './components/Card.jsx'

window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
export default function App() {  
  const showCart = useSelector((state) => state.showCart.showCart)
  const [statedata,setdata] = useState()
  const {data} = useQuery(PRODUCTS)
  useEffect(() =>{
    setdata(data)
  },[data])
return (
<div className= "wrapper">
      <Header />
      {showCart&& <Cart/>}
      <div className="ds-f">
        
        {statedata ?
       statedata.products.map((elem, index) => 
       <Card 
       key={index} 
       pName = {elem.name} 
       pPrice = {elem.price} 
       pImg = {elem.id} 
       />) : <></>}
       </div>
      <Routes>
      <Route path='/' element = {<Home />} >
      
      </Route>
      
      <Route path='/favorite' element = {<Favorite />}>

      </Route>

      <Route path='/profile' element = {<Profile/>}></Route>
      </Routes>
    </div>
  )
}
