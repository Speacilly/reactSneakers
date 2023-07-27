import axios from "axios";
import { addFavoriteElem,delFavoriteElem } from "../store/favoriteItems";
export function postFavorite(obj,favoriteElem)
{
    const objElem = favoriteElem.find(elem => elem.title === obj.title)
    if(!objElem){
        return async function(dispatch){
            const {data} = await axios.post("https://64c29342eb7fd5d6ebd01431.mockapi.io/favorite",obj)
            dispatch(addFavoriteElem([data]))
        }
    }
    else{
        return function(dispatch){
             axios.delete(`https://64c29342eb7fd5d6ebd01431.mockapi.io/favorite/${objElem.id}`)
             dispatch(delFavoriteElem(obj.title))
        }
    }
}