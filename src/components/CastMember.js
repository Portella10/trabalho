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
        const response = await fetch(`https://api.tvmaze.com/shows/${id}/cast`);
        const data = await response.json();
        // Aqui você pode escolher um membro do elenco
        const famousMember = data[0]; // Pega o primeiro membro do elenco como exemplo
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
      <h3>{member.person.name}</h3>
      <img src={member.person.image?.medium} alt={member.person.name} />
      <p>{member.person.country ? `País: ${member.person.country.name}` : "País desconhecido"}</p>
      <p>{member.person.birthday ? `Nascimento: ${member.person.birthday}` : "Data de nascimento desconhecida"}</p>
      <p>{member.person.bio || "Biografia não disponível."}</p>
    </div>
  );
};

export default CastMember;
