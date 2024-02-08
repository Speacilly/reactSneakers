import axios from "axios";
import { addFavoriteElem,delFavoriteElem } from "../store/favoriteItems";
export function postUser(obj,UsersElem)
{
    //const objElem = UsersElem.find(elem => elem.title === obj.title)
    let objElem = false
    console.log(obj)
    if(!objElem){
        return async function(dispatch){
            const {data} = await axios.post("https://64c29342eb7fd5d6ebd01431.mockapi.io/user",obj)
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