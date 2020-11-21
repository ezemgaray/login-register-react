
import { useState }                 from 'react';
import { useDispatch, useSelector } from "react-redux";
import { registerRequest }             from '../../redux/actions/user'



export const RegisterForm = () => {
  const dispatch  = useDispatch();
  const {user, error}   = useSelector((state) => state.user);
  const [credentials, setCredentials] = useState({name: null, email: null, password: null});

  console.log(user);

  const handleRegister = () =>{
    dispatch(registerRequest(credentials))
  }

  return (
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
                ${error && error.path === 'name' 
                  ? 'is-invalid'
                  : ''
                }`}
              id="name" 
              type="text" 
              onChange={(e)=>setCredentials({...credentials, name: e.target.value})}
            />
            {error && error.path === 'name' 
              ? (<small className="form-text text-danger">{error.message}</small>)
              : ''
            }
          </div>
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
              }`}
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
            Register
          </button>
        </form>
      </div>
    </div>
  )
}