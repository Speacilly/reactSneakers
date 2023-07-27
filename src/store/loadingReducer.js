
const defaultState = {
    skel: true,
}

export const SKEL =  'SKEL'
export const loadingReducer = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case SKEL:
                return{skel: false}
    default:
      return state
  }
}
export const rSkel = () => ({type: SKEL})