import { useEffect, useState } from "react";
import Product from "./Product";
function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <>
      <h2 className="text-center p-3 mt-3">Our Product</h2>
      <div className="container">
        <div className="d-flex justify-content-center flex-wrap">
          <button className="btn btn-info m-3" onClick={() => getProducts()}>
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                className="btn btn-info m-3 "
                onClick={() => {
                  getProductInCategory(cat);
                }}
                key={cat}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Product product={product} key={product.id} showBtn={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductsList;
