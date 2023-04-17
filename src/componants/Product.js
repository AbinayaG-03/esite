import CartCal from "./CartCal";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../App";

function Product(props) {
  // const { Cart, setCart } = useContext(Context);

  const { product } = props;
  const { Cart, setCart } = useContext(Context);

  return (
    <>
      <div className="card " style={{ height: "600px" }}>
        <img
          src={product.image}
          className="card-img-top "
          style={{ height: "300px" }}
          alt=""
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mh-20 ">{product.title}</h5>
          <p>Price : {product.price} $</p>
          <CartCal prod={product} />
        </div>
      </div>
    </>
  );
}
export default Product;
