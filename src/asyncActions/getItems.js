import { addItems } from "../store/itemsR"
import { rSkel } from "../store/loadingReducer"
export function getItems (){
    return function(dispatch){
        fetch("https://64be51595ee688b6250c2fcf.mockapi.io/items")
        .then(res => res.json())
        .then(json => {
            dispatch(addItems(json))
            dispatch (rSkel())
        })
    }

}