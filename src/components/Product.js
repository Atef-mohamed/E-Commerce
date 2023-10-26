import { NavLink } from "react-router-dom";
import'./Product.css';
function Product(props) {
  const { product, showBtn } = props;
  return (
    <>
      <div className="card mb-3 d-flex">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          {/* <p className="card-text">{product.description}</p> */}
          <p className="fw-bold text-secondary text-center">Price: {product.price}$</p>
          {showBtn && (
            <NavLink to={`/product/${product.id}`} className="btn btn-dark btn-details mt-auto">
              Details
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
