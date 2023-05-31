import { useDispatch, useSelector } from 'react-redux'
import MiniCard from './miniCardCart.jsx'
import Info from './info.jsx'
export default function Cart()
{
    const dispatch = useDispatch()
    const cartElem = useSelector((state) => state.cartElem.cartElem)
    const completeOrder = useSelector((state) => state.cartElem.completeOrder)
    const temaDW = useSelector((state) => state.temaDW.temaDW)
    function buy()
      {
        dispatch({type:"rCompleteOrder"})
        dispatch({type: "addProfileItems",cartElem: cartElem})
        dispatch({type:"cleanCartElem"})
      }
      let sum
      cartElem.length > 0?  sum = cartElem.reduce((acc,elem) => acc += elem.pPrice,0): sum = 0
    return(<div  className="overlay" >
      <div style={{width: "100%",height: "80%"}}  onClick={() => dispatch({type: "showC"})}></div>
      {cartElem.length > 0 ?
    <div className={temaDW?"drawer":"drawer darkDrawer"}>
      
      <h2>
        Корзина <img className="cu-p button" src="./img/btn-remove.png" alt="Remove" onClick={() => dispatch({type: "showC"})}/>
      </h2>

      <div className="cartText">{cartElem.map((elem,index) => 
      <MiniCard 
      key = {index}
      pName = {elem.pName} 
      pPrice = {elem.pPrice} 
      pImg = {elem.pImg} />)}
      </div>
      

      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Сумма:</span>
            <div></div>
            <b>{sum} руб. </b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>{Math.floor(sum * 0.05)} руб. </b>
          </li>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>{sum + Math.floor(sum * 0.05)} руб. </b>
          </li>
        </ul>
        <button className="greenButton" onClick={() => buy()}>
          Оформить заказ <img src="/img/arrow.png" alt="Arrow" />
        </button>
      </div></div>:
      <Info 
        name = {completeOrder? 'Заказ оформлен!' : 'Корзина пустая'}
        commit = {completeOrder?  `Ваш заказ скоро будет передан курьерской доставке`
        : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
        img = {completeOrder? 'img/complete.png' : 'img/empty-cart.png'}
      />
    }
  </div>)
}