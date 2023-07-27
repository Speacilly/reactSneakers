const defaultState = {
    Items:[],
}

export const ADD_ITEMS =  'ADD_ITEMS'
export  const ItemsR = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case ADD_ITEMS:
      return {...state,Items: action.payload}
    default:
      return state
  }
}

export const addItems = payload => ({type: ADD_ITEMS,payload})