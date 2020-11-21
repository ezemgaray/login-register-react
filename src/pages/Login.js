import React                      from 'react'
import { useSelector }            from 'react-redux'
import { Navigation, LoginForm }  from '../components'
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
          <LoginForm/>
        </div>
      </div>
    )
}