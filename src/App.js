import { Provider } from 'react-redux'
import store        from './redux/store'
import { 
  BrowserRouter as Router, 
  Route, Switch 
} from 'react-router-dom'
import {
  PrivateRoute,
  HomePage,
  Login,
  Register,
  Private
} from './pages'


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Private} />
          <Route path="*" component={ () =>  'Page not found - 404' } />
       </Switch>
      </Router>
    </Provider>
  );
}
