import React from 'react';
import DogList from './DogList';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import DogDetails from './DogDetails';
import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/dogs" element={<DogList />} />
        <Route path="/dogs/:dogName" element={<DogDetails />} />
      </Routes>
    </div>
  );
}
