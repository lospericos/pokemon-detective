
import React from 'react';
import './NotFound.css';

/**
 * Rendered when a route is not found (404).
 */
export default () =>
  <div className="NotFound">
    {/* <img src="./imgs/pokeball.png" className="notfound-logo" alt="pokeball" /> */}
    <br></br>
    <h3>The page you were looking for is not here yet.</h3>
    <img src="./favicon_io/android-chrome-192x192.png" className="notfound-logo" alt="pokeball" />
    <br></br>
    <br></br>
    <a href={process.env.PUBLIC_URL+"/"}>Go Home</a>
    <br></br>

  </div>;