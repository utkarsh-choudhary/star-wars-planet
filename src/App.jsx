import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import Pagination from './components/Pagination';

const API_URL = 'https://swapi.dev/api/planets/';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPlanets(API_URL + `?page=${currentPage}`)
      .then(data => {
        setPlanets(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      })
      .catch(error => console.error('Error fetching planets:', error));
  }, [currentPage]);

  const fetchPlanets = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="container mt-4">
        {/* Your planet list rendering code */}
        {planets.map(planet => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
        <Pagination
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </main>
    </div>
  );
};

export default App;
