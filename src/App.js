import Carousel from "./componants/Carousel";
import Navbar from "./componants/Navbar";
import ProductsList from "./componants/ProductsList";
import { Routes, Route } from "react-router-dom";
import About from "./componants/About";
import ProductDetails from "./componants/ProductDetails";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <ProductsList />
            </>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
