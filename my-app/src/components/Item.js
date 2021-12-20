// import React from "react";

// const Item = () => {
//   return <></>;
// };

// export default Item;
// import React from "react";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   Button,
//   Typography,
// } from "@mui/material";

// console.log(Card, CardActions, CardContent, Button, Typography);

import * as React from "react";
import { connect } from "react-redux";
import * as ShoppingActions from "../redux/shopping/shopping-actions";

const Item = ({ value, addToCart }) => {
  const { name, price, amount, id } = value;
  return (
    <div>
      <div>
        {name} {price} X {amount}
      </div>
      <button className="add-to-cart" onClick={() => addToCart(id)}>
        add to cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(ShoppingActions.addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
