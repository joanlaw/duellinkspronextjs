import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import '../styles/tailwind.css'; // Importa tus estilos globales de Tailwind CSS
import { UserProvider } from '../contexts/UserContext';



import '../styles/globals.css';
import '../styles/Home.module.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css';
import '../styles/index.css';
import '../styles/cluster.css';
import '../styles/allcards.css';
import '../styles/listadecks.css';
import '../styles/cartainfo.css';
import '../styles/deckscreator.css';
import '../styles/minicajas.css';
import '../styles/navbar.css';
import '../styles/creardeck.css';
import '../styles/createdecksnewcss.css'; 
import '../styles/blogs.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
    <NextThemesProvider attribute="class" defaultTheme="dark">
        <GoogleAnalytics measurementId='G-G7SZ0BHCCP' />
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    </NextThemesProvider>
</NextUIProvider>
  );
}

export default MyApp;
