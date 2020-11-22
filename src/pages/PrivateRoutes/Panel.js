import React from 'react'
import {NavigationContainer} from '../../redux/containers/components/NavigationContainer'

export const Panel = () => (
  <div className="container">
    <NavigationContainer />
    <h1 style={{color:'red'}}>Home Panel</h1>
  </div>
)