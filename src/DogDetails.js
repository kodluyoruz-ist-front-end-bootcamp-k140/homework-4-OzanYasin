import React from 'react';
import { Link, useParams } from 'react-router-dom';
import dogs from './DogData';
import './DogDetails.css';

export default function DogDetails() {
  const { dogName } = useParams();
  const currentDog = dogs.find(
    (dog) => dog.name.toLowerCase() === dogName.toLowerCase()
  );
  const { src, name, age, facts } = currentDog;
  return (
    <div className="container">
      <div className="DogDetails row justify-content-center mt-5">
        <div className="col-11 col-lg-5">
          <div className="DogDetails-card card">
            <img className="card-img-top" src={src} alt={name} />
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <h4 className="card-subtitle text-muted">{age} years old</h4>
            </div>
            <ul className="list-group list-group-flush">
              {facts.map((fact, i) => (
                <li className="list-group-item" key={i}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link to="/dogs" className="btn btn-info">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
