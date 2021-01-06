import React, { Component } from "react";
import { NavDropdown, Nav, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions"
import {Link} from "react-router-dom"
import alertify from "alertifyjs";


class CartSummary extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " sepetten silindi")

    }
  renderEmpty() {
    return <Nav.Link href="#">Sepetiniz Boş</Nav.Link>;
  }

  renderSummary() {
    return (
      <NavDropdown title="Sepetiniz" id="collasible-nav-dropdown">
        {this.props.cart.map((cartItem) => (
          <NavDropdown.Item key={cartItem.product.id} href="#action/3.1">
            <Badge
              onClick={() =>
                this.removeFromCart(cartItem.product)
              }
            >
              X
            </Badge>
            {cartItem.product.productName}
            <Badge>{cartItem.quantity}</Badge>
          </NavDropdown.Item>
        ))}
        <NavDropdown.Divider />
        <NavDropdown.Item><Link to={"/cart"}>Sepete Git</Link></NavDropdown.Item>
      </NavDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
