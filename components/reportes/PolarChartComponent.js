import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, ArcElement, PieController } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';

// Registrar los elementos necesarios para Chart.js
Chart.register(CategoryScale, ArcElement, PieController);

const PieChartComponent = ({ decks }) => {
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
      type: 'pie',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: [
            // Colores de fondo para los segmentos del gráfico
            // Añade más colores si es necesario
            '#1e88e5', '#43a047', '#f4511e', '#8e24aa', '#e53935',
            '#fdd835', '#00acc1', '#546e7a', '#d81b60', '#6d4c41'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            color: '#000',
            font: {
              size: window.innerWidth > 767 ? 14 : 8,
              weight: 'bold'
            },
            formatter: (value, ctx) => {
              const label = ctx.chart.data.labels[ctx.dataIndex];
              const percent = ((value / total) * 100).toFixed(2) + '%';
              return `${label}: ${value} (${percent})`;
            },
            rotation: (ctx) => {
                const index = ctx.dataIndex;
                const meta = ctx.chart.getDatasetMeta(0);
                if (meta.data[index] && meta.data[index]._model) {
                  const startAngle = meta.data[index]._model.startAngle;
                  const endAngle = meta.data[index]._model.endAngle;
                  const midAngle = (startAngle + endAngle) / 2;
                  const midAngleDeg = midAngle * (180 / Math.PI);
    
                  console.log("Ángulo medio en grados:", midAngleDeg);  // Depuración
    
                  return midAngleDeg;
                }
                return 0; // Valor predeterminado si el modelo no está disponible
            }
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }, [decks]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChartComponent;
