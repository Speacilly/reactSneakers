
const defaultState = {
    searchValue: '',
}
export const searchValue = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case "onChangeSearchInput":
            return {searchValue: action.event}

    default:
      return state
  }
}
