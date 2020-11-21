import React              from 'react'
import { Switch, Route }  from 'react-router-dom';
import { Panel }          from './PrivateRoutes/Panel'
import { Profile }        from './PrivateRoutes/Profile'

/**
 * Private routes
 * Requires login to access
 */
export const Private = () => (
  <Switch>
    <Route path="/dashboard/profile" component={Profile} />
    <Route exact path="/dashboard" component={Panel} />
    {/* TODO! Add 404 Page */}
    <Route path="/dashboard*" component={ () =>  'Page not found - 404' } />
  </Switch>
)
