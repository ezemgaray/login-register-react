import React                from 'react'
import { useSelector }      from 'react-redux'
import { Route, Redirect }  from 'react-router-dom'

/**
 * Simple MiddleWare to protect private routes.
 */
export const PrivateRoute = ({component: Component, ...rest}) => {
  const {user} = useSelector(state => state.user)
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route {...rest} render={ props => (
      user 
        ? <Component {...props} />
        : <Redirect to={{
          pathname: "/login",
          // state: {
          //   from: props.location,
          // }
          // You can also add a location status to define 'from'.
          // That way, you can redirect to the page 'from' after login.
          // Access by 'props.location.state.from'
        }} />
    )} />
  )
}