import Head from 'next/head';
import Home from '../components/Home';
import Link from 'next/link';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'

export default function Index() {
  return (
    <>
      <Head>
        <title>Duel Links Pro</title>
        <meta name='description' content='Bienvenidos a Duel Links Pro, una web especializada en el juego Yugioh Duel Links, con contenido en español' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5210980356764360"
          crossorigin="anonymous"></script>

        {/* Establecer la fuente Quicksand para el cuerpo y todos los elementos */}
        <style jsx>{`
        /* Aplicar Quicksand a los elementos con clase "my-heading" */
        .my-heading {
          font-family: 'Quicksand', sans-serif;
        }

        /* Aplicar Quicksand a los enlaces con clase "my-link" */
        .my-link {
          font-family: 'Quicksand', sans-serif;
        }

        /* Agregar más estilos locales según sea necesario */
      `}</style>
      </Head>
      <Home />
    </>

  );
}
