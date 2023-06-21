"use client"; // This is a client component 👈🏽
import { useState } from 'react';

export default function Card({ pizza }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`card ${isExpanded ? 'expanded' : ''}`} 
      onClick={handleClick}
      style={{ backgroundImage: isExpanded ? 'none' : `url(https://img.freepik.com/fotos-kostenlos/frisch-gebackene-pizza-auf-rustikalem-holztisch-generiert-von-ki_24640-80691.jpg?w=1380&t=st=1687367059~exp=1687367659~hmac=2ce5c97ee78d81dce954ea6f8a33103ca0fa5f1a3bc827d59ac98d2ffab4ccc9)` }}
    >
      {isExpanded ? (
        <>
          <div className="card-header">
            <img src="https://via.placeholder.com/150" alt={pizza.name} />
          </div>
          <div className="card-body">
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
          </div>
          <div className="card-footer">
            <p>{pizza.price}</p>
          </div>
        </>
      ) : (
        <div className="card-content">
          <h2>{pizza.name}</h2>
          <p>{pizza.price}</p>
        </div>
      )}
    </div>
  );
}