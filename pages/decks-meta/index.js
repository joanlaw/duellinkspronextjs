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
        <h1 className="text-2xl font-bold mb-4">¿Qué es un Deck Meta en Yu-Gi-Oh?</h1>
        <p className="mb-4 text-gray-700">
            Un deck meta en Yu-Gi-Oh se refiere a un conjunto de cartas que, por sus sinergias y potencial competitivo, se considera superior a otros grupos de cartas. Este término es empleado para describir los decks que son comúnmente utilizados en torneos y que tienen un alto índice de victorias.
        </p>
        <p className="mb-4 text-gray-700">
            El Tier 0 engloba aquellos decks que dominan el escenario competitivo de tal manera que tienen muy pocos o ningún rival significativo. Estos decks suelen ser los más eficientes y efectivos, ganando con una frecuencia asombrosa.
        </p>
        <p className="mb-4 text-gray-700">
            Los Tier 1 son decks que, aunque no tan dominantes como los de Tier 0, siguen siendo altamente competitivos y poseen una alta tasa de victorias en torneos. Estos decks están casi siempre presentes en las fases finales de los torneos.
        </p>
        <p className="mb-4 text-gray-700">
            Los decks Tier 2 son competitivos, pero no al nivel de los Tier 1. Aunque estos decks pueden tener un buen desempeño, generalmente encuentran dificultades contra los decks de Tier superior.
        </p>
        <p className="text-gray-700">
            Por último, los Tier 3 son decks que tienen potencial para ser competitivos, pero suelen ser menos consistentes que los de Tiers superiores. A menudo, estos decks requieren una gran comprensión y estrategia por parte del jugador para tener éxito en un entorno competitivo.
        </p>

</div>

    <FooterCustom />
</div>
</>
  )
}
