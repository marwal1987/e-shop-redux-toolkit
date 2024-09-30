import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { useEffect } from "react";
import { initGA, logPageView } from "./analytics";
import { initGTM } from "./gtm";

const App = () => {
  return (
    <Router>
      <AnalyticsWrapper />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const AnalyticsWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    initGA(); // Initiera Google Analytics
    logPageView(); // Logga den första sidvisningen
    initGTM(); // Initiera Google Tag Manager
  }, []);

  useEffect(() => {
    logPageView(); // Logga sidvisning varje gång platsen (URL:n) ändras
  }, [location]);

  return null; // Denna komponent returnerar inget men lyssnar på sidbyten
};

export default App;
