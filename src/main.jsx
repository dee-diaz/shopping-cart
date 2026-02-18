import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './global.css';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  // {
  //   path: 'product',
  //   element: <ProductPage />,
  // },
  // {
  //   path: 'cart',
  //   element: <CartPage />,
  // },
  // {
  //   path: 'wishlist',
  //   element: <WishlistPage />,
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
