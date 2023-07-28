import React from 'react';
import './App.css'
import { createRoot } from "react-dom/client";  
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Rootlayout from './components/Rootlayout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Product from './components/Product';

function App() {
  const router =createBrowserRouter (createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>} >
    <Route path="/dashbord" element={<Dashboard/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/product" element={<Product/>}/>
   </Route>
  ))

  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App;
