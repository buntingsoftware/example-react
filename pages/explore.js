import React from "react";
import Link from "next/link";
import products from "../static/products.js";

class Explore extends React.Component {
  createProducts () {
    const exploreItems = [];
    for (let product of products){
      exploreItems.push(
        <Link href={"product?id=" + product.id}  key={product.id}>
          <a className="product">
            <img src={ product.image } />
            <span className="product-name">{ product.name }</span>
            <span>{ product.price }</span>
          </a>
        </Link>
      )
    }
    return exploreItems;
  }

  render () {
    return (
      <div className="explore-content">
        <h1 className="mb">Explore products</h1>
        <section className="products">
          { this.createProducts() }
        </section>
        <div className="bContent">Bunting content will be rendered here</div>
      </div>
    )
  }
}

export default Explore;
