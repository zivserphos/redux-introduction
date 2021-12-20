import React from "react";
import { connect } from "react-redux";
import Item from "./components/Item";

function App({ products, cart, total }) {
  const cartEmpty = cart.length === 0 ? true : false;
  return (
    <div className="App">
      <h2>products</h2>
      {products &&
        products.map((product) => <Item value={product} key={product.name} />)}
      <hr />
      <div id="shopping cart">
        <b>Your Shopping Cart</b>
        {cartEmpty ? (
          <div>
            please add some products to cart
            <div>
              <button disabled={true}>checkout</button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div>
          {cart.map((product) => {
            return (
              <div key={product.name}>
                {product.name} X {product.qty} {product.price}
              </div>
            );
          })}
          <div>Total: ${total}</div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
    total: state.shop.total,
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(App);
