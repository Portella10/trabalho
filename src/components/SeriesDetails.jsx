// src/components/SeriesDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Substitua pelo seu API Key do TMDB

const SeriesDetails = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    const fetchSeriesDetails = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=pt-BR`);
      setSerie(response.data);
    };
    fetchSeriesDetails();
  }, [id]);

  if (!serie) return <div>Carregando...</div>;

  return (
    <div>
      <h2>{serie.name}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} />
      <p>{serie.overview}</p>
      <h4>Avaliação: {serie.vote_average}</h4>
      <h4>Lançamento: {serie.first_air_date}</h4>
    </div>
  );
};

export default SeriesDetails;
