import React                from 'react'
import { useSelector }      from 'react-redux'
import { Route, Redirect }  from 'react-router-dom'

/**
 * Simple MiddleWare to protect private routes.
 */
export const PrivateRoute = ({component: Component, ...rest}) => {
  const {isLoggedIn} = useSelector(state => state.user)
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route {...rest} render={ props => (
      isLoggedIn 
        ? <Component {...props} />
        : <Redirect to={{
          pathname: "/login",
          state: {
            from: props.location,
          }
        }} />
    )} />
  )
}