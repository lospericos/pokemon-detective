import React, {Component} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import Routes from './Routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar collapseOnSelect className="app-nav-bar" variant="dark" expand="lg">
            <Navbar.Brand href="/">PokeDetective</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Link className="nav-link" to="/">Detect</Link>
                <Link className="nav-link" to="/about">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Container>
          <Routes />
        </Container>
      </div>
    );
  }
}

//export default App;

export default withRouter(App);
