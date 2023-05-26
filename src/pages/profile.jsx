import {useDispatch, useSelector } from "react-redux"
import Card from '../components/Card.jsx'
export default function Favorite()
{
    const dispatch = useDispatch()
    const onChangeSearchInput = (event) => {dispatch({type: "onChangeSearchInput", event: event.target.value})}
    const searchValue = useSelector(state => state.searchValue.searchValue)
    const Items = useSelector(state => state.profileItems.profItems)
    return(
        
        <div className="content">
            <h1>Все кроссовки</h1>        
          <div className="search-block">
                <img src="/img/search.png" width={18} height={18} alt="Search" />
                { <input onChange={onChangeSearchInput} placeholder="Поиск..." /> }
            </div>
        
        <div className="ds-f">
            {Items.length && Items.filter((item) => item.pName.toLowerCase().includes(searchValue.toLowerCase()))
        .map((elem, index) => 
        <Card 
        key={index} 
        pName = {elem.pName} 
        pPrice = {elem.pPrice} 
        pImg = {elem.pImg} 
        />)}</div>
      </div>
    )
}