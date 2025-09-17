import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './Component/App';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import About from './Component/About';
import Contacts from './Component/Contacts';
import Login from './Component/Login';
import Register from './Component/Register';
import Product from './Component/Product';
import Error from './Component/Error';
import './index.css';
import ThemeProvider from './Context/ThemeContext';
import PrductDetails from './Component/ProductDetails';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactMemo from './Memo/ReactMemo';
import { UseMemo } from './Memo/UseMemo';


const MyRouter = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contacts',
        element: <Contacts />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/productdetails/:pid',
        element: <PrductDetails />
      },
      {
        path: '/reactmemo',
        element: <ReactMemo />
      },
      {
        path: '/usememo',
        element: <UseMemo />
      }

    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider>

    <RouterProvider router={MyRouter} />

  </ThemeProvider>

);

reportWebVitals();
