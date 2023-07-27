import { useDispatch,useSelector } from "react-redux"
import { postCart } from "../asyncActions/postCart"
export default function MiniCard(obj)
    {
      const cartElem = useSelector((state) => state.cartElem.cartElem)
      const {title,price,url} = obj
      const dispatch = useDispatch()
      return(
        <div className="items">
        <div className="cartItem">
          <div
            style={{ backgroundImage: `url(${url})` }}
            className="cartItemImg"></div>

          <div className="cartText">
            <p>{title}</p>
            <b>{price} руб.</b>
          </div>
          <img className="removeBtn cu-p button" onClick={() => dispatch(postCart(obj,cartElem))} src="/img/btn-remove.png" alt="Remove" />
        </div>

      </div>
      )
    }