import { useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
export default function Header()
{
    const dispatch = useDispatch()
    return(
        <header>
            <Link to = '/'  style={{ textDecoration: 'none'}}>
        <div>
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
        <ul>
          <li>
            <button className='button' onClick={() => dispatch({type: "showC"})}  ><img width={18} height={18} src="/img/cart.png" /></button>
            <span>1205 руб.</span>
          </li>
          <Link to = "/favorite">
          <li>
            <img width={18} height={18} src="/img/fav.png" />
          </li>
          </Link>
          <Link to = "/profile">
          <li>
            <img width={18} height={18} src="/img/user.png" />
          </li>
          </Link>
        </ul>
        </header>
    )
}