import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import AppContext from './utils/context';
import InitialPage from './InitialPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Stop loading after 5 seconds
  }, []);

  return (
    <BrowserRouter>
      <AppContext>
        {isLoading ? (
          <InitialPage />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
            <Newsletter />
            <Footer />
          </>
        )}
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
