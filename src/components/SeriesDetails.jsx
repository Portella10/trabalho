import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SeriesDetails = () => {
  const { id } = useParams();
  const [series, setSeries] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeriesDetails = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setSeries(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar detalhes da série:', error);
        setLoading(false);
      }
    };

    fetchSeriesDetails();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="series-details">
      <h2>{series.name}</h2>
      <img src={series.image?.original} alt={series.name} />
      <p>{series.summary}</p>
      <p><strong>Gêneros:</strong> {series.genres.join(', ')}</p>
      <p><strong>Ano de Lançamento:</strong> {series.premiered}</p>
      <p><strong>Classificação:</strong> {series.rating.average}</p>
    </div>
  );
};

export default SeriesDetails;
