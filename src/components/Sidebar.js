import React, { Component } from 'react'
import 'w3-css/w3.css'
import '../App.css'

export default class Sidebar extends Component {
  render() {
    return (
      <nav class="w3-sidebar w3-black w3-bar-block w3-small w3-hide-small w3-center">
      <h3 href="#" class="w3-bar-item w3-button">Temp</h3>
        <a href="#git" class="w3-bar-item w3-button">git</a>
        <a href="#linkedin" class="w3-bar-item w3-button">linkedin</a>
        <a href="#spr" class="w3-bar-item w3-button">spr</a>
      </nav>
    )
  }
}
