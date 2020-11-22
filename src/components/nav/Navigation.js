import React                      from 'react'
import { Link, withRouter }       from 'react-router-dom'

const Nav = ({
  currentUserState: { user } = {},
  logout
}) => {

  return (
    <div className="">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/profile">Profile</Link>
              </li>
          </ul>
          <ul className="navbar-nav">
              <li className="nav-item">
                {
                  !user
                    ? <Link className="nav-link" to="/login">Login</Link>
                    : <button className="btn btn-secondary" onClick={ () => logout() }>Logout</button>
                }
              </li>
              {
                !user
                  ? <li className="nav-item">
                      <Link className="nav-link" to="/register">Register</Link>
                    </li>
                  : ''
              }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export const Navigation = withRouter(Nav)
