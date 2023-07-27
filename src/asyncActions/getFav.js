import { addFavoriteElem } from "../store/favoriteItems"
export function getFav (){
    return function(dispatch){
        fetch("https://64c29342eb7fd5d6ebd01431.mockapi.io/favorite")
        .then(res => res.json())
        .then(json => {
            dispatch(addFavoriteElem(json))
        })
    }

}