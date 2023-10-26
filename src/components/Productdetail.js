import { NavLink } from "react-router-dom";
import "./Productdetails.css";
function Productdetails(props) {
  const { product, showBtn } = props;
  return (
    <>
      <div className="card card-de">
        <img src={product.image} className="card-img-top img-details" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="fw-bold text-secondary text-center">
            Price: {product.price}$
          </p>
        </div>
      </div>
    </>
  );
}

export default Productdetails;
