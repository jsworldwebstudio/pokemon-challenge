import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';

  class AppNavbar extends Component {
    state = {
      isOpen: false
    };

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-5 fixed-top">
            <Container>
              <NavbarBrand href="/">Pokemons</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://github.com/jsworldwebstudio/pokemon-challenge.git">
                      Link to Code on Github
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );
    };
  };

  export default AppNavbar;