import React from "react";
import { useRouter } from "next/router";
import Head from "next/head.js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cardinfo from "../../components/Cardinfo";

export default function CardPage() {
  const router = useRouter();
  const { name_english } = router.query;

  return (
    <>
      <Head>
        <title>{name_english} | Información de Carta</title>
      </Head>
      <Header />
      <div className="container">
        <h1>{name_english}</h1>
        <Cardinfo nameEnglish={name_english} />
      </div>
      <Footer />
    </>
  );
}
