import {useDispatch, useSelector } from "react-redux"
import Card from '../components/Card.jsx'
export default function Favorite()
{
    const dispatch = useDispatch()
    const onChangeSearchInput = (event) => {dispatch({type: "onChangeSearchInput", event: event.target.value})}
    const searchValue = useSelector(state => state.searchValue.searchValue)
    const favoriteItems = useSelector(state => state.favoriteItems.favoriteItems)
    return(
        
        <div className="content">
            <h1>Моё избранное</h1>        
          <div className="search-block">
                <img src="/img/search.png" width={18} height={18} alt="Search" />
                { <input className='button' onChange={onChangeSearchInput} placeholder="Поиск..." /> }
            </div>
        
        <div className="ds-f">
            {favoriteItems.length && favoriteItems.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((elem, index) => 
        <Card 
        key={index} 
        title = {elem.title} 
        price = {elem.price} 
        url = {elem.url} 
        id = {elem.id}
        />)}</div>
      </div>
    )
}