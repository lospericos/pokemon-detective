
import React from 'react';
import './NotFound.css';

/**
 * Rendered when a route is not found (404).
 */
export default () =>
  <div className="NotFound">
    <img src="/pokeball.png" className="notfound-logo" alt="pokeball" />
    <h3>The page you were looking for is not here yet.</h3>
    <br />
    <a href="/">Go Home</a>
  </div>;