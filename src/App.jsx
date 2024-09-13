import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/product/:id" 
          element={<ProductPage />} 
        />
        <Route
          path="/cart"
          element={
            <CartPage />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
