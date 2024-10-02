// src/pages/SeriesDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const SeriesDetails = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setSerie(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    };

    fetchSeries();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="series-details">
      <h1>{serie.name}</h1>
      <img src={serie.image?.original} alt={serie.name} />
      <div className="summary" dangerouslySetInnerHTML={{ __html: serie.summary }} />
      <Link to={`/cast-member/${id}`}>
        <button>Ver Elenco Famoso</button>
      </Link>
      <Link to={`/production-company/${id}`}>
        <button>Ver Produtora</button>
      </Link>
      <Link to={`/cast-member/${id}`}>
  <button>Ver Elenco Famoso</button>
</Link>
<Link to={`/production-company/${id}`}>
  <button>Ver Produtora</button>
</Link>
    </div>
  );
};

export default SeriesDetails;
