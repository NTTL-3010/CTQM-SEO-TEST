import ProductDetails from "../pages/products/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function IndexRoute() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProductDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  );  
}
