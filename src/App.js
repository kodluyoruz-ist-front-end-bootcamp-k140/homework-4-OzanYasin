import React, { useState } from 'react';
import DogList from './DogList';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DogDetails from './DogDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList />} />
      <Route path="/dogs/:dogName" element={<DogDetails />} />
    </Routes>
  );
}
