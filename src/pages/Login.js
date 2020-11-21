import React                      from 'react'
import { useSelector }            from 'react-redux'
import { Navigation, LoginForm }  from '../components'
import { loginRequest }           from '../redux/actions/user'
import { Redirect }               from 'react-router-dom'

export const Login = () => {
  const {user} = useSelector(state => state.user)

  /**
   * If there is a logged in user, redirect to the panel.
   */
  return user
    ? (<Redirect to="/dashboard" />)
    : (
      <div className="container">
        <Navigation />
        <div className="d-flex justify-content-center">
          <LoginForm loginRequest={loginRequest}/>
        </div>
      </div>
    )
}