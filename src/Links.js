import React from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function Links() {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList />} />
      <Route path="/dogs/:dogName" element={<DogDetails />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

// <Route path="*" element={<ErrorPage />} />
