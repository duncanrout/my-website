import React, { Component } from 'react'
import 'w3-css/w3.css'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div class="w3-black w3-bar-block">
          <h3 class="w3-bar-item">Menu</h3>
          <a href="#" class="w3-bar-item w3-button">git</a>
          <a href="#" class="w3-bar-item w3-button">linkedin</a>
          <a href="#" class="w3-bar-item w3-button">resume</a>
        </div>
      </div>
    )
  }
}
