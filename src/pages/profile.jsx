import {useDispatch, useSelector } from "react-redux"
import Card from '../components/Card.jsx'
import Reg from '../components/Reg_form.jsx'
export default function Favorite()
{
    const dispatch = useDispatch()
    const onChangeSearchInput = (event) => {dispatch({type: "onChangeSearchInput", event: event.target.value})}
    const searchValue = useSelector(state => state.searchValue.searchValue)
    const Items = useSelector(state => state.profileItems.profItems)
    return(
        
        <div className="content">
            <h1>История покупок</h1>        
          <div className="search-block">
                <img src="/img/search.png" width={18} height={18} alt="Search" />
                { <input className='button' onChange={onChangeSearchInput} placeholder="Поиск..." /> }
            </div>
        <Reg/>
       
      </div>
    )
}