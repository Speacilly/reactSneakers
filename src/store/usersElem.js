const defaultState = {
    usersElem: []
}
export const ADD_USERS =  'ADD_USERS'
export const usersElem = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case "ADD_USERS":
        return {...state,Items: action.payload}
    default:
      return state
  }
}

export const addUsers = payload => ({type: ADD_USERS,payload})
