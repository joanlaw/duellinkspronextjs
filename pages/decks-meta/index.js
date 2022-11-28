import Clustersmeta from "../../components/Clustersmeta"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Head from "next/head"

export default function index() {
  return (
    <>
    <Head>
    <title>Decks Meta</title>
  <meta name='Tier List' content='Decks meta o Tier List basados en criterios de la comunidad y los decks o mazos más ganadores' />
    </Head>
    <div>
    <Header />
    <h1 className='h1margen'>Tier List</h1>
    <br />
    <Clustersmeta />
    <br />
    <Footer />
</div>
</>
  )
}
