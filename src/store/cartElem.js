const defaultState = {
    cartElem:[],
    completeOrder: false,
}

const  ADD_CART_ELEM = 'addCartElem'
const  DEL_CART_ELEM = 'delCartElem'
const  R_COMPLETE_ORDER = 'rCompleteOrder'
export  const cartElem = (state = defaultState,action) =>
{
  switch (action.type)
  {
    
    case ADD_CART_ELEM:
      return {...state,cartElem: [...state.cartElem,...action.payload]}
    case DEL_CART_ELEM:
        return {...state,cartElem: state.cartElem.filter((elem) => !elem.title.toLowerCase().includes(action.title.toLowerCase()))}
    case R_COMPLETE_ORDER:
        return {...state,completeOrder: 1}
    default:
      return state
  }
}
export const addCartElem = (payload) =>({type: ADD_CART_ELEM,payload})
export const delCartElem = (title) =>({type: DEL_CART_ELEM,title})
export const rCompleteOrder = () => ({type: R_COMPLETE_ORDER})