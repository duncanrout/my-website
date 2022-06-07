import React, { Component } from 'react'
import '../App.css'
//<img src="/img/chicago.jpg" alt="image" width="500" height="600"/>
export default class MainSmall extends Component {
  render() {
    return (
        <div class="w3-padding-large w3-hide-medium w3-hide-large" id="mainsmall">
          <header class="w3-container w3-center w3-black" id="home">
            <h1 class="w3-jumbo"><span class="w3-hide-small">I'm</span> Duncan Rout.</h1>
            <p>Programmer.</p>
            <img src="/img/chicago.jpg" alt="image" class="w3-image" width="992" height="1108"></img>
          </header>
        </div>
    )
  }
}
