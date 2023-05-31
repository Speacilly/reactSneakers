import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card.jsx'
import ContentLoader from "react-content-loader";
import React from 'react';
import axios from 'axios';

export default function Home()
{
    const dispatch = useDispatch()
    const temaDW = useSelector((state) => state.temaDW.temaDW)
    const  skel  = useSelector((state) => state.isLoading.skel);
    const searchValue = useSelector(state => state.searchValue.searchValue)
    const Items = useSelector(state => state.items.Items)
   

    const onChangeSearchInput = (event) => {
      dispatch({type: "onChangeSearchInput", event: event.target.value})
      
    
    };
    React.useEffect(() =>{
        async function Fetch()
        {
          const tempItems = await axios.get('https://645bd41aa8f9e4d6e774412f.mockapi.io/sneakers')
          dispatch({type: "addItems",payload: tempItems.data})
          dispatch({type: "rSkel"})
        }
        Fetch()
        
    },[])
   
    return(
    <div className="content">
            <h1>Все кроссовки</h1>        
          <div className="search-block">
                <img src="/img/search.png" width={18} height={18} alt="Search" className='button'/>
                { <input className='button' onChange={onChangeSearchInput} placeholder="Поиск..." /> }
            </div>

           
        <div className="ds-f">
        
         {!skel ?
        Items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((elem, index) => 
        <Card 
        key={index} 
        pName = {elem.title} 
        pPrice = {elem.price} 
        pImg = {elem.url} 
        />)
        : 
        [...Array(10)].map(() =>  
        <div className="card">
        <ContentLoader
        speed={2}
        width={155}
        height={250}
        viewBox="0 0 155 265"
        backgroundColor= "#ccc5b9"
        foregroundColor="#ecebeb">
        <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
        <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
        <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
        </div>
        )}
        </div>
        
      </div>)
}