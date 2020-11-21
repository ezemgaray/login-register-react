import React                      from 'react'
import { useSelector }            from 'react-redux'
import { Navigation, RegisterForm }  from '../components'
import { Redirect }               from 'react-router-dom'

export const Register = () => {
  const {user, isRegistered} = useSelector(state => state.user)
  console.log(user);
  /**
   * If there is a logged in user, redirect to the panel.
   */
  return isRegistered
    ? (<Redirect to="/login" />)
    : user
      ? (<Redirect to="/dashboard" />)
      : (
      <div className="container">
        <Navigation />
        <div className="d-flex justify-content-center">
          <RegisterForm/>
        </div>
      </div>
    )
}