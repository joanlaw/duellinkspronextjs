import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Tooltipsdl from "./Tooltipsdl";
//import { isVisible } from '@testing-library/user-event/dist/utils'

import "./deckscreator.css";



function Deckscreator() {

  //
  console.log(useParams()); 

  const {_id} = useParams()
  console.log(_id);


//ESTADO DE CARTAS
  const [ deckuno, setDeckuno ] = useState ([])
  const [ deckdos, setDeckdos ] = useState([])
  const [ decktres, setDecktres ] = useState([])
  const [ deckcuatro, setDeckcuatro ] = useState([])
  const [ deckcinco, setDeckcinco ] = useState([])
  const [ deckseis, setDeckseis ] = useState([])
  const [ decksiete, setDecksiete ] = useState([])
  const [ deckocho, setDeckocho ] = useState([])
  const [ decknueve, setDecknueve ] = useState([])
  const [ deckdiez, setDeckdiez ] = useState([])
  const [ deckonce, setDeckonce ] = useState([])
  const [ deckdoce, setDeckdoce ] = useState([])
  const [ decktrece, setDecktrece ] = useState([])
  const [ deckcatorce, setDeckcatorce ] = useState([])
  const [ deckquince, setDeckquince ] = useState([])
  const [ deckdieciseis, setDeckdieciseis ] = useState([])
  const [ deckdiecisiete, setDeckdiecisiete ] = useState([])
  const [ deckdieciocho, setDeckdieciocho ] = useState([])
  const [ deckdiecinueve, setDeckdiecinueve ] = useState([])
  const [ deckveinte, setDeckveinte ] = useState([])
  //
  const [ deckveintiuno, setDeckveintiuno ] = useState('')
  const [ deckveintidos, setDeckveintidos ] = useState([])
  const [ deckveintitres, setDeckveintitres ] = useState([])
  const [ deckveinticuatro, setDdeckveinticuatro ] = useState([])
  const [ deckveinticinco, setDdeckveinticinco ] = useState([])
  const [ deckveintiseis, setDeckveintiseis ] = useState([])
  const [ deckveintisiete, setDeckveintisiete ] = useState([])
  const [ deckveintiocho, setDeckveintiocho ] = useState([])
  const [ deckveinitinueve, setDeckveintinueve ] = useState([])
  const [ decktreinta, setDecktreinta ] = useState('')

  //COMIENZA EL EXTRA DECK

  const [ deckextrauno, setDeckextrauno ] = useState('')
  const [ deckextrados, setDeckextrados ] = useState([])
  const [ deckextratres, setDeckextratres ] = useState([])
  const [ deckextracuatro, setDeckextracuatro ] = useState([])
  const [ deckextracinco, setDeckextracinco ] = useState([])
  const [ deckextraseis, setDeckextraseis ] = useState([])
  const [ deckextrasiete, setDeckextrasiete ] = useState([])
  const [ deckextraocho, setDeckextraocho ] = useState([])
 // const [ extranueve, setExtranueve ] = useState([])
 // const [ extradiez, setExtradiez ] = useState([])  */
  


  useEffect (()=>{
    const obtenerDeck = async ()=>{

     // const cartaid = 
      const url = `https://dlpro-backend.herokuapp.com/decks/${_id}`;
      const result = await axios.get(url);

      console.log(result.data);
      setDeckuno(result.data);
      setDeckdos(result.data)
      setDecktres(result.data)
      setDeckcuatro(result.data)
      setDeckcinco(result.data)
      setDeckseis(result.data)
      setDecksiete(result.data)
      setDeckocho(result.data)
      setDecknueve(result.data)
      setDeckdiez(result.data)
      setDeckonce(result.data)
      setDeckdoce(result.data)
      setDecktrece(result.data)
      setDeckcatorce(result.data)
      setDeckquince(result.data)
      setDeckdieciseis(result.data)
      setDeckdiecisiete(result.data)
      setDeckdieciocho(result.data)
      setDeckdiecinueve(result.data)
      setDeckveinte(result.data)
      //
      setDeckveintiuno(result.data)
     setDeckveintidos(result.data)
      setDeckveintitres(result.data)
       setDdeckveinticuatro(result.data)
      setDdeckveinticinco(result.data)
      setDeckveintiseis(result.data)
      setDeckveintisiete(result.data)
      setDeckveintiocho(result.data)
      setDeckveintinueve(result.data)
      setDecktreinta(result.data)
      
      //

      //COMIENZA EL EXTRA DECK

      setDeckextrauno(result.data)
      setDeckextrados(result.data)
      setDeckextratres(result.data)
      setDeckextracuatro(result.data)
      setDeckextracinco(result.data)
      setDeckextraseis(result.data)
      setDeckextrasiete(result.data)
      setDeckextraocho(result.data)
   //   setExtranueve(result.data)
   //   setExtradiez(result.data)   */

    }

    obtenerDeck()

    

  },[_id]);


  //CARTA 1
  const [mainuno, setMainuno] = useState([])
  const [ cartauno, setCartauno] = useState([])
  //SEGUNDA 2
  const [maindos, setMaindos] = useState([])
  const [ cartados, setCartados] = useState([])

  //TERCERA 3
  const [maintres, setMaintres] = useState([])
  const [ cartatres, setCartatres] = useState([])

  //CUARTA 4

  const [maincuatro, setMaincuatro] = useState([])
  const [ cartacuatro, setCartacuatro] = useState([])

  //QUINTA CARTA

  const [maincinco, setMaincinco] = useState([])
  const [ cartacinco, setCartacinco] = useState([])

  //SEXTA CARTA

  const [mainseis, setMainseis] = useState([])
  const [ cartaseis, setCartaseis] = useState([])

  //SEPTIMA CARTA

  const [mainsiete, setMainsiete] = useState([])
  const [ cartasiete, setCartasiete] = useState([])


  //OCTAVA CARTA

  const [mainocho, setMainocho] = useState([])
  const [ cartaocho, setCartaocho] = useState([])

  //NOVENA CARTA

  const [mainnueve, setMainnueve] = useState([])
  const [ cartanueve, setCartanueve] = useState([])

  //DECIMA CARTA

  const [maindiez, setMaindiez] = useState([])
  const [ cartadiez, setCartadiez] = useState([])

  //CARTA ONCE

  const [mainonce, setMainonce] = useState([])
  const [ cartaonce, setCartaonce] = useState([])

  //CARTA DOCE

  const [maindoce, setMaindoce] = useState([])
  const [ cartadoce, setCartadoce] = useState([])

  //CARTA TRECE

  const [maintrece, setMaintrece] = useState([])
  const [ cartatrece, setCartatrece] = useState([])

  //CARTA CATORCE

  const [maincatorce, setMaincatorce] = useState([])
  const [ cartacatorce, setCartacatorce] = useState([])

  //CARTA QUINCE

  const [mainquince, setMainquince] = useState([])
  const [ cartaquince, setCartaquince] = useState([])

  //CARTA DIECISEIS

  const [maindieciseis, setMaindieciseis] = useState([])
  const [ cartadieciseis, setCartadieciseis] = useState([])

  //CARTA DIECISIETE

  const [maindiecisiete, setMaindiecisiete] = useState([])
  const [ cartadiecisiete, setCartadiecisiete] = useState([])

  //CARTA DIECIOCHO

  const [maindieciocho, setMaindieciocho] = useState([])
  const [ cartadieciocho, setCartadieciocho] = useState([])

  //CARTA DIECINUEVE

  const [maindiecinueve, setMaindiecinueve] = useState([])
  const [ cartadiecinueve, setCartadiecinueve] = useState([])

  //CARTA VEINTE

  const [mainveinte, setMainveinte] = useState([])
  const [ cartaveinte, setCartaveinte] = useState([])

  //CARTA 21
  const [mainveintiuno, setMainveintiuno] = useState([])
  const [ cartaveintiuno, setCartaveintiuno] = useState(false)

  //CARTA 22
  const [mainveintidos, setMainveintidos] = useState([])
  const [ cartaveintidos, setCartaveintidos] = useState([])

  //CARTA 23
  const [mainveintitres, setMainveintitres] = useState([])
  const [ cartaveintitres, setCartaveintitres] = useState([])

  //CARTA 24
  const [mainveinticuatro, setMainveinticuatro] = useState([])
  const [ cartaveinticuatro, setCartaveinticuatro] = useState([])

  //CARTA25
  const [mainveinticinco, setMainveinticinco] = useState([])
  const [ cartaveinticinco, setCartaveinticinco] = useState([])

  //CARTA26
  const [mainveintiseis, setMainveintiseis] = useState([])
  const [ cartaveintiseis, setCartaveintiseis] = useState([])

  //CARTA27
  const [mainveintisiete, setMainveintisiete] = useState([])
  const [ cartaveintisiete, setCartaveintisiete] = useState([])

  //CARTA 28
  const [mainveintiocho, setMainveintiocho] = useState([])
  const [ cartaveintiocho, setCartaveintiocho] = useState([])

  //CARTA 29
  const [mainveintinueve, setMainveintinueve] = useState([])
  const [ cartaveintinueve, setCartaveintinueve] = useState([])

  //CARTA 30
  const [maintreinta, setMaintreinta] = useState([])
  const [ cartatreinta, setCartatreinta] = useState([]) 

 //EXTRA 1
  const [extrauno, setExtrauno] = useState([])
  const [cartaextrauno, setCartaextrauno] = useState([]) 

   // EXTRA 2
  const [extrados, setExtrados] = useState([])
  const [cartaextrados, setCartaextrados] = useState([]) 

  //EXTRA 3
  const [extratres, setExtratres] = useState([])
  const [cartaextratres, setCartaextratres] = useState([]) 

  //EXTRA 4
  const [extracuatro, setExtracuatro] = useState([])
  const [cartaextracuatro, setCartaextracuatro] = useState([]) 

  //EXTRA 5
  const [extracinco, setExtracinco] = useState([])
  const [cartaextracinco, setCartaextracinco] = useState([]) 

  //EXTRA 6
  const [extraseis, setExtraseis] = useState([])
  const [cartaextraseis, setCartaextraseis] = useState([]) 

  //EXTRA 7
  const [extrasiete, setExtrasiete] = useState([])
  const [cartaextrasiete, setCartaextrasiete] = useState([]) 

  //8
  const [extraocho, setExtraocho] = useState([])
  const [cartaextraocho, setCartaextraocho] = useState([]) 

  //9
//  const [extranuevepos, setExtranuevepos] = useState([])
//  const [cartaextranueve, setCartaextranueve] = useState([]) 

  //10
 // const [extradiezpos, setExtradiezpos] = useState([])
//  const [cartaextradiez, setCartaextradiez] = useState([])  */
 
  //
  

  
  useEffect (()=>{
    const obtenerDatos = async ()=>{

     // const cartaid = 
      const urlmainuno = `https://dlpro-backend.herokuapp.com/cartas/${deckuno.mainuno}`;
      const urlmaindos = `https://dlpro-backend.herokuapp.com/cartas/${deckdos.maindos}`;
      const urlmaintres = `https://dlpro-backend.herokuapp.com/cartas/${decktres.maintres}`;
      const urlmaincuatro = `https://dlpro-backend.herokuapp.com/cartas/${deckcuatro.maincuatro}`;
      const urlmaincinco = `https://dlpro-backend.herokuapp.com/cartas/${deckcinco.maincinco}`;
      const urlmainseis = `https://dlpro-backend.herokuapp.com/cartas/${deckseis.mainseis}`;
      const urlmainsiete = `https://dlpro-backend.herokuapp.com/cartas/${decksiete.mainsiete}`;
      const urlmainocho = `https://dlpro-backend.herokuapp.com/cartas/${deckocho.mainocho}`;
      const urlmainnueve = `https://dlpro-backend.herokuapp.com/cartas/${decknueve.mainnueve}`;
      const urlmaindiez = `https://dlpro-backend.herokuapp.com/cartas/${deckdiez.maindiez}`;
      //DIEZ URL
      const urlmainonce = `https://dlpro-backend.herokuapp.com/cartas/${deckonce.mainonce}`;
      const urlmaindoce = `https://dlpro-backend.herokuapp.com/cartas/${deckdoce.maindoce}`;
      const urlmaintrce = `https://dlpro-backend.herokuapp.com/cartas/${decktrece.maintrece}`;
      const urlmaincatorce = `https://dlpro-backend.herokuapp.com/cartas/${deckcatorce.maincatorce}`;
      const urlmainquince = `https://dlpro-backend.herokuapp.com/cartas/${deckquince.mainquince}`;
      const urlmaindieciseis = `https://dlpro-backend.herokuapp.com/cartas/${deckdieciseis.maindieciseis}`;
      const urlmaindiecisiete = `https://dlpro-backend.herokuapp.com/cartas/${deckdiecisiete.maindiecisiete}`;
      const urlmaindieciocho = `https://dlpro-backend.herokuapp.com/cartas/${deckdieciocho.maindieciocho}`;
      const urlmaindiecinueve = `https://dlpro-backend.herokuapp.com/cartas/${deckdiecinueve.maindiecinueve}`;
      const urlmainveinte = `https://dlpro-backend.herokuapp.com/cartas/${deckveinte.mainveinte}`;
      //VEINTE URL
      const urlmainveintiuno = `https://dlpro-backend.herokuapp.com/cartas/${deckveintiuno.mainveintiuno}`;
      const urlmainveintidos = `https://dlpro-backend.herokuapp.com/cartas/${deckveintidos.mainveintidos}`;
      const urlmainveintitres = `https://dlpro-backend.herokuapp.com/cartas/${deckveintitres.mainveintitres}`;
        const urlmainveinticuatro = `https://dlpro-backend.herokuapp.com/cartas/${deckveinticuatro.mainveinticuatro}`;
      const urlmainveinticinco = `https://dlpro-backend.herokuapp.com/cartas/${deckveinticinco.mainveinticinco}`;
       const urlmainveintiseis = `https://dlpro-backend.herokuapp.com/cartas/${deckveintiseis.mainveintiseis}`;
      const urlmainveintisiete = `https://dlpro-backend.herokuapp.com/cartas/${deckveintisiete.mainveintisiete}`;
      const urlmainveintiocho = `https://dlpro-backend.herokuapp.com/cartas/${deckveintiocho.mainveintiocho}`;
      const urlmainveintinueve = `https://dlpro-backend.herokuapp.com/cartas/${deckveinitinueve.mainveintinueve}`;
      const urlmaintreinta = `https://dlpro-backend.herokuapp.com/cartas/${decktreinta.maintreinta}`;
      
      //COMIENZAN URL DE EXTRA DECK

      const urlextrauno = `https://dlpro-backend.herokuapp.com/cartas/${deckextrauno.extrauno}`;
      const urlextrados = `https://dlpro-backend.herokuapp.com/cartas/${deckextrados.extrados}`;
      const urlextratres = `https://dlpro-backend.herokuapp.com/cartas/${deckextratres.extratres}`;
      const urlextracuatro = `https://dlpro-backend.herokuapp.com/cartas/${deckextracuatro.extracuatro}`;
      const urlextracinco = `https://dlpro-backend.herokuapp.com/cartas/${deckextracinco.extracinco}`;
      const urlextraseis = `https://dlpro-backend.herokuapp.com/cartas/${deckextraseis.extraseis}`;
      const urlextrasiete = `https://dlpro-backend.herokuapp.com/cartas/${deckextrasiete.extrasiete}`;
      const urlextraocho = `https://dlpro-backend.herokuapp.com/cartas/${deckextraocho.extraocho}`;
    //  const urlextranueve = `https://dlpro-backend.herokuapp.com/cartas/${extranueve.extranuevepos}`;
    //  const urlextradiez = `https://dlpro-backend.herokuapp.com/cartas/${extradiez.extradiezpos}`;   */

      const resultmainuno = await axios.get(urlmainuno); 
      const resultmaindos = await axios.get(urlmaindos);
      const resultmaintres = await axios.get(urlmaintres);
      const resultadomaincuatro = await axios.get(urlmaincuatro);
      const resultadomaincinco = await axios.get(urlmaincinco);
      const resultadomainseis = await axios.get(urlmainseis);
      const resultadomainsiete = await axios.get(urlmainsiete);
      const resultadomainocho = await axios.get(urlmainocho);
      const resultadomainnueve = await axios.get(urlmainnueve);
      const resultadomaindiez = await axios.get(urlmaindiez);
      // RESULTADOS 10
      const resultadomainonce = await axios.get(urlmainonce);
      const resultadomaindoce = await axios.get(urlmaindoce);
      const resultadomaintrece = await axios.get(urlmaintrce);
      const resultadomaincatorce = await axios.get(urlmaincatorce);
      const resultadomainquince = await axios.get(urlmainquince);
      const resultadomaindieciseis = await axios.get(urlmaindieciseis);
      const resultadomaindiecisiete = await axios.get(urlmaindiecisiete);
      const resultadomaindieciocho = await axios.get(urlmaindieciocho);
      const resultadomaindiecinueve = await axios.get(urlmaindiecinueve);
      const resultadomainveinte = await axios.get(urlmainveinte);
      //RESULTADOS 20
      const resultadomainveintiuno = await axios.get(urlmainveintiuno);
      const resultadomainveintidos = await axios.get(urlmainveintidos);
      const resultadomainveintitres = await axios.get(urlmainveintitres);
    const resultadomainveinticuatro = await axios.get(urlmainveinticuatro);
      const resultadomainveinticinco = await axios.get(urlmainveinticinco);
        const resultadomainveintiseis = await axios.get(urlmainveintiseis);
      const resultadomainveintisiete = await axios.get(urlmainveintisiete);
      const resultadomainveintiocho = await axios.get(urlmainveintiocho);
      const resultadomainveintinueve = await axios.get(urlmainveintinueve);
      const resultadomaintreinta = await axios.get(urlmaintreinta); 


      //COMIENZAN RESULTADOS EXTRA DECK
       const resultadoextrauno = await axios.get(urlextrauno); 
       const resultadoextrados = await axios.get(urlextrados); 
      const resultadoextratres = await axios.get(urlextratres); 
      const resultadoextracuatro = await axios.get(urlextracuatro); 
      const resultadoextracinco = await axios.get(urlextracinco); 
      const resultadoextraseis = await axios.get(urlextraseis); 
      const resultadoextrasiete = await axios.get(urlextrasiete); 
      const resultadoextraocho = await axios.get(urlextraocho); 
    //  const resultadoextranueve = await axios.get(urlextranueve); 
    //  const resultadoextradiez = await axios.get(urlextradiez);   */

     // console.log(resultmainuno.data);
      setMainuno(resultmainuno.data);
      setCartauno(resultmainuno.data.image);
      //
      setMaindos(resultmaindos.data)
      setCartados(resultmaindos.data.image)
      //
      setMaintres(resultmaintres.data)
      setCartatres(resultmaintres.data.image)
      //
      setMaincuatro(resultadomaincuatro.data)
      setCartacuatro(resultadomaincuatro.data.image)
      //
      setMaincinco(resultadomaincinco.data)
      setCartacinco(resultadomaincinco.data.image)
      //
      setMainseis(resultadomainseis.data)
      setCartaseis(resultadomainseis.data.image)
      //
      setMainsiete(resultadomainsiete.data)
      setCartasiete(resultadomainsiete.data.image)
      //
      setMainocho(resultadomainocho.data)
      setCartaocho(resultadomainocho.data.image)
      //
      setMainnueve(resultadomainnueve.data)
      setCartanueve(resultadomainnueve.data.image)
      //
      setMaindiez(resultadomaindiez.data)
      setCartadiez(resultadomaindiez.data.image)
      // DIEZ RESULTADOS

      setMainonce(resultadomainonce.data)
      setCartaonce(resultadomainonce.data.image)
      //
      setMaindoce(resultadomaindoce.data)
      setCartadoce(resultadomaindoce.data.image)
      //
      setMaintrece(resultadomaintrece.data)
      setCartatrece(resultadomaintrece.data.image)
      //
      setMaincatorce(resultadomaincatorce.data)
      setCartacatorce(resultadomaincatorce.data.image)
      //
      setMainquince(resultadomainquince.data)
      setCartaquince(resultadomainquince.data.image)
      //
      setMaindieciseis(resultadomaindieciseis.data)
      setCartadieciseis(resultadomaindieciseis.data.image)
      //
      setMaindiecisiete(resultadomaindiecisiete.data)
      setCartadiecisiete(resultadomaindiecisiete.data.image)
      //
      setMaindieciocho(resultadomaindieciocho.data)
      setCartadieciocho(resultadomaindieciocho.data.image)
      //
      setMaindiecinueve(resultadomaindiecinueve.data)
      setCartadiecinueve(resultadomaindiecinueve.data.image)
      //
      setMainveinte(resultadomainveinte.data)
      setCartaveinte(resultadomainveinte.data.image)

      //20 RESULTADOS
      setMainveintiuno(resultadomainveintiuno.data)
      setCartaveintiuno(resultadomainveintiuno.data.image)

      //21
      setMainveintidos(resultadomainveintidos.data)
      setCartaveintidos(resultadomainveintidos.data.image)

      //23
      setMainveintitres(resultadomainveintitres.data)
      setCartaveintitres(resultadomainveintitres.data.image)

      //24
      setMainveinticuatro(resultadomainveinticuatro.data)
      setCartaveinticuatro(resultadomainveinticuatro.data.image)

      //25
      setMainveinticinco(resultadomainveinticinco.data)
      setCartaveinticinco(resultadomainveinticinco.data.image)

    //26
      setMainveintiseis(resultadomainveintiseis.data)
      setCartaveintiseis(resultadomainveintiseis.data.image)

      //27
      setMainveintisiete(resultadomainveintisiete.data)
      setCartaveintisiete(resultadomainveintisiete.data.image)

      //28
      setMainveintiocho(resultadomainveintiocho.data)
      setCartaveintiocho(resultadomainveintiocho.data.image)

      //29
      setMainveintinueve(resultadomainveintinueve.data)
      setCartaveintinueve(resultadomainveintinueve.data.image)

      //30
      setMaintreinta(resultadomaintreinta.data)
      setCartatreinta(resultadomaintreinta.data.image) 

      //COMIENZA EXTRA DECK 1
      setExtrauno(resultadoextrauno.data)
      setCartaextrauno(resultadoextrauno.data.image) 

      //2
      setExtrados(resultadoextrados.data)
      setCartaextrados(resultadoextrados.data.image) 

      //3
      setExtratres(resultadoextratres.data)
      setCartaextratres(resultadoextratres.data.image) 

      //4
      setExtracuatro(resultadoextracuatro.data)
      setCartaextracuatro(resultadoextracuatro.data.image) 

      //5
      setExtracinco(resultadoextracinco.data)
      setCartaextracinco(resultadoextracinco.data.image) 

      //6
      setExtraseis(resultadoextraseis.data)
      setCartaextraseis(resultadoextraseis.data.image) 

      //7
      setExtrasiete(resultadoextrasiete.data)
      setCartaextrasiete(resultadoextrasiete.data.image) 

      //8
      setExtraocho(resultadoextraocho.data)
      setCartaextraocho(resultadoextraocho.data.image)  



    }

    obtenerDatos()

    

  },[deckuno.mainuno, deckdos.maindos, decktres.maintres, deckcuatro.maincuatro, deckcinco.maincinco, deckseis.mainseis, decksiete.mainsiete, deckocho.mainocho, decknueve.mainnueve, deckdiez.maindiez,
    deckonce.mainonce, deckdoce.maindoce, decktrece.maintrece, deckcatorce.maincatorce, deckquince.mainquince, deckdieciseis.maindieciseis, deckdiecisiete.maindiecisiete, deckdieciocho.maindieciocho,
  deckdiecinueve.maindiecinueve, deckveinte.mainveinte, deckveintiuno.mainveintiuno, deckveintidos.mainveintidos, deckveintitres.mainveintitres, deckveinticuatro.mainveinticuatro, deckveinticinco.mainveinticinco, 
  deckveintiseis.mainveintiseis, deckveintisiete.mainveintisiete, deckveintiocho.mainveintiocho, deckveinitinueve.mainveintinueve, decktreinta.maintreinta, deckextrauno.extrauno, deckextrados.extrados,
  deckextratres.extratres, deckextracuatro.extracuatro, deckextracinco.extracinco, deckextraseis.extraseis, deckextrasiete.extrasiete, deckextraocho.extraocho ]);



  //COMPONENTE PARA TOOLTIPS



  const TooltipsCartasDecks = (()=>{

    const tooltipposuno = (mainuno) => {
      const vlavla = {
        nombre: "nombre"
      }
    }


    

 //   const tooltipspos = []

    return (
      <div>
        <span>{""}</span>
      </div>
    )
  })

//COMIENZAN CONDICIONALES

//URLS PARA OBTENER LAS IMAGENES DE RAREZA
const UrlRareza = {
  ur: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106735/iconos%20dlp/UR_rpfhm2.png",
  sr: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106742/iconos%20dlp/SR_lwpagj.png",
  r: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106750/iconos%20dlp/R_btrot4.png",
  n: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661106746/iconos%20dlp/N_lofrdg.png"
}

//CONSTANTES QUE CORRESPONDEN A CADA POSICION DE CARTA PARA USO DE RAREZA

//1-20
  const PosunoRareza = mainuno.rareza
  const PosdosRareza = maindos.rareza
  const PostresRareza = maintres.rareza
  const PoscuatroRareza = maincuatro.rareza
  const PoscincoRareza = maincinco.rareza
  const PosseisRareza = mainseis.rareza
  const PossieteRareza = mainsiete.rareza
  const PosochoRareza = mainocho.rareza
  const PosnueveRareza = mainnueve.rareza
  const PosdiezRareza = maindiez.rareza
  const PosonceRareza = mainonce.rareza
  const PosdoceRareza = maindoce.rareza
  const PostreceRareza = maintrece.rareza
  const PoscatorceRareza = maincatorce.rareza
  const PosquinceRareza = mainquince.rareza
  const PosdieciseisRareza = maindieciseis.rareza
  const PosdiecisieteRareza = maindiecisiete.rareza
  const PosdieciochoRareza = maindieciocho.rareza
  const PosdiecinueveRareza = maindiecinueve.rareza
  const PosveinteRareza = mainveinte.rareza

  //20-40
  const PosveintiunoRareza = mainveintiuno.rareza
  const PosveintidosRareza = mainveintidos.rareza
  const PosveintitresRareza = mainveintitres.rareza
  const PosveinticuatroRareza = mainveinticuatro.rareza
  const PosveinticincoRareza = mainveinticinco.rareza
  const PosveintiseisRareza = mainveintiseis.rareza
  const PosveintisieteRareza = mainveintisiete.rareza
  const PosveintiochoRareza = mainveintiocho.rareza
  const PosveintinueveRareza = mainveintinueve.rareza
  const PostreintaRareza = maintreinta.rareza

  //Extra
  const PosextraunoRareza = extrauno.rareza
  const PosextradosRareza = extrados.rareza
  const PosextratresRareza = extratres.rareza
  const PosextracuatroRareza = extracuatro.rareza
  const PosextracincoRareza = extracinco.rareza
  const PosextraseisRareza = extraseis.rareza
  const PosextrasieteRareza = extrasiete.rareza
  const PosextraochoRareza = extraocho.rareza
 // const PosextranueveRareza = extranueve.rareza
  //const PosextradiezRareza = extradiez.rareza





  //VALORES DEFAULT NO PUEDEN IR NULOS PORQUE ALGUNAS CARGAS TRAEN LA URL DIRECTAMENTE
const RarezaDefault = ""
//1-10
const Rarezauno = UrlRareza[PosunoRareza]  || RarezaDefault
const Rarezados = UrlRareza[PosdosRareza]  || RarezaDefault
const Rarezatres = UrlRareza[PostresRareza]  || RarezaDefault
const Rarezacuatro = UrlRareza[PoscuatroRareza]  || RarezaDefault
const Rarezacinco = UrlRareza[PoscincoRareza]  || RarezaDefault
const Rarezaseis = UrlRareza[PosseisRareza]  || RarezaDefault
const Rarezasiete = UrlRareza[PossieteRareza]  || RarezaDefault
const Rarezaocho = UrlRareza[PosochoRareza]  || RarezaDefault
const Rarezanueve = UrlRareza[PosnueveRareza]  || RarezaDefault
const Rarezadiez = UrlRareza[PosdiezRareza]  || RarezaDefault

//11-20
const Rarezaonce = UrlRareza[PosonceRareza]  || RarezaDefault
const Rarezadoce = UrlRareza[PosdoceRareza]  || RarezaDefault
const Rarezatrece = UrlRareza[PostreceRareza]  || RarezaDefault
const Rarezacatorce = UrlRareza[PoscatorceRareza]  || RarezaDefault
const Rarezaquince = UrlRareza[PosquinceRareza]  || RarezaDefault
const Rarezadieciseis = UrlRareza[PosdieciseisRareza]  || RarezaDefault
const Rarezadiecisiete = UrlRareza[PosdiecisieteRareza]  || RarezaDefault
const Rarezadieciocho = UrlRareza[PosdieciochoRareza]  || RarezaDefault
const Rarezadiecinueve = UrlRareza[PosdiecinueveRareza]  || RarezaDefault
const Rarezaveinte = UrlRareza[PosveinteRareza]  || RarezaDefault

//21-30
const Rarezaveintiuno = UrlRareza[PosveintiunoRareza]  || RarezaDefault
const Rarezaveintidos = UrlRareza[PosveintidosRareza]  || RarezaDefault
const Rarezaveintitres = UrlRareza[PosveintitresRareza]  || RarezaDefault
const Rarezaveinticuatro = UrlRareza[PosveinticuatroRareza]  || RarezaDefault
const Rarezaveinticinco = UrlRareza[PosveinticincoRareza]  || RarezaDefault
const Rarezaveintiseis = UrlRareza[PosveintiseisRareza]  || RarezaDefault
const Rarezaveintisiete = UrlRareza[PosveintisieteRareza]  || RarezaDefault
const Rarezaveintiocho = UrlRareza[PosveintiochoRareza]  || RarezaDefault
const Rarezaveintinueve = UrlRareza[PosveintinueveRareza]  || RarezaDefault
const Rarezatreinta = UrlRareza[PostreintaRareza]  || RarezaDefault


//40-50

const Rarezaextrauno = UrlRareza[PosextraunoRareza]  || RarezaDefault
const Rarezaextrados = UrlRareza[PosextradosRareza]  || RarezaDefault
const Rarezaextratres = UrlRareza[PosextratresRareza]  || RarezaDefault
const Rarezaextracuatro = UrlRareza[PosextracuatroRareza]  || RarezaDefault
const Rarezaextracinco = UrlRareza[PosextracincoRareza]  || RarezaDefault
const Rarezaextraseis = UrlRareza[PosextraseisRareza]  || RarezaDefault
const Rarezaextrasiete = UrlRareza[PosextrasieteRareza]  || RarezaDefault
const Rarezaextraocho = UrlRareza[PosextraochoRareza]  || RarezaDefault 

//console.log(Rareza);


//COMIENZAN OBJETOS PARA SABER LA LIMITACION DE CADA CARTA

//URLS PARA OBTENER LAS IMAGENES DE RAREZA
const UrlLimitacion = {
  1: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg",
  2: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg",
  3: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg",
  4: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg"
}

//1-20
  const PosunoLimitacion = mainuno.limitacion
  const PosdosLimitacion = maindos.limitacion
  const PostresLimitacion = maintres.limitacion
  const PoscuatroLimitacion = maincuatro.limitacion
  const PoscincoLimitacion = maincinco.limitacion
  const PosseisLimitacion = mainseis.limitacion
  const PossieteLimitacion = mainsiete.limitacion
  const PosochoLimitacion = mainocho.limitacion
  const PosnueveLimitacion = mainnueve.limitacion
  const PosdiezLimitacion = maindiez.limitacion
  const PosonceLimitacion = mainonce.limitacion
  const PosdoceLimitacion = maindoce.limitacion
  const PostreceLimitacion = maintrece.limitacion
  const PoscatorceLimitacion = maincatorce.limitacion
  const PosquinceLimitacion = mainquince.limitacion
  const PosdieciseisLimitacion = maindieciseis.limitacion
  const PosdiecisieteLimitacion = maindiecisiete.limitacion
  const PosdieciochoLimitacion = maindieciocho.limitacion
  const PosdiecinueveLimitacion = maindiecinueve.limitacion
  const PosveinteLimitacion = mainveinte.limitacion


//21-30

  const PosveintiunoLimitacion = mainveintiuno.limitacion
  const PosveintidosLimitacion = mainveintidos.limitacion
  const PosveintitresLimitacion = mainveintitres.limitacion
  const PosveinticuatroLimitacion = mainveinticuatro.limitacion
  const PosveinticincoLimitacion = mainveinticinco.limitacion
  const PosveintiseisLimitacion = mainveintiseis.limitacion
  const PosveintisieteLimitacion = mainveintisiete.limitacion
  const PosveintiochoLimitacion = mainveintiocho.limitacion
  const PosveintinueveLimitacion = mainveintinueve.limitacion
  const PostreintaLimitacion = maintreinta.limitacion



  //VALORES DEFAULT NO PUEDEN IR NULOS PORQUE ALGUNAS CARGAS TRAEN LA URL DIRECTAMENTE
  const LimitacionDefault = ""
  //1-10
  const Limitacionuno = UrlLimitacion[PosunoLimitacion]  || LimitacionDefault
  const Limitaciondos = UrlLimitacion[PosdosLimitacion]  || LimitacionDefault
  const Limitaciontres = UrlLimitacion[PostresLimitacion]  || LimitacionDefault
  const Limitacioncuatro = UrlLimitacion[PoscuatroLimitacion]  || LimitacionDefault
  const Limitacioncinco = UrlLimitacion[PoscincoLimitacion]  || LimitacionDefault
  const Limitacionseis = UrlLimitacion[PosseisLimitacion]  || LimitacionDefault
  const Limitacionsiete = UrlLimitacion[PossieteLimitacion]  || LimitacionDefault
  const Limitacionocho = UrlLimitacion[PosochoLimitacion]  || LimitacionDefault
  const Limitacionnueve = UrlLimitacion[PosnueveLimitacion]  || LimitacionDefault
  const Limitaciondiez = UrlLimitacion[PosdiezLimitacion]  || LimitacionDefault

  //11-20

  const Limitaciononce = UrlLimitacion[PosonceLimitacion]  || LimitacionDefault
  const Limitaciondoce = UrlLimitacion[PosdoceLimitacion]  || LimitacionDefault
  const Limitaciontrece = UrlLimitacion[PostreceLimitacion]  || LimitacionDefault
  const Limitacioncatorce = UrlLimitacion[PoscatorceLimitacion]  || LimitacionDefault
  const Limitacionquince = UrlLimitacion[PosquinceLimitacion]  || LimitacionDefault
  const Limitaciondieciseis = UrlLimitacion[PosdieciseisLimitacion]  || LimitacionDefault
  const Limitaciondiecisiete = UrlLimitacion[PosdiecisieteLimitacion]  || LimitacionDefault
  const Limitaciondieciocho = UrlLimitacion[PosdieciochoLimitacion]  || LimitacionDefault
  const Limitaciondiecinueve = UrlLimitacion[PosdiecinueveLimitacion]  || LimitacionDefault
  const Limitacionveinte = UrlLimitacion[PosveinteLimitacion]  || LimitacionDefault

 //21-30

 const Limitacionveintiuno = UrlLimitacion[PosveintiunoLimitacion]  || LimitacionDefault
 const Limitacionveintidos = UrlLimitacion[PosveintidosLimitacion]  || LimitacionDefault
 const Limitacionveintitres = UrlLimitacion[PosveintitresLimitacion]  || LimitacionDefault
 const Limitacionveinticuatro = UrlLimitacion[PosveinticuatroLimitacion]  || LimitacionDefault
 const Limitacionveinticinco = UrlLimitacion[PosveinticincoLimitacion]  || LimitacionDefault
 const Limitacionveintiseis = UrlLimitacion[PosveintiseisLimitacion]  || LimitacionDefault
 const Limitacionveintisiete = UrlLimitacion[PosveintisieteLimitacion]  || LimitacionDefault
 const Limitacionveintiocho = UrlLimitacion[PosveintiochoLimitacion]  || LimitacionDefault
 const Limitacionveintinueve = UrlLimitacion[PosveintinueveLimitacion]  || LimitacionDefault
 const Limitaciontreinta = UrlLimitacion[PostreintaLimitacion]  || LimitacionDefault


//Constante para boton regresar
const navigate = useNavigate()

// const divtreinta = useState (decktreinta)

  return (


    <div className='box-grid' >
        <Header />
        <button className='btn btn-primary button-grid '  onClick={() => navigate(-1)}>Atrás</button> 
        <h1>{deckuno.arquetipo}</h1>
        <h2>{deckuno.top}</h2>
        <div>
      <a href='#'>  <img src='https://res.cloudinary.com/dqofcbeaq/image/upload/v1666132178/iconos%20dlp/act-compdk_bdkyzn.png' className='compartirdeck' ></img> </a>
        </div>
        <div className='gridhabilidad' >
          <h3>{deckuno.jugador}</h3>
        <span className='habilidadtexto'> <img src='https://res.cloudinary.com/dqofcbeaq/image/upload/v1665971318/iconos%20dlp/descarga_5_s7lpmt.webp' className='spanhabilidad' /> {deckuno.habilidad}</span>
        </div>
        {/* DEL 1-10   */}
        <div className='deck-grid'   >
         <div className='container-item item1'><img src={Rarezauno}  className='rareza'  ></img><img src={Limitacionuno}  className='limitacion'  ></img> <Link  to={`/cartas/${mainuno._id}/${mainuno.nombre}/`} ><Tooltipsdl position="right" content={<TooltipsCartasDecks />}><img src={cartauno.secure_url} className='cartatop2 item1' alt={mainuno.nombre} ></img></Tooltipsdl></Link></div>
          <div className='container-item item2' ><img src={Rarezados}  className='rareza'  ></img><img src={Limitaciondos}  className='limitacion'  ></img><Link  to={`/cartas/${maindos._id}/${maindos.nombre}/`} > <img src={cartados.secure_url} className='cartatop2' alt={maindos.nombre}   ></img></Link> </div>
          <div className='container-item item3' ><img src={Rarezatres}  className='rareza'  ></img><img src={Limitaciontres}  className='limitacion'  ></img> <Link  to={`/cartas/${maintres._id}/${maintres.nombre}/`} ><img src={cartatres.secure_url} className='cartatop2' alt={maintres.nombre}   ></img></Link> </div>
          <div className='container-item item4'><img src={Rarezacuatro}  className='rareza' ></img><img src={Limitacioncuatro}  className='limitacion'  ></img><Link  to={`/cartas/${maincuatro._id}/${maincuatro.nombre}/`} ><img src={cartacuatro.secure_url} className='cartatop2' alt={maincuatro.nombre}  ></img></Link> </div>
          <div className='container-item item5' ><img src={Rarezacinco}  className='rareza'  ></img><img src={Limitacioncinco}  className='limitacion'  ></img><Link  to={`/cartas/${maincinco._id}/${maincinco.nombre}/`} ><img src={cartacinco.secure_url} className='cartatop2' alt={maincinco.nombre}   ></img></Link> </div>
          <div className='container-item item6' ><img src={Rarezaseis}  className='rareza'  ></img><img src={Limitacionseis}  className='limitacion'  ></img><Link  to={`/cartas/${mainseis._id}/${mainseis.nombre}/`} ><img src={cartaseis.secure_url} className='cartatop2' alt={mainseis.nombre}  ></img></Link> </div>
          <div className='container-item item7' ><img src={Rarezasiete}  className='rareza'  ></img><img src={Limitacionsiete}  className='limitacion'  ></img><Link  to={`/cartas/${mainsiete._id}/${mainsiete.nombre}/`} ><img src={cartasiete.secure_url} className='cartatop2' alt={mainsiete.nombre}   ></img></Link> </div>
          <div className='container-item item8' ><img src={Rarezaocho}  className='rareza'  ></img><img src={Limitacionocho}  className='limitacion'  ></img><Link  to={`/cartas/${mainocho._id}/${mainocho.nombre}/`} ><img src={cartaocho.secure_url} className='cartatop2' alt={mainocho.nombre}   ></img></Link> </div>
          <div className='container-item item9' ><img src={Rarezanueve}  className='rareza'  ></img><img src={Limitacionnueve}  className='limitacion'  ></img><Link  to={`/cartas/${mainnueve._id}/${mainnueve.nombre}/`} ><img src={cartanueve.secure_url} className='cartatop2' alt={mainnueve.nombre}   ></img></Link> </div>
          <div className='container-item item10' ><img src={Rarezadiez}  className='rareza' ></img><img src={Limitaciondiez}  className='limitacion'  ></img><Link  to={`/cartas/${maindiez._id}/${maindiez.nombre}/`} ><img src={cartadiez.secure_url} className='cartatop2' alt={maindiez.nombre}   ></img></Link> </div>


          {/* DEL 11-20   */}
          <div className='container-item item11' ><img src={Rarezaonce}  className='rareza'  ></img><img src={Limitaciononce}  className='limitacion'  ></img><Link  to={`/cartas/${mainonce._id}/${mainonce.nombre}/`} ><img src={cartaonce.secure_url} className='cartatop2' alt={mainonce.nombre}  ></img></Link> </div>
          <div className='container-item item12' ><img src={Rarezadoce}  className='rareza'  ></img><img src={Limitaciondoce}  className='limitacion'  ></img><Link  to={`/cartas/${maindoce._id}/${maindoce.nombre}/`} ><img src={cartadoce.secure_url} className='cartatop2' alt={maindoce.nombre}  ></img></Link> </div>
          <div className='container-item item13' ><img src={Rarezatrece}  className='rareza'  ></img><img src={Limitaciontrece}  className='limitacion'  ></img><Link  to={`/cartas/${maintrece._id}/${maintrece.nombre}/`} ><img src={cartatrece.secure_url} className='cartatop2' alt={maintrece.nombre}  ></img> </Link></div>
          <div className='container-item item14' ><img src={Rarezacatorce}  className='rareza'  ></img><img src={Limitacioncatorce}  className='limitacion'  ></img><Link  to={`/cartas/${maincatorce._id}/${maincatorce.nombre}/`} ><img src={cartacatorce.secure_url} className='cartatop2' alt={maincatorce.nombre}   ></img> </Link></div>
          <div className='container-item item15' ><img src={Rarezaquince}  className='rareza'  ></img><img src={Limitacionquince}  className='limitacion'  ></img><Link  to={`/cartas/${mainquince._id}/${mainquince.nombre}/`} ><img src={cartaquince.secure_url} className='cartatop2' alt={mainquince.nombre}   ></img></Link> </div>
          <div className='container-item item16' ><img src={Rarezadieciseis}  className='rareza'  ></img><img src={Limitaciondieciseis}  className='limitacion'  ></img><Link  to={`/cartas/${maindieciseis._id}/${maindieciseis.nombre}/`} ><img src={cartadieciseis.secure_url} className='cartatop2' alt={maindieciseis.nombre}   ></img></Link> </div>
          <div className='container-item item17' ><img src={Rarezadiecisiete}  className='rareza' ></img><img src={Limitaciondiecisiete}  className='limitacion'  ></img><Link  to={`/cartas/${maindiecisiete._id}/${maindiecisiete.nombre}/`} ><img src={cartadiecisiete.secure_url} className='cartatop2' alt={maindiecisiete.nombre}  ></img> </Link></div>
          <div className='container-item item18' ><img src={Rarezadieciocho}  className='rareza'  ></img><img src={Limitaciondieciocho}  className='limitacion'  ></img><Link  to={`/cartas/${maindieciocho._id}/${maindieciocho.nombre}/`} ><img src={cartadieciocho.secure_url} className='cartatop2' alt={maindieciocho.nombre}  ></img> </Link></div>
          <div className='container-item item18' ><img src={Rarezadiecinueve}  className='rareza'  ></img><img src={Limitaciondiecinueve}  className='limitacion'  ></img><Link  to={`/cartas/${maindiecinueve._id}/${maindiecinueve.nombre}/`} ><img src={cartadiecinueve.secure_url} className='cartatop2' alt={maindiecinueve.nombre}  ></img></Link> </div>
          <div className='container-item item20' ><img src={Rarezaveinte}  className='rareza' ></img><img src={Limitacionveinte}  className='limitacion'  ></img><Link  to={`/cartas/${mainveinte._id}/${mainveinte.nombre}/`} ><img src={cartaveinte.secure_url} className='cartatop2' alt={mainveinte.nombre}   ></img></Link> </div>


          {/* DEL 21-30   */}
          <div className={ deckveintiuno.mainveintiuno === '' ? 'ocultar' : 'container-item item21'} > <img src={Rarezaveintiuno}  className='rareza'  ></img><img src={Limitacionveintiuno}  className='limitacion'  ></img><Link  to={`/cartas/${mainveintiuno._id}/${mainveintiuno.nombre}/`} ><img src={ cartaveintiuno ?    cartaveintiuno.secure_url : null  } className='cartatop2' alt={mainveintiuno.nombre}  ></img></Link> </div>
          <div className={ deckveintidos.mainveintidos === '' ? 'ocultar' : 'container-item item22'} ><img src={Rarezaveintidos}  className='rareza'  ></img><img src={Limitacionveintidos}  className='limitacion'  ></img><Link  to={`/cartas/${mainveintidos._id}/${mainveintidos.nombre}/`} ><img src={  cartaveintidos ?  cartaveintidos.secure_url : null } className='cartatop2' alt={mainveintidos.nombre}   ></img> </Link></div>
          <div className={ deckveintitres.mainveintitres === '' ? 'ocultar' : 'container-item item23'} ><img src={Rarezaveintitres}  className='rareza' ></img><img src={Limitacionveintitres}  className='limitacion'  ></img><Link  to={`/cartas/${mainveintitres._id}/${mainveintitres.nombre}/`} ><img src={ cartaveintitres ?  cartaveintitres.secure_url : null} className='cartatop2' alt={mainveintitres.nombre}  ></img></Link> </div>
          <div className={ deckveinticuatro.mainveinticuatro === '' ? 'ocultar' : 'container-item item24'} ><img src={Rarezaveinticuatro}  className='rareza'  ></img><img src={Limitacionveinticuatro}  className='limitacion'  ></img><Link  to={`/cartas/${mainveinticuatro._id}/${mainveinticuatro.nombre}/`} ><img src={ cartaveinticuatro ? cartaveinticuatro.secure_url : null } className='cartatop2' alt={mainveinticuatro.nombre}   ></img> </Link></div>
          <div className={ deckveinticinco.mainveinticinco === '' ? 'ocultar' : 'container-item item25'} ><img src={Rarezaveinticinco}  className='rareza'  ></img><img src={Limitacionveinticinco}  className='limitacion'  ></img><Link  to={`/cartas/${mainveinticinco._id}/${mainveinticinco.nombre}/`} ><img src={ cartaveintiseis ? cartaveinticinco.secure_url : null } className='cartatop2' alt={mainveinticinco.nombre}   ></img> </Link></div>
          <div className={ deckveintiseis.mainveintiseis === '' ? 'ocultar' : 'container-item item26'} ><img src={Rarezaveintiseis}  className='rareza'  ></img><img src={Limitacionveintiseis}  className='limitacion'  ></img><Link  to={`/cartas/${mainveintiseis._id}/${mainveintiseis.nombre}/`} ><img src={ cartaveintiseis && cartaveintiseis.secure_url  } className='cartatop2' alt={mainveintiseis.nombre}  ></img></Link> </div>
          <div className={ deckveintisiete.mainveintisiete === '' ? 'ocultar' : 'container-item item27'} ><img src={Rarezaveintisiete}  className='rareza'  ></img><img src={Limitacionveintisiete}  className='limitacion'  ></img><Link  to={`/cartas/${mainveintisiete._id}/${mainveintisiete.nombre}/`} ><img src={ cartaveintisiete ? cartaveintisiete.secure_url : null } className='cartatop2' alt={mainveintisiete.nombre}   ></img></Link> </div>
          <div className={ deckveintiocho.mainveintiocho === '' ? 'ocultar' :  'container-item item28'} ><img src={Rarezaveintiocho}  className='rareza'  ></img><img src={Limitacionveintiocho}  className='limitacion'  ></img><Link  to={`/cartas/${mainveintiocho._id}/${mainveintiocho.nombre}/`} ><img src={ cartaveintiocho && cartaveintiocho.secure_url  } className='cartatop2' alt={mainveintiocho.nombre}  ></img> </Link></div>
          <div className={ deckveinitinueve.mainveintinueve === '' ? 'ocultar' :  'container-item item29'} ><img src={Rarezaveintinueve}  className='rareza' ></img><img src={Limitacionveintinueve}  className='limitacion'  ></img><Link  to={`/cartas/${mainveintinueve._id}/${mainveintinueve.nombre}/`} ><img src={ cartaveintinueve && cartaveintinueve.secure_url  } className='cartatop2' alt={mainveintinueve.nombre}   ></img></Link> </div>
          <div className={ decktreinta.maintreinta === '' ? 'ocultar' : 'container-item item30' } ><img src={Rarezatreinta}  className='rareza' ></img><img src={Limitaciontreinta}  className='limitacion'  ></img><Link  to={`/cartas/${maintreinta._id}/${maintreinta.nombre}/`} ><img src={ cartatreinta && cartatreinta.secure_url } className={'cartatop2' }alt={maintreinta.nombre}  ></img> </Link></div>
          
        </div>
      
        <span>Zona extra</span>
        <div className='extra-grid' >
        <div className={ deckextrauno.extrauno === '' ? 'ocultar' :'container-extra extra1' } ><img src={Rarezaextrauno}  className='rareza' ></img><img src={ extrauno.limitacion === 0 ? '' : extrauno.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extrauno.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extrauno.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extrauno.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" : extrauno.limitacion}  className='limitacion'  ></img><Link  to={`/cartas/${extrauno._id}/${extrauno.nombre}/`} ><img src={ cartaextrauno &&  cartaextrauno.secure_url } className={'cartatop2' }alt={extrauno.nombre}  ></img> </Link> </div>
        <div className={ deckextrados.extrados === '' ? 'ocultar' : 'container-extra extra2' } ><img src={Rarezaextrados}  className='rareza' ></img><img src={ extrados.limitacion === 0 ? '' : extrados.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extrados.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extrados.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extrados.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extrados.limitacion}  className='limitacion'  ></img><Link  to={`/cartas/${extrados._id}/${extrados.nombre}/`} ><img src={ cartaextrados && cartaextrados.secure_url } className={'cartatop2' }alt={extrados.nombre}  ></img> </Link> </div>
        <div className={ deckextratres.extratres === '' ? 'ocultar' : 'container-extra extra3' } ><img src={Rarezaextratres}  className='rareza' ></img><img src={  extratres.limitacion === 0 ? '' : extratres.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extratres.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extratres.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extratres.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :    extratres.limitacion}  className='limitacion'  ></img><Link  to={`/cartas/${extratres._id}/${extratres.nombre}/`} ><img src={ cartaextratres && cartaextratres.secure_url } className={'cartatop2' }alt={extratres.nombre}  ></img></Link>  </div>
        <div className={ deckextracuatro.extracuatro === '' ? 'ocultar' : 'container-extra extra4' } ><img src={Rarezaextracuatro}  className='rareza' ></img><img src={ extracuatro.limitacion === 0 ? '' : extracuatro.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extracuatro.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extracuatro.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extracuatro.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extracuatro.limitacion}  className='limitacion'  ></img><Link  to={`/cartas/${extracuatro._id}/${extracuatro.nombre}/`} ><img src={ cartaextracuatro && cartaextracuatro.secure_url } className={'cartatop2' }alt={extracuatro.nombre}  ></img> </Link> </div>
        <div className={ deckextracinco.extracinco === '' ? 'ocultar' : 'container-extra extra5' } ><img src={Rarezaextracinco}  className='rareza' ></img><img src={ extracinco.limitacion === 0 ? '' : extracinco.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extracinco.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extracinco.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extracinco.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extracinco.limitacion}  className='limitacion'  ></img><Link  to={`/cartas/${extracinco._id}/${extracinco.nombre}/`} ><img src={ cartaextracinco && cartaextracinco.secure_url } className={'cartatop2' }alt={extracinco.nombre}  ></img></Link>  </div>
        <div className={ deckextraseis.extraseis === '' ? 'ocultar' : 'container-extra extra6' } ><img src={Rarezaextraseis}  className='rareza' ></img><img src={ extraseis.limitacion === 0 ? '' : extraseis.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extraseis.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extraseis.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extraseis.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extraseis.limitacion}  className='limitacion'  ></img><Link  to={`/cartas/${extraseis._id}/${extraseis.nombre}/`} ><img src={ cartaextraseis && cartaextraseis.secure_url } className={'cartatop2' }alt={extraseis.nombre}  ></img></Link>  </div>
        <div className={ deckextrasiete.extrasiete === '' ? 'ocultar' : 'container-extra extra7' } ><img src={Rarezaextrasiete}  className='rareza' ></img><img src={ extrasiete.limitacion === 0 ? '' : extrasiete.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extrasiete.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extrasiete.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extrasiete.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extrasiete.limitacion}  className='limitacion'  ></img><Link  to={`/cartas/${extrasiete._id}/${extrasiete.nombre}/`} ><img src={ cartaextrasiete && cartaextrasiete.secure_url } className={'cartatop2' }alt={extrasiete.nombre}  ></img></Link>  </div>
        <div className={ deckextraocho.extraocho === '' ? 'ocultar' : 'container-extra extra8' } ><img src={Rarezaextraocho}  className='rareza' ></img><img src={ extraocho.limitacion === 0 ? '' : extraocho.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extraocho.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extraocho.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extraocho.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extraocho.limitacion}  className='limitacion'  ></img><Link  to={`/cartas/${extraocho._id}/${extraocho.nombre}/`} ><img src={ cartaextraocho && cartaextraocho.secure_url } className={'cartatop2' }alt={extraocho.nombre}  ></img> </Link> </div>
        </div>
        
        <h2> Lista de otros decks  </h2>

        <Footer />
        
    </div>
  )
}

export default Deckscreator