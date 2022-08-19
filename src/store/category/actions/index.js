import { CATEGORIES_ERROR, GET_CATEGORIES, TOGGLE_CATEGORIES_LOADER } from '..'
import { getCategoriesReq } from '../../../services'

export function toggleCategoriesLoader(bool) {
  return {
    type: TOGGLE_CATEGORIES_LOADER,
    payload: bool,
  }
}

export function getCategoriesAction() {
  return async function (dispatch) {
    try {
      dispatch(toggleCategoriesLoader(true))
      const response = await getCategoriesReq()
      dispatch(toggleCategoriesLoader(false))
      dispatch({
        type: GET_CATEGORIES,
        payload: response.data.data,
      })
    } catch (e) {
      dispatch(toggleCategoriesLoader(false))
      dispatch({
        type: CATEGORIES_ERROR,
        payload: 'ОШИБКА',
      })
    }
  }
}
