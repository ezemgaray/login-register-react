import React                      from 'react'
import { NavLink, withRouter }    from 'react-router-dom'

const Nav = ({
  currentUserState: { isLoggedIn } = {},
  logout
}) => {

  return (
    <div className="">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link"
                  >
                    Home
                  </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink
                    exact
                    to="/dashboard"
                    className="nav-link"
                  >
                    Dashboard
                  </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink
                    to="/dashboard/profile"
                    className="nav-link"
                  >
                    Profile
                  </NavLink>
              </li>
          </ul>
          <ul className="navbar-nav">
            {
              !isLoggedIn
                ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                  </>
                )
                : <button className="btn btn-secondary" onClick={ () => logout() }>Logout</button>
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export const Navigation = withRouter(Nav)
