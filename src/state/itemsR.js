const defaultState = {
    Items:[],
}
export  const ItemsR = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case 'addItems':
      return {...state,Items: action.payload}
    default:
      return state
  }
}
