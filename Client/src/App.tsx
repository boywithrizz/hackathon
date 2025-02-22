import './App.css'
import React from "react";
import Navbar from './Components/Navbar/Navbar';
import Register  from './Components/Students/Register';
import { Route,Routes } from 'react-router-dom';
import UploadArchive from './Components/Archive/Archive';

const App: React.FC = () => {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<UploadArchive/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  );
};

export default App;
