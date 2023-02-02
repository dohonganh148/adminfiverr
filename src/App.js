
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from "components/Layout";
import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<LayoutAdmin />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
