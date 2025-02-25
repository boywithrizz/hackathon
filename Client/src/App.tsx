import './App.css'
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import AlmaConnect from './Components/AlmaConnect/AlmaConnect';
import Register from './Components/Students/Register';
import UploadArchive from './Components/Archive/Archive';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <UploadArchive />
        </>
      ),
    },
    {
      path: "/almaconnect",
      element: (
        <>
          <AlmaConnect />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Navbar />
          <Register />
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;