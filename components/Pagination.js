import React from 'react'
import Link from 'next/link';
//import { Link } from 'react-router-dom';

export const Pagination = ( {postPerPage, totalPost, paginate} ) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil (totalPost / postPerPage); i++ ) {
        pageNumbers.push(i);
        
    }


  return (
    <nav>
        <ul className='pagination' >
            {pageNumbers.map(number => (
                <li key={number} className={'page-item'} >
                    <Link onClick={() => paginate(number) } href='!#' className={'page-link'}>
                        {number}
                    </Link>

                </li>
            ))}

        </ul>

    </nav>
  )
}