import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './global.css';
import App from './App.jsx';
import HomePage from './routes/Home/Home.jsx';
import ProductPage from './routes/Product/Product.jsx';
import CartPage from './routes/Cart/Cart.jsx';
import WishlistPage from './routes/Wishlist/Wishlist.jsx';
import ShopProviders from './contexts/ShopProviders.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'wishlist', element: <WishlistPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProviders>
      <RouterProvider router={router} />
    </ShopProviders>
  </StrictMode>,
);
