import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart, incrementCartQuantity } from "../store.js";

import Link from "next/link";
import products from "../static/products.js";

class Product extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       product: {}
     };
   }

  componentDidMount () {
    const id = window.location.search.split("=")[1];
    products.forEach((v, i) => {
      if (id === v.id){
        this.setState({ product: v })
      }
    });
  }

  add = () => {
    this.props.addToCart(this.state.product);
    this.props.incrementCartQuantity();
  }

  render () {
    return (
      <div>
        <section className="pdp-listing">
          <img src={ this.state.product.image } />
          <div className="product-details ml">
            <span className="product-name">{ this.state.product.name }</span>
            <span>{ this.state.product.price }</span>
            <button className="product-buy-button" onClick={ this.add }>Add to cart!</button>
          </div>
          <div className="bContent">Bunting content will be rendered here</div>

        </section>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { itemsInCart, cartQuantity } = state
  return { itemsInCart, cartQuantity }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addToCart, incrementCartQuantity }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
