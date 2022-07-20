import React from 'react';
import dogs from './DogData';
import './DogList.css';

export default function DogList() {
  return (
    <div className="DogList">
      <h1 className="display-1 text-center">Dog List!</h1>
      <div className="container">
        <div className="row">
          {dogs.map((d) => (
            <div className="Dog col-lg-4 text-center" key={d.name}>
              <img src={d.src} alt={d.name} />
              <h3>{d.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
