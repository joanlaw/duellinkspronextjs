import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, BarController } from 'chart.js';
import axios from 'axios';

// Registrar los elementos necesarios para Chart.js
Chart.register(CategoryScale, LinearScale, BarElement, BarController);

const BarChartComponent = ({ decks }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    axios.get('https://api.duellinks.pro/arquetipos')
      .then(response => {
        console.log('Respuesta de la API de arquetipos:', response.data);
      })
      .catch(error => {
        console.error('Error al obtener los arquetipos:', error);
      });
  }, []);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const labels = decks.map(deck => deck.nombre);
    const data = decks.map(deck => deck.cantidad);

    // Destruir la instancia del gráfico si ya existe
    if (chartInstance.current) {
      chartInstance.current.destroy();
      chartInstance.current = null; // Establecerlo en null para asegurarse de que se ha destruido
    }

    const total = data.reduce((acc, value) => acc + value, 0); // Calcular el total

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: [
            '#0070f0', 
            '#27272a'
          ]
        }]
      },
      options: {
        responsive: true
      }
    });
  }, [decks]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChartComponent;
