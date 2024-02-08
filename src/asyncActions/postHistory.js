
import axios from "axios";
import { addFavoriteElem,delFavoriteElem } from "../store/favoriteItems";
export function postHistory(obj,HistoryElem)
{
    //const objElem = UsersElem.find(elem => elem.title === obj.title)
    let objElem = false
    console.log(obj)
    if(!objElem){
        return async function(dispatch){
            const {data} = await axios.post("https://65c51212dae2304e92e3e67d.mockapi.io/history",obj)
           // dispatch(addFavoriteElem([data]))
        }
    }
    else{
        return function(dispatch){
             axios.delete(`https://64c29342eb7fd5d6ebd01431.mockapi.io/user/${objElem.id}`)
           //  dispatch(delFavoriteElem(obj.title))
        }
    }
}