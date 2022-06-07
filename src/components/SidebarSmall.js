import React, { Component } from 'react'
import 'w3-css/w3.css'
import '../App.css'

export default class SidebarSmall extends Component {
  render() {
    return (
      <div class="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <a href="#git" class="w3-bar-item w3-button">git</a>
          <a href="#linkedin" class="w3-bar-item w3-button">linkedin</a>
          <a href="#spr" class="w3-bar-item w3-button">spr</a>
        </div>
      </div>
    )
  }
}
