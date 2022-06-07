import React, { Component } from 'react'
import './App.css'
import 'w3-css/w3.css'
import Sidebar from './components/Sidebar'
import SidebarSmall from './components/SidebarSmall'
import Main from './components/Main'
import MainSmall from './components/MainSmall'

class App extends Component {
  render() {
    return (
      <div class="w3-black">
        <Sidebar></Sidebar>
        <SidebarSmall></SidebarSmall>
        <Main></Main>
        <MainSmall></MainSmall>
      </div>
    );
  }
}

export default App;
