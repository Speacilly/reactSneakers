const defaultState = {
    cartElem:[],
}

export  const cartElem = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case 'addCartElem':
      return {...state,cartElem: [...state.cartElem,{pName: action.pName,pPrice: action.pPrice,pImg: action.pImg}]}
    case 'delCartElem':

        return {cartElem: state.cartElem.filter((elem) => !elem.pName.toLowerCase().includes(action.pName.toLowerCase()))}
    default:
      return state
  }
}
