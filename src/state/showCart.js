
const defaultState = {
    showCart: false,
}
export const showCart = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case "showC":
                return{showCart: !state.showCart}
    default:
      return state
  }
}
