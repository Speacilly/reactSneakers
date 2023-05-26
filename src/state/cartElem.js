const defaultState = {
    cartElem:[],
    completeOrder: false,
}

export  const cartElem = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case 'addCartElem':
      return {...state,cartElem: [...state.cartElem,{pName: action.pName,pPrice: action.pPrice,pImg: action.pImg}]}
    case 'delCartElem':
        return {...state,cartElem: state.cartElem.filter((elem) => !elem.pName.toLowerCase().includes(action.pName.toLowerCase()))}
    case 'cleanCartElem':
        return {...state,cartElem: []}
    case 'rCompleteOrder':
        return {...state,completeOrder: 1}
    default:
      return state
  }
}
