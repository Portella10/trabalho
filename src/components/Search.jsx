// src/components/Search.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Substitua pelo seu API Key do TMDB

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=pt-BR&query=${query}`);
    setResults(response.data.results);
  };

  return (
    <div>
      <h2>Buscar Séries</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Digite o nome da série" 
        />
        <button type="submit">Buscar</button>
      </form>
      <div className="series-list">
        {results.map((serie) => (
          <div key={serie.id} className="serie-card">
            <Link to={`/series/${serie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
              />
              <h3>{serie.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
