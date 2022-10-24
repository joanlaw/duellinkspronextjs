import React from 'react'
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import Statsdecks from './Statsdecks';

import "./vistastats.css";


function Vistastats() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const { data } = await axios('https://dlpro-backend.herokuapp.com/decks/');
          console.log(products);
          setProducts(data);
          setLoading(false);
        } catch (err) {
          setProducts([]);
          console.log(err);
          setLoading(false);
        }
      };
      fetchProducts();
    }, []);
    const columns = useMemo(
      () => [
        {
          Header: 'Arquetipo',
          accessor: 'arquetipo',
        },
        {
          Header: 'Habilidad',
          accessor: 'habilidad',
        },
        {
          Header: 'Jugador',
          accessor: 'jugador',
        },
        {
          Header: 'Top',
          accessor: 'top',
        //  aggregate: 'average',
        //  Aggregated: ({ value }) => `${Math.round(value * 100) / 100} (avg)`,
        },
     {
          Header: 'Fecha',
          accessor: 'createdAt',
         // aggregate: 'sum',
        //  Aggregated: ({ value }) => `${value} (sum)`,
        },
     /*     {
          Header: 'Brand',
          accessor: 'brand',
        },
        {
          Header: 'Rating',
          accessor: 'rating',
        //  aggregate: 'average',
        //  Aggregated: ({ value }) => `${Math.round(value * 100) / 100} (avg)`,
        },
        {
          Header: 'Description',
          accessor: 'description',
        }, */
      ],
      []
    );


  return (
    <div className='table-container'>
        <Statsdecks columns={columns} data={products} />
    </div>
  )
}

export default Vistastats