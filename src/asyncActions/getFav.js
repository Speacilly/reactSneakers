import { addFavoriteElem } from "../store/favoriteItems"
import axios from "axios";
export function getFav (){
    return function(dispatch){
        axios.get("https://64c29342eb7fd5d6ebd01431.mockapi.io/favorite").then(resp => {
           
            dispatch(addFavoriteElem(resp.data))
        });
    }

}