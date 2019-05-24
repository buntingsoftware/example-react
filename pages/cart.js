import React, { Component } from "react";
import Link from "next/link";
import CartCount from "../components/cartCount.js";

class Cart extends React.Component {
  render () {
    return (
      <div>
        <h1>Your cart</h1>
        <div><CartCount /></div>
        <Link href="/checkout"><a>Go to checkout</a></Link>
        <div className="bContent">Bunting content will be rendered here</div>
      </div>
    )
  }
}

export default Cart
