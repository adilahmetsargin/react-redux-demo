import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions"
import { Badge, Table, Button } from "react-bootstrap";
import alertify from "alertifyjs";


class CartDetail extends Component {
    removeFromCart(product){
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " sepetten silindi")

    }
    render() {
        return (
            <div>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Unit Price</th>
      <th>Quantity</th>
      <th></th>

    </tr>
  </thead>
  <tbody>
      {this.props.cart.map(cartItem=>(
 <tr key={cartItem.product.id}>
 <td>{cartItem.product.id}</td>
 <td>{cartItem.product.productName}</td>
 <td>{cartItem.product.unitPrice}</td>
 <td>{cartItem.product.quantity}</td>
 <td>
     <button color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>
            Sil
             </button>
 </td>

</tr>
      ))}
   
    
  </tbody>
</Table>
            </div>
        )
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
  