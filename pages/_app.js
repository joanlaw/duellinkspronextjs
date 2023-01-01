import GoogleAnalytics from '@bradgarropy/next-google-analytics'
//import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
//import { config } from "@fortawesome/fontawesome-svg-core";
//config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/globals.css'
import '../styles/Home.module.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/footer.css'
import '../styles/index.css'
import '../styles/cluster.css'
import '../styles/tooltipsdl.css'
import '../styles/allcards.css'
import '../styles/listadecks.css'
import '../styles/cartainfo.css'
import '../styles/deckscreator.css'
import '../styles/minicajas.css'
import '../styles/navbar.css'



function MyApp({ Component, pageProps }) {
  return (
    <>
  <GoogleAnalytics measurementId='G-G7SZ0BHCCP' />

  <Component {...pageProps} />
  </>
  ) 
}

export default MyApp
