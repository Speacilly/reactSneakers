import { useDispatch } from "react-redux"

export default function Info({name,commit,img})
{
    const dispatch = useDispatch()
    return(
        <div className="drawer">
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
          <img className="mb-20" width="120px" src={img} alt="Empty" />
          <h2>{name}</h2>
          <p className="opacity-6">{commit}</p>
          <button className="greenButton" onClick={() => dispatch({type: "showC"})}>
          <img src="img/arrow.png" alt="Arrow" />
          Вернуться назад
        </button>
    </div>
      </div>
    )
}