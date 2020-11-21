
import {createAction} from 'redux-actions'
import api            from '../../services/api'
import { 
  setUserToken, 
  deleteUserToken 
} from "../../utils/auth"

/**
 * Login Actions
 */
export const loginError   = createAction('loginError')
export const loginSuccess = createAction('loginSuccess')
export const loginRequest = (data) => async (dispatch) => {
  return api.user.login(data)
    .then(({data}) =>{
      setUserToken(data.data)
      dispatch(loginSuccess(data.data))
    })
    .catch(error =>{
      if(error.response){
        dispatch(loginError(error.response.data.error))
      }else{
        dispatch(loginError({
          message: error.message,
          type: "Internal error - 500",
        }))
      }
    })
}

/**
 * Logout Actions
 */
export const logoutSuccess  = createAction('logoutSuccess')
export const logoutError    = createAction('logoutError')
export const logoutRequest  = (dispatch) => {
  try {
    deleteUserToken()
    dispatch(logoutSuccess())
  } catch (error) {
    dispatch(logoutError({
      message: error.message,
      type: "Internal error - 500",
    }))
  }
}