import { handleActions }  from 'redux-actions'
import {
  loading,
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
  logoutSuccess,
  logoutError,
  resetState
} from '../actions/user'


export default handleActions({
  [loading]: (state, action)=>{
    return {
      ...state,
      loading: true
    }
  },
  [loginError]: (state, action)=>{
    return {
      ...state, 
      loading: false,
      error: action.payload
    }
  },
  [loginSuccess]: (state, action)=>{
    return {
      ...state,
      isLoggedIn: true,
      user: {
        ...action.payload.user,
        token: action.payload.token
      },
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
    return {
      ...state, 
      loading: false,
      error: action.payload
    }
  },
  [logoutSuccess]: (state, action)=>{
    return {
      ...state,
      isLoggedIn: false,
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
  loading: false,
  error: false,
  isLoggedIn: false,
  isRegistered: false,
  user: {
    name: null,
    email: null,
    _id: null,
    token: null
  },
})