import React        from 'react'
import {NavigationContainer} from '../redux/containers/components/NavigationContainer'

export const HomePage = () => (
  <div className="container">
    <NavigationContainer />
    <div className="card shadow mt-3">
      <div className="card-header">
        <h1 className="text-danger">Home Page</h1>
      </div>
      <div className="card-body">
        <p>
          Login/Register workflow. This is part of a MERN stack project where the front end was built with React, Redux and back end with Mongo, Node and Express.
        </p>
        <ul>
          <li>
            Front end repo: <a href="https://github.com/ezemgaray/login-register-react">https://github.com/ezemgaray/login-register-react</a>
          </li>
          <li>
            Back end (API) repo: <a href="https://github.com/ezemgaray/login-register-api">https://github.com/ezemgaray/login-register-api</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)