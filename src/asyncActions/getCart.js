import { addCartElem } from "../store/cartElem"
export function getCart (){
    return function(dispatch){
        fetch("https://64be51595ee688b6250c2fcf.mockapi.io/cart")
        .then(res => res.json())
        .then(json => {
            dispatch(addCartElem(json))
        })
    }

}