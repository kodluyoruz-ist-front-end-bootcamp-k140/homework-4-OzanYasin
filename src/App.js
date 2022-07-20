import React from 'react';
import Navbar from './Navbar';
import Links from './Links';
import './App.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Links />
      </div>
    </div>
  );
}
