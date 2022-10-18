import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const api_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(`${api_url}/${id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <>
      <Product product={product} showButton={false} />
      <h1>product Details {product.title}</h1>
    </>
  );
}

export default ProductDetails;
