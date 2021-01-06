import React, { Component } from 'react'
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import CartSummary from "../cart/CartSummary"
import {Link} from "react-router-dom"

export default class Navi extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><Link to="/">React-Bootstrap</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link><Link to="/saveproduct">Ürün Ekle</Link></Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <CartSummary/>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }
}
