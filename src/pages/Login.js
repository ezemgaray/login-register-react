import React, { useState, useEffect }  from 'react'
import { NavigationContainer }  from '../redux/containers/components/NavigationContainer'
import { Button }               from '../components/index'

import { Redirect }       from 'react-router-dom'


export const Login = ({
  currentUserState: { isLoggedIn, error, loading } = {},
  loginRequest,
  resetState
}) => {

  useEffect(() => {
    resetState('error', false)
  }, [resetState])

  const [credentials, setCredentials] = useState({password: null, email: null})
  const {path, message} = error

  // Run login request when submitting the form
  const handleLogin = () =>{
    loginRequest(credentials)
  }

  // If there is a logged in user, redirect to the panel.
  return isLoggedIn
    ? (<Redirect to="/dashboard" />)
    : (
      <div className="container">
        <NavigationContainer />
        <div className="d-flex justify-content-center">
          <div className="card border-ligth mt-3 shadow">
            <div className="card-header">Login</div>
            <div className="card-body">
              {
                error && error.type === 500
                  ? (
                  <div className="alert alert-danger">{message}</div>
                  )
                  : ''
              }
              <form
                onSubmit={ (e) => {
                  e.preventDefault()
                  handleLogin()
                }}
              >
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className={`form-control
                      ${path === 'email' 
                        ? 'is-invalid'
                        : ''
                      }`}
                    id="email" 
                    type="text" 
                    onChange={(e)=>setCredentials({...credentials, email: e.target.value})}
                  />
                  {path === 'email' 
                    ? (<small className="form-text text-danger">{message}</small>)
                    : ''
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input 
                    className={`form-control
                      ${path === 'password' 
                        ? 'is-invalid'
                        : ''
                      }`
                    }
                    id="password"
                    type="password"
                    onChange={(e)=>setCredentials({...credentials, password: e.target.value})}
                  />
                  {path === 'password' 
                    ? (<small className="form-text text-danger">{message}</small>)
                    : ''
                  }
                </div>
                <Button
                  htmlType='submit'
                  disabled={loading}
                >
                  {
                    loading
                      ? 'loading'
                      : 'Login'
                  }
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}