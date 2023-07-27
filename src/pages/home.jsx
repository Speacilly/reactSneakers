import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card.jsx'
import  Skeleton  from '../components/Skeleton.jsx';
import React from 'react';

export default function Home()
{
    const dispatch = useDispatch()
    const  skel  = useSelector((state) => state.isLoading.skel);
    const searchValue = useSelector(state => state.searchValue.searchValue)
    const Items = useSelector(state => state.items.Items)
   

    const onChangeSearchInput = (event) => {
      dispatch({type: "onChangeSearchInput", event: event.target.value})
      
    
    };
    
    return(
    <div className="content">
            <h1>{searchValue?"Поиск по: " + searchValue:"Все кроссовки"}</h1>        
          <div className="search-block">
                <img src="/img/search.png" width={18} height={18} alt="Search" className='button'/>
                { <input className='button' onChange={onChangeSearchInput} placeholder="Поиск..." /> }
            </div>

           
        <div className="ds-f">
        
         {!skel?
        Items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((elem, index) => 
        <Card 
        key={index} 
        title = {elem.title} 
        price = {elem.price} 
        url = {elem.url} 
        id = {elem.id}
        />)
        : 
        [...Array(10)].map((index) =>  
          <Skeleton key = {index}/>
        )}
        </div>
        
      </div>)
}