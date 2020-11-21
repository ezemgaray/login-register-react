import { handleActions }  from 'redux-actions'
import { getUserToken }   from "../../utils/auth";
import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  logoutSuccess,
  logoutError,
  resetState
} from '../actions/user'

const user = getUserToken()

export default handleActions({
  [loginError]: (state, action)=>{
    return {...state, 
      loading: false,
      error: action.payload
    }
  },
  [loginSuccess]: (state, action)=>{
    return {
      ...state,
      user: action.payload.user,
      loading: false,
      error: false
    }
  },
  [registerSuccess]: (state, action)=>{
    return {
      ...state,
      isRegistered: true,
      loading: false,
      error: false
    }
  },
  [registerError]: (state, action)=>{
    return {...state, 
      loading: false,
      error: action.payload
    }
  },
  [logoutSuccess]: (state, action)=>{
    return {
      ...state,
      user: null,
      loading: false,
      error: false
    }
  },
  [logoutError]: (state, action)=>{
    return {
      ...state,
      loading: false,
      error: action.payload
    }
  },
  [resetState]: (state, action) => {
    return {
      ...state,
      [action.payload.property]: action.payload.value
    }
  }
}, {
  user: user ? user : null,
  loading: false,
  status: null,
  error: false,
})