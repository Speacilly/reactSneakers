import { addCartElem } from "../store/cartElem"
import axios from "axios";
export function getCart (){
    return function(dispatch){
        axios.get("https://64be51595ee688b6250c2fcf.mockapi.io/cart").then(resp => {
            dispatch(addCartElem(resp.data))
        });
    }

}