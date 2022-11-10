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
</Head>
<Home />


</>
  )
}
