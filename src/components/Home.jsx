// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'https://api.tvmaze.com/shows'; // Substitua pelo seu API Key do TMDB
const API_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR`;

const Home = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      const response = await axios.get(API_URL);
      setSeries(response.data.results);
    };
    fetchSeries();
  }, []);

  return (
    <div>
      <h2>Séries Populares</h2>
      <div className="series-list">
        {series.map((serie) => (
          <div key={serie.id} className="serie-card">
            <Link to={`/series/${serie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
              />
              <h3>{serie.name}</h3>
            </Link>
            <Link to={`/cast-member/${serie.id}`}>
              <button>Ver Elenco Famoso</button>
            </Link>
            <Link to={`/production-company/${serie.id}`}>
              <button>Ver Produtora</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
