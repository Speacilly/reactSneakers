import { useDispatch, useSelector } from 'react-redux'
export default function Cart()
{
    const dispatch = useDispatch()
    const cartElem = useSelector((state) => state.cartElem.cartElem)
    function card(pName,pPrice,pImg)
    {
      return(
        <div className="items">
        <div className="cartItem">
          <div
            style={{ backgroundImage: `url(${pImg})` }}
            className="cartItemImg"></div>

          <div className="cartText">
            <p>{pName}</p>
            <b>{pPrice} руб.</b>
          </div>
          <img className="removeBtn" onClick={() => dispatch({type: "delCartElem",pName: pName})} src="/img/btn-remove.png" alt="Remove" />
        </div>

      </div>
      )
    }
    let sum = cartElem.reduce((acc,elem) => acc += elem.pPrice,0)
    return(<div  className="overlay">
    <div className="drawer">
      <h2>
        Корзина <img className="cu-p button" src="./img/btn-remove.png" alt="Remove" onClick={() => dispatch({type: "showC"})}/>
      </h2>
      
      
      <div className="cartText">{cartElem.map((elem) => card(elem.pName, elem.pPrice, elem.pImg))}</div>
      

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
        <button className="greenButton">
          Оформить заказ <img src="/img/arrow.png" alt="Arrow" />
        </button>
      </div>
    </div>
  </div>)
}