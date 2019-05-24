import React, { Component } from "react";
import Link from "next/link";

class Cart extends React.Component {

  render () {
    return (
      <div>
        <h1>Checkout</h1>
        <Link href="/complete"><a>Complete Purchase</a></Link>
        <div className="bContent">Bunting content will be rendered here</div>

      </div>
    )
  }
}


export default Cart
