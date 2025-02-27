
import {createAction} from 'redux-actions'
import api            from '../../services/api'
import { 
  setUserToken, 
  deleteUserToken 
} from "../../utils/auth"


/**
 * Loading - Waiting for response.
 */
export const loading = createAction('loading')
export const loadingRequest = () => (dispatch) => {
  dispatch(loading())
}


/**
 * Login Actions
 */
export const loginError   = createAction('loginError')
export const loginSuccess = createAction('loginSuccess')
export const loginRequest = (data) => async (dispatch) => {

  dispatch(loading())

  return api.user.login(data)
    .then(({data}) =>{
      setUserToken(data.data.token)
      dispatch(loginSuccess(data.data))
    })
    .catch(error =>{
      if(error.response){
        dispatch(loginError(error.response.data.error))
      }else{
        dispatch(loginError({
          message: `${error.message} - Internal Error. Try again`,
          type: 500,
        }))
      }
    })
}

/**
 * Register Actions
 */
export const registerError   = createAction('registerError')
export const registerSuccess = createAction('registerSuccess')
export const registerRequest = (data) => async (dispatch) => {

  dispatch(loading())

  return api.user.register(data)
    .then(({data}) =>{
      dispatch(registerSuccess(data.data))
      // reset state to prevent redirect in register section.
      setTimeout(() => dispatch(resetStateAction('isRegistered', false)),1000)
    })
    .catch(error =>{
      if(error.response){
        dispatch(registerError(error.response.data.error))
      }else{
        dispatch(registerError({
          message: `${error.message} - Internal Error`,
          type: 500,
        }))
      }
    })
}

/**
 * Logout Actions
 */
export const logoutSuccess  = createAction('logoutSuccess')
export const logoutError    = createAction('logoutError')
export const logoutRequest  = () => (dispatch) => {
  try {
    deleteUserToken()
    dispatch(logoutSuccess())
  } catch (error) {
    dispatch(logoutError({
      message: error.message,
      type: 500,
    }))
  }
}

/**
 * Clear state property
 * clear or re define property
 */
export const resetState = createAction('resetState')
export const resetStateAction = (property, value) => (dispatch) => {
  dispatch(resetState({property, value}))
}