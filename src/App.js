import React, { Component } from 'react'
import './App.css'
import 'w3-css/w3.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div>
        <div class="w3-cell-row">
          <div class="w3-container w3-black w3-cell w3-cell-top">
            <Sidebar></Sidebar>
          </div>
          <div class="w3-container w3-black w3-cell w3-cell-bottom">
            <Main></Main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
