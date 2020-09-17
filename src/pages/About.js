import React, { Component } from 'react';
import './About.css';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
  render() {
    return (
      <div className="About container">
        <h1>About</h1>
        <p>
          Use this website to identify your favorite Gen 1 Pokémon! 
          <br></br> - Models images of Pokémon using MobileNet to a 86% accuracy
          <br></br>
          <br></br>
          Please don't sue me Nintendo
        </p>
      </div>
    );
  }
}