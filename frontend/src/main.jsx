import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './global.css';
import App from './App';
import HomePage from './routes/Home/Home';
import ProductPage from './routes/Product/Product';
import CartPage from './routes/Cart/Cart';
import WishlistPage from './routes/Wishlist/Wishlist';
import ShopProviders from './contexts/ShopProviders';

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
