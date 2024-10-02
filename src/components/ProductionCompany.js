// src/pages/ProductionCompany.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductionCompany = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductionCompany = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setCompany(data.network); // Pega informações da rede de TV
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados da produtora:', error);
        setLoading(false);
      }
    };

    fetchProductionCompany();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="production-company">
      <h2>Produtora</h2>
      {company ? (
        <>
          <h3>{company.name}</h3>
          <img src={company.logo ? company.logo : "https://via.placeholder.com/150"} alt={company.name} />
          <p>{company.country ? `País: ${company.country}` : "País desconhecido"}</p>
          <p>{company.description || "Descrição não disponível."}</p>
        </>
      ) : (
        <p>Produtora não disponível.</p>
      )}
    </div>
  );
};

export default ProductionCompany;
