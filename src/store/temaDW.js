const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultTheme = isDarkTheme ? true : false
document.documentElement.setAttribute('data-theme', localStorage.getItem('app-theme') || defaultTheme)
const defaultState = {
    temaDW: localStorage.getItem('app-theme') || defaultTheme,
}

export const temaDW = (state = defaultState,action) =>
{
  switch (action.type)
  {
    case "temaDW":
                document.documentElement.setAttribute('data-theme', !state.temaDW)
                localStorage.setItem('app-theme',!state.temaDW )
                return{temaDW: !state.temaDW}
    default:
      return state
  }
}