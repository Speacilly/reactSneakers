import { addItems } from "../store/itemsR"
import axios from "axios";
import { rSkel } from "../store/loadingReducer"
export function getItems (){
    return function(dispatch){
        axios.get("https://64be51595ee688b6250c2fcf.mockapi.io/items").then(resp => {
            dispatch(addItems(resp.data))
            dispatch (rSkel())
        });
    }

}