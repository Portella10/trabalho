import React, { useEffect, useState } from 'react';
import './App.css'; // Verifique se o CSS está correto

function App() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/series'); // Substitua pela sua API
        const data = await response.json();
        setSeries(data); // Supondo que a API retorne um array de séries
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Catalógo de Séries</h1>
      <h2>Séries Populares</h2>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <h3>{serie.title}</h3>
            <img src={serie.image} alt={serie.title} />
            <p>{serie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
