import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, ArcElement, PieController } from 'chart.js'; // Importar PieController
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';

// Registrar PieController además de otros elementos
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
    console.log("useEffect se está ejecutando");
    const ctx = chartRef.current.getContext('2d');
    const labels = decks.map(deck => deck.nombre);
    const data = decks.map(deck => deck.cantidad);

    // Destruir la instancia del gráfico si ya existe
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const total = data.reduce((acc, value) => acc + value, 0); // Calcular el total de los datos

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: [
            '#1e88e5', // Azul oscuro
            '#43a047', // Verde oscuro
            '#f4511e', // Naranja oscuro
            '#8e24aa', // Púrpura oscuro
            '#e53935', // Rojo oscuro
            '#fdd835', // Amarillo oscuro
            '#00acc1', // Turquesa oscuro
            '#546e7a', // Gris oscuro
            '#d81b60', // Rosa oscuro
            '#6d4c41'  // Marrón oscuro
          ],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            
            color: '#000',
            font: {
                size: window.innerWidth > 767 ? 14 : 8, // Ajusta el tamaño de la fuente en función del ancho de la ventana
                weight: 'bold'
              },
            formatter: (value, ctx) => {
              const label = ctx.chart.data.labels[ctx.dataIndex];
              const percent = ((value / total) * 100).toFixed(2) + '%';
              return `${label}: ${value} (${percent})`;
            }
          }
        }
      },
      plugins: [ChartDataLabels],
    });
  }, [decks]);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChartComponent;
