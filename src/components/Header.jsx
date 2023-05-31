import { useDispatch,useSelector} from 'react-redux'
import { Link } from "react-router-dom";
export default function Header()
{
    const dispatch = useDispatch()
    return(
        <header>
            <Link to = '/'  style={{ textDecoration: 'none'}}>
        <div >
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3  className='textC'>React Sneakers</h3>
            <p className='textC'>Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
        <ul>
          <li>
            <div onClick={() => dispatch({type: "showC"})}  ><img width={18} height={18} src="/img/cart.png" /><span>1205 руб.</span></div>
            
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
        <div className="switch" onClick = {() => dispatch({type: "temaDW"})}>
		        <div className='button' style={{width: "60px",height: "60px",fontSize: "40px"}}><div style={{margin: "auto"}}>☀︎</div> </div>
	           </div>
        </header>
    )
}