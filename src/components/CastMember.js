// src/pages/CastMember.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastMember = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCastMember = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}/cast`)
        const data = await response.json();
        const famousMember = data.cast[0]; // Pega o primeiro membro do elenco como exemplo
        setMember(famousMember);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados do elenco:', error);
        setLoading(false);
      }
    };

    fetchCastMember();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="cast-member">
      <h2>Elenco Famoso</h2>
      {member ? (
        <>
          <h3>{member.name}</h3>
          <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} />
          <p>{member.character ? `Personagem: ${member.character}` : "Personagem não disponível"}</p>
        </>
      ) : (
        <p>Elenco não disponível.</p>
      )}
    </div>
  );
};

export default CastMember;
