
import { useState }                 from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginRequest }             from '../../redux/actions/user'

export const LoginForm = () => {

  const dispatch  = useDispatch()
  const {error}   = useSelector((state) => state.user)
  const [credentials, setCredentials] = useState({password: null, email: null})

  /**
   * Run login request when submitting the form
   */
  const handleLogin = () =>{
    dispatch(loginRequest(credentials))
  }

  return (
    <div className="card border-ligth mt-3 shadow">
      <div className="card-header">Login</div>
      <div className="card-body">
        <form
          onSubmit={ (e) => {
            handleLogin()
            e.preventDefault()
          }}
        >
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className={`form-control
                ${error && error.path === 'email' 
                  ? 'is-invalid'
                  : ''
                }`}
              id="email" 
              type="text" 
              onChange={(e)=>setCredentials({...credentials, email: e.target.value})}
            />
            {error && error.path === 'email' 
              ? (<small className="form-text text-danger">{error.message}</small>)
              : ''
            }
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              className={`form-control
                ${error && error.path === 'password' 
                  ? 'is-invalid'
                  : ''
                }`
              }
              id="password"
              type="password"
              onChange={(e)=>setCredentials({...credentials, password: e.target.value})}
            />
            {error && error.path === 'password' 
              ? (<small className="form-text text-danger">{error.message}</small>)
              : ''
            }
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}