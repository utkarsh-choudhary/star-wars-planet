import React, { useState, useEffect } from 'react';

const PlanetCard = ({ planet }) => {
  const { name, climate, population, terrain, residents } = planet;
  const [residentDetails, setResidentDetails] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const residentData = await Promise.all(residents.map(async (residentUrl) => {
        try {
          const response = await fetch(residentUrl);
          const data = await response.json();
          return {
            name: data.name,
            height: data.height,
            mass: data.mass,
            gender: data.gender,
          };
        } catch (error) {
          console.error('Error fetching resident details:', error);
          return null;
        }
      }));
      setResidentDetails(residentData.filter(Boolean)); 
    };

    fetchResidents();
  }, [residents]);

  return (
    <div className="planet-card">
      <h2>{name}</h2>
      <p>Climate: {climate}</p>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>

      <div className="residents-details">
        <h3>Residents:</h3>
        {residentDetails.length > 0 ? (
          <ul>
            {residentDetails.map((resident, index) => (
              <li key={index}>
                <p>Name: {resident.name}</p>
                <p>Height: {resident.height}</p>
                <p>Mass: {resident.mass}</p>
                <p>Gender: {resident.gender}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No residents available</p>
        )}
      </div>
    </div>
  );
};

export default PlanetCard;
