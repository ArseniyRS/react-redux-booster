export const GET_CATEGORIES = 'GET_CATEGORIES'
export const TOGGLE_CATEGORIES_LOADER = 'TOGGLE_CATEGORIES_LOADER'
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR'

const intialState = {
  categories: [],
  isLoading: false,
  error: '',
}

// eslint-disable-next-line default-param-last
export const categoryReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      console.log('kekeke')
      return {
        ...state,
        categories: action.payload,
      }
    case TOGGLE_CATEGORIES_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      }
    case CATEGORIES_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default: {
      return { ...state }
    }
  }
}
