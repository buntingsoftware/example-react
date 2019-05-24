import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { itemsInCart } from "../store"

class CartCount extends React.Component {
  render () {
    const { cartQuantity } = this.props
    return (
      <div>Cart ({ cartQuantity })</div>
    )
  }
}

function mapStateToProps (state) {
  const { cartQuantity } = state
  return { cartQuantity }
}


export default connect(
  mapStateToProps
)(CartCount)
