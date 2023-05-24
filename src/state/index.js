import {combineReducers, createStore} from 'redux'
import { loadingReducer } from './loadingReducer.js'
import { ItemsR } from './itemsR.js'
import { searchValue } from './searchValue.js'
import { cartElem } from './cartElem.js'
import { showCart } from './showCart.js'
import { favoriteItems } from './favoriteItems.js'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    items: ItemsR,
    searchValue: searchValue,
    cartElem: cartElem,
    showCart: showCart,
    favoriteItems: favoriteItems,
})


export const store = createStore(rootReducer)