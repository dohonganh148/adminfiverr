
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from "components/Layout";
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchProfileAction } from 'redux/actions/authen';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction())
  }, [dispatch]);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<LayoutAdmin />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
