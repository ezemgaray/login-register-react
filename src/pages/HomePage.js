import React        from 'react'
import {NavigationContainer} from '../redux/containers/components/NavigationContainer'


export const HomePage = () => (
  <div className="container">
    <NavigationContainer />
    <h1 style={{color:'red'}}>Home Page</h1>
  </div>
)