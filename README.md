# login-register-react  
Login/Register workflow. This is part of a MERN stack project where the front end was built with React, Redux and back end with Mongo, Node and Express.

The back end (API) is in the repo: [login-register-api](https://github.com/ezemgaray/login-register-api).

## Table of Contents

- [The project](#the-project)
  - [Routes](#routes)
  - [Built with](#built-with)
- [Getting Started](#getting-tarted)
  - [Prerequisites](#prerequisites)
  - [Instalation](#instalation)
- [Development](#development)
  - [Private Routes](#private-routes)
  - [Load User](#load-user)


## The project  
[&#8593; Guide](#table-of-content)

Login/Register worklow application that implements private routes and asynchronous actions.  
When a user is authenticathed only the token is saved to local storage to prevent esposure data and tampering.
If the token saved is tampered with, when the app loads, it checks the token and removes it if it's wrong.  
Just to check the private paths, the navbar always shows `/dashboard` and `/profile`.  
This project works with **login-register-api**. -> [view repo](https://github.com/ezemgaray/login-register-api)

### Routes
  Public and Private routes

- Public
  - `/`
  - `/login`
  - `/register`
- Private
  - `/dashboard`
  - `/dashboard/profile`

### Built with

- [React](https://reactjs.org)
- [Redux](https://redux.js.org)
- [Create react app](https://create-react-app.dev/)

## Getting Started
[&#8593; Guide](#table-of-content)

### Prerequisites
This project requires the following to run

- [Node js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [login-register-api](https://github.com/ezemgaray/login-register-api)

### Instalation 

- Clone repos
  - `git clone https://github.com/ezemgaray/login-register-react.git`
  - `git clone https://github.com/ezemgaray/login-register-api`
- Install NPM packages
  - `npm install`
- Run
  - `npm start`

## Development
[&#8593; Guide](#table-of-content)

### Private Routes

To make private routes I use a component like a middleware. This component check the estate `isLoggedIn` and if it's **true**, go to the private path or redirect to the Login page if it's **false**.  
In the redirect, the `state.from` is added to go to the previously required page.

**Check authentication**  
`src/pages/PrivateRoutes/PrivateRoute.js`

```javascript
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
```


**Main Router**  
`src/App.js`

```javascript

export default function App() {
  return (
    <Provider store={store}>
      <LoadUserContainer/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />

          // Otherwise, redirect the user to /login page
          <PrivateRoute path="/dashboard" component={Private} />

          <Route path="*" component={ () =>  'Page not found - 404' } />
       </Switch>
      </BrowserRouter>
    </Provider>
  )
}
```

**Private Routes**  
`src/pages/Private.js`

```javascript
export const Private = () => (
  <Switch>
    <Route path="/dashboard/profile" component={Profile} />
    <Route exact path="/dashboard" component={Panel} />
    <Route path="/dashboard*" component={ () =>  'Page not found - 404' } />
  </Switch>
)
```

### Load User

When a user logs in, only the token received from the API is saved to local storage. In this way when the app is loaded, the first action is to check if a token exists to know if a user is logged in and to fill in the user `state`.
Because the local storage can be tampered with, the user data is not saved, that way is necessary to check if the token is correct and retreive user data from the API. If the token is invalid, it's removed
To do that I'm using the following component before the main router

`src/redux/containers/components/LoadUserContainer.js`

```javascript
function LoadUser({
  resetState
}) {
  useEffect(()=>{
    /**
     * Check user logged in. 
     * Check if the token is correck and return user data.
     */
    const checkLoggedIn = async () => {
      const token = getUserToken()
      if(!token) return // If there are no toke, continue
      const user = await api.user.whoami(token)
        .then(({data}) => data)
        .catch( _ => {
          deleteUserToken() // When the token is wron, remove it
        })
      // Update state only if the token is correct
      if(user){
        resetState('user', {
          ...user,
          token
        })
        resetState('isLoggedIn', true)
      }
    }
    checkLoggedIn()
  }, [resetState])

  return (<></>)
}
```

## Authors

- [Ezequiel Garay](https://github.com/ezemgaray) [![LinkedIn][linkedin-shield]][linkedin-url]



[linkedin-url]: https://linkedin.com/in/ezequiel-garay
