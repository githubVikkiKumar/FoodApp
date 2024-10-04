import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';  
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import LoginPopup from './components/LoginPopup/Loginpopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Conditionally render LoginPopup component */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />} {/* Shows LoginPopup if true */}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} /> {/* Navbar with Login handler */}

        {/* Define application routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeOrder' element={<PlaceOrder />} />
          <Route path='*' element={<div>Page not found</div>} /> {/* 404 Page */}
        </Routes>
      </div>

      <Footer />  {/* Footer after routes */}
    </>
  );
};

export default App;
