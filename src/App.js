import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {Route,Routes} from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { PRODUCTS } from './graphql/querys.js'


import Cart from './components/Cart.jsx'
import Header from './components/Header.jsx'
import Favorite from './pages/favorite.jsx'
import Profile from './pages/profile.jsx'
import Home from './pages/home.jsx'
import Card from './components/Card.jsx'
import { getItems } from './asyncActions/getItems.js'
import { getCart } from './asyncActions/getCart.js';
import { getFav } from './asyncActions/getFav.js';
import { getUsers } from './asyncActions/getUser.js';

export default function App() {  
  const showCart = useSelector((state) => state.showCart.showCart)
  const [statedata,setdata] = useState()
  const {data} = useQuery(PRODUCTS)
  const dispatch = useDispatch()
  
  useEffect(() =>{
    setdata(data)
  },[data])

  React.useEffect(() =>{

       const Fetch = () => {
        dispatch(getUsers())
        dispatch(getItems())
        dispatch(getCart())
        dispatch(getFav())
        
       }
        Fetch()
  },[])
 
return (
<div className= "wrapper">
      <Header />
      {showCart&& <Cart/>}
     
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
