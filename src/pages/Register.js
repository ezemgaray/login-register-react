import React, { useState, useEffect }  from 'react'
import {NavigationContainer}  from '../redux/containers/components/NavigationContainer'
import { Button }             from '../components/index'
import { Redirect }           from 'react-router-dom'

export const Register = ({
  currentUserState: { user, error, isRegistered, loading } = {},
  registerRequest,
  resetState
}) => {

  useEffect(() => {
    resetState('error', false)
  }, [resetState])

  const [credentials, setCredentials] = useState({name: null, email: null, password: null})
  const {path, message} = error

  const handleRegister = () =>{
    registerRequest(credentials)
  }

  // If there is a logged in user, redirect to the panel.
  return isRegistered
    ? (<Redirect to="/login" />)
    : user
      ? (<Redirect to="/dashboard" />)
      : (
      <div className="container">
        <NavigationContainer />
        <div className="d-flex justify-content-center">
          <div className="card border-ligth mt-3 shadow">
            <div className="card-header">Register</div>
            <div className="card-body">
              <form
                onSubmit={ (e) => {
                  e.preventDefault()
                  handleRegister()
                }}
              >
                <div className="form-group">
                  <label htmlFor="email">Name</label>
                  <input
                    className={`form-control
                      ${path === 'name' 
                        ? 'is-invalid'
                        : ''
                      }`}
                    id="name" 
                    type="text" 
                    onChange={(e)=>setCredentials({...credentials, name: e.target.value})}
                  />
                  {path === 'name' 
                    ? (<small className="form-text text-danger">{message}</small>)
                    : ''
                  }
                </div>
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
                    }`}
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
                      : 'Register'
                  }
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}