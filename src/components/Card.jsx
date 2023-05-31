import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Card ({pName,pPrice,pImg}) 
{
  const [added,setAdded] = React.useState(false)
  const [favorite,setFavorite] = React.useState(false)
  
  
  const dispatch = useDispatch()
    function AddingCart()
    {
      setAdded(!added)
      !added? dispatch({type: "addCartElem",pName: pName,pPrice: pPrice,pImg: pImg}):dispatch({type: "delCartElem",pName: pName})
    }
    function AddingFolow()
    {
      setFavorite(!favorite)
      !favorite? dispatch({type: "addFavoriteElem",pName: pName,pPrice: pPrice,pImg: pImg}):dispatch({type: "delFavoriteElem",pName: pName})
    }
    return (

        <div className="card">
           
        <>
        <div className='button'>
            <img src={favorite?'/img/liked.png':'/img/unliked.png'} width={32} height={32} alt="Unliked" onClick={() =>AddingFolow()}/>
        </div>
        <img width={175} height={150} src={pImg} alt="Sneakers" />
        <h5>{pName}</h5>
        <div className="cardChildDiv">
            <div className="container">
                <span>Цена:</span>
                <b>{pPrice}.</b>
            </div>

              <img  className = "button"width={32} height={32} src={added?"/img/btn-checked.svg":"/img/plus.png"}  alt="Plus" onClick={() => {AddingCart()}} />

        </div>
        </>
      
      </div>
    );
}
export default Card