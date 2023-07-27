import axios from "axios";
import { delCartElem,addCartElem } from "../store/cartElem";
export function postCart(obj,cartElem)
{
    const objElem = cartElem.find(elem => elem.title === obj.title)
    if(!objElem){
        return async function(dispatch){
            const {data} = await axios.post("https://64be51595ee688b6250c2fcf.mockapi.io/cart",obj)
            dispatch(addCartElem([data]))
        }
    }
    else{
        return function(dispatch){
             axios.delete(`https://64be51595ee688b6250c2fcf.mockapi.io/cart/${objElem.id}`)
             dispatch(delCartElem(obj.title))
        }
    }
}