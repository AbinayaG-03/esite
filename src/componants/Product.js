import { Link } from "react-router-dom";

function Product(props) {
  const { product, showButton } = props;

  return (
    <>
      <div className="card " style={{ height: "1000px" }}>
        <img src={product.image} className="card-img-top" alt="" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text mt-">{product.description}</p>
          <p>{product.price}$</p>
          {showButton && (
            <Link
              className="btn btn-primary  mt-auto"
              to={`product/${product.id}`}
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;
