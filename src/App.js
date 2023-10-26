import React, { Component } from "react";
import Navbar from "./components/NavBar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import { Route, Routes } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <ProductsList />
              </>
            }
          />
          <Route path="about" element={<About/>}/>
          <Route path="product/:productId" element={<ProductDetails/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
