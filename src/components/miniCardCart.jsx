import { useDispatch } from "react-redux"
export default function MiniCard({pName,pPrice,pImg})
    {
      const dispatch = useDispatch()
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