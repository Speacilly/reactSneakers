import React from 'react'
import Cart from './components/Cart.jsx'
import Header from './components/Header.jsx'
import Favorite from './pages/favorite.jsx'
import Profile from './pages/profile.jsx'
import Home from './pages/home.jsx'
import { useDispatch, useSelector } from 'react-redux';
import {Route,Routes} from 'react-router-dom';


export default function App() {  
  const showCart = useSelector((state) => state.showCart.showCart)


return (
<div className="wrapper">
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
