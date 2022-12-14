import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';

import Navbar from './components/Navbar';
import AuthenticationContext from './context/authentication';
import { loadUserInformation } from './services/authentication';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { SuccessPage } from './pages/SuccessPage';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage/ProductsPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserInformation().then(data => {
      setUser(data.user);
    });
  }, []);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
};

export default App;
