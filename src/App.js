import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { CartProvider } from 'react-use-cart';

import Home from "./components/Home/home";
import Blog from './components/Blog/blog';
import Shop from './components/Shop/shop';
import Offer from './components/Offer/offer';
import ProductDetail from './components/ProductDetail/productDetail';
import BlogDetail from './components/BlogDetail/blogDetail';
import MessageList from './components/MessageList/messageList';
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/checkout';
import Contact from './components/Contact/contact';
import ThankYou from './components/thankYou/thankYou';
import Coupon from './components/Admin/Coupon/coupon';

import Signin from './components/Admin/Signin/signin';
import Dashboard from './components/Admin/Dashboard/dashboard';
import Register from './components/Admin/Register/register';
import Protected from './protected';

import ShopProduct from './components/Admin/Product/product';
import HomeProduct from './components/Admin/ProductHome/productHome';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productDetails" element={<ProductDetail />} />
          <Route path="/blogDetails" element={<BlogDetail />} />
          <Route path="/messageList" element={<MessageList />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/thankYou" element={<ThankYou />} />
          <Route
            path={"/dashboard"}
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path={"/shopProducts"}
            element={
              <Protected isSignedIn={isSignedIn}>
                <ShopProduct />
              </Protected>
            }
          />
          <Route
            path={"/productHome"}
            element={
              <Protected isSignedIn={isSignedIn}>
                <HomeProduct/>
              </Protected>
            }
          />
          <Route
            path={"/coupon"}
            element={
              <Protected isSignedIn={isSignedIn}>
                <Coupon/>
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
