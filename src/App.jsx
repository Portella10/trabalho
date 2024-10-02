import React, { useEffect, useState } from 'react';
import './App.css'; // Certifique-se de que o CSS está importado corretamente

function App() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        console.log('Dados recebidos:', data); // Para depuração
        setSeries(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Catalógo de Séries</h1>
        <h2>Séries Populares</h2>
      </header>
      <ul className="series-list">
        {series.slice(0, 10).map((serie) => (
          <li key={serie.id} className="series-item">
            <img src={serie.image?.medium} alt={serie.name} className="series-image" />
            <div className="series-info">
              <h3 className="series-title">{serie.name}</h3>
              <p className="series-summary">{serie.summary.replace(/(<([^>]+)>)/gi, "")}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
