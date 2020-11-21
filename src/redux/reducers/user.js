import { handleActions }  from 'redux-actions'
import { getUserToken }   from "../../utils/auth";
import {
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError
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
}, {
  user: user ? user : null,
  loading: false,
  status: null,
  error: false,
})