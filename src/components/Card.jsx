import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postCart } from '../asyncActions/postCart'
import { postFavorite } from '../asyncActions/postFav'


function Card (obj) 
{
  const {title,price,url} = obj
  const cartElem = useSelector((state) => state.cartElem.cartElem)
  const favoriteItems = useSelector((state) => state.favoriteItems.favoriteItems)
  const [added,setAdded] = React.useState(false)
  const [favorite,setFavorite] = React.useState(false)
  
  
  const dispatch = useDispatch()
    
  function AddingFolow()
  {
    setFavorite(!favorite)
    dispatch(postFavorite(obj,favoriteItems))
  }
  function addCart()
  {
    dispatch(postCart(obj,cartElem))
    setAdded(!added)
  }

    return (

        <div className="card">
           
        <>
        <div className='button'>
            <img src={favorite?'/img/liked.png':'/img/unliked.png'} width={32} height={32} alt="Unliked" onClick={() =>AddingFolow()}/>
        </div>
        <img width={175} height={150} src={url} alt="Sneakers" />
        <h5>{title}</h5>
        <div className="cardChildDiv">
            <div className="container">
                <span>Цена:</span>
                <b>{price}.</b>
            </div>

              <img  className = "button"width={32} height={32} src={added?"/img/btn-checked.svg":"/img/plus.png"}  alt="Plus" onClick={() => {addCart()}} />

        </div>
        </>
      
      </div>
    );
}
export default Card