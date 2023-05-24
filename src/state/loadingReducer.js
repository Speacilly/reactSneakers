
const defaultState = {
    skel: true,
}
export const loadingReducer = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case "rSkel":
                return{skel: false}
    default:
      return state
  }
}
