import React, { useEffect, useState } from 'react';
import './App.css'; // Certifique-se de que o CSS esteja aplicado corretamente

function App() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        console.log('Dados recebidos:', data); // Adicionado para depuração
        setSeries(data); // Armazena todos os dados de séries
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
        {series.slice(0, 10).map((serie) => ( // Limite a 10 séries para exibir
          <li key={serie.id}>
            <h3>{serie.name}</h3>
            <img src={serie.image?.medium} alt={serie.name} />
            <p>{serie.summary.replace(/(<([^>]+)>)/gi, "")}</p> {/* Remove HTML */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
