import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Home from '../components/Home'
import Link from 'next/link'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Index() {

  return (
<>
<Head>
  <title>Duel Links Pro</title>
  <meta name='Home' content='Bienvenidos a Duel Links Pro, la mejor web de Yugioh Duel Links en Latinoamerica' />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Oswald:wght@200;600;700&family=Roboto:wght@100;400;500&display=swap" rel="stylesheet" />

</Head>
<Home />


</>
  )
}
