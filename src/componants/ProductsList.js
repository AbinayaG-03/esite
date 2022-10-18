import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const api_url_cat = "https://fakestoreapi.com/products/categories";
  const api_url_ca = "https://fakestoreapi.com/products/category";
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const getcat = (cat) => {
    console.log(cat);
    fetch(`${api_url_ca}/${cat}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  const getall = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  const getCat = (api) => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  useEffect(() => {
    getall(api_url);
    getCat(api_url_cat);
  }, []);
  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <button
          className="btn btn-info p-1 mb-3"
          onClick={() => getall(api_url)}
        >
          All
        </button>

        {categories.map((cat) => {
          return (
            <button
              key={cat}
              className=" btn btn-info  mx-2 p-1 mb-3"
              onClick={() => {
                getcat(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
