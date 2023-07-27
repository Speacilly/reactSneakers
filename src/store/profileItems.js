const defaultState = {
    profItems:[],
}
export  const profileItems = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case 'addProfileItems':
      return {...state,profItems: action.cartElem}
    default:
      return state
  }
}
