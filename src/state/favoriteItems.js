const defaultState = {
    favoriteItems:[],
}

export  const favoriteItems = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case 'addFavoriteElem':
      return {...state,favoriteItems: [...state.favoriteItems,{pName: action.pName,pPrice: action.pPrice,pImg: action.pImg}]}
    case 'delFavoriteElem':

        return {favoriteItems: state.favoriteItems.filter((elem) => !elem.pName.toLowerCase().includes(action.pName.toLowerCase()))}
    default:
      return state
  }
}
