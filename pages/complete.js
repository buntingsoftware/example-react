import React, { Component } from "react";
import Link from "next/link";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clearCart, clearCartQuantity } from "../store.js";

class Complete extends React.Component {

  componentDidMount () {
    this.props.clearCart();
    this.props.clearCartQuantity();
  }

  render () {

    return (
      <div>
        <h1>Thanks for your order</h1>
        <Link href="/"><a>Go home</a></Link>
        <div className="bContent">Bunting content will be rendered here</div>

      </div>
    )
  }

}

function mapStateToProps (state) {
  const { itemsInCart, cartQuantity } = state
  return { itemsInCart, cartQuantity }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clearCart, clearCartQuantity }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Complete)
