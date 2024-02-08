import {applyMiddleware,combineReducers, createStore} from 'redux'
import { loadingReducer } from './loadingReducer.js'
import { ItemsR } from './itemsR.js'
import { searchValue } from './searchValue.js'
import { cartElem } from './cartElem.js'
import { showCart } from './showCart.js'
import { favoriteItems } from './favoriteItems.js'
import { profileItems } from './profileItems.js'
import { temaDW } from './temaDW.js'
import { usersElem } from './usersElem.js'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    items: ItemsR,
    searchValue: searchValue,
    cartElem: cartElem,
    showCart: showCart,
    favoriteItems: favoriteItems,
    profileItems: profileItems,
    temaDW: temaDW,
    usersElem: usersElem,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))