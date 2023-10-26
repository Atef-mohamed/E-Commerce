import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Product from "./Product";
import Productdetails from "./Productdetail";
function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products/";
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <>
     <Productdetails product={product} showBtn={false}/>
    </>
  );
}

export default ProductDetails;
