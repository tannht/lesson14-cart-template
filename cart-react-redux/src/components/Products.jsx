import React, { Component } from "react";
import Product from "./Product";

function mapStateToProps(state) {
  return {};
}

class Products extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
          <div className="row">
            {/* Product */}
            <Product />
            <Product />
            <Product />
          </div>
        </section>
      </div>
    );
  }
}

export default Products;
