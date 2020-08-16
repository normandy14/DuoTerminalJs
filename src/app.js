import React, { Component } from 'react'
import Login from './login'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div class="flex">
          <Login></Login>
        </div>
      </div>
    )
  }
}

export default App;