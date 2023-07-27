const defaultState = {
    favoriteItems:[],
}

const  ADD_FAVORITE_ELEM = 'addFavoriteElem'
const  DEL_FAVORITE_ELEM = 'delFavoriteElem'

export  const favoriteItems = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case ADD_FAVORITE_ELEM:
      return {...state,favoriteItems: [...state.favoriteItems,...action.payload]}
    case DEL_FAVORITE_ELEM:
        return {favoriteItems: state.favoriteItems.filter((elem) => !elem.title.toLowerCase().includes(action.title.toLowerCase()))}
    default:
      return state
  }
}

export const addFavoriteElem = (payload) => ({type:ADD_FAVORITE_ELEM,payload})
export const delFavoriteElem = (title) => ({type:DEL_FAVORITE_ELEM,title})