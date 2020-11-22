import { Provider } from 'react-redux'
import store        from './redux/store'
import { 
  BrowserRouter as Router, 
  Route, Switch 
} from 'react-router-dom'
import {
  PrivateRoute,
  HomePage,
  Private
} from './pages'

import {
  LoginContainer,
  RegisterContainer 
} from './redux/containers/pages'

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <PrivateRoute path="/dashboard" component={Private} />
          <Route path="*" component={ () =>  'Page not found - 404' } />
       </Switch>
      </Router>
    </Provider>
  )
}
