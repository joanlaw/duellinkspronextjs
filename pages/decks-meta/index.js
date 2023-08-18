import Clustersmeta from "../../components/Clustersmeta"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Head from "next/head"
import NavbarCustom from "../../components/NavbarCustom"
import FooterCustom from "../../components/FooterCustom"

export default function index() {

      //HOOKS - CAPTURA ESTADOS
    
     // const [tier, setTier] = useState ([])

  return (
    <>
    <Head>
    <title>Decks Meta | Duel Links Pro</title>
  <meta name='Tier List' content='Decks meta o Tier List basados en criterios de la comunidad y los decks o mazos más ganadores' />
    </Head>
    <div className="flex flex-col min-h-screen">
    <NavbarCustom />
    <div className='container mx-auto'>
            <br />
            <h1>Tier List</h1>
      <p>ESTAMOS RECOLECTANDO DATOS PARA PODER MOSTRAR UNA TIER LIST ACORDE AL METAJUEGO ACTUAL.</p>
    </div>
    <FooterCustom />
</div>
</>
  )
}
