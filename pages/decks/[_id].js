import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import axios from 'axios'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Tooltipsdl from '../../components/Tooltipsdl'
import { useRouter } from 'next/router'
import Image from 'next/image'
//import { isVisible } from '@testing-library/user-event/dist/utils'

//import "./deckscreator.css";



function Deckscreator() {

  //
 {/* console.log(useParams()); 

  const {_id} = useParams()
console.log(_id); */}

const router = useRouter()
  console.log(router);

  const { _id } = router.query


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
      const url = `https://api.duellinks.pro/decks/${_id}`;
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
      const urlmainuno = `https://api.duellinks.pro/cartas/${deckuno.mainuno}`;
      const urlmaindos = `https://api.duellinks.pro/cartas/${deckdos.maindos}`;
      const urlmaintres = `https://api.duellinks.pro/cartas/${decktres.maintres}`;
      const urlmaincuatro = `https://api.duellinks.pro/cartas/${deckcuatro.maincuatro}`;
      const urlmaincinco = `https://api.duellinks.pro/cartas/${deckcinco.maincinco}`;
      const urlmainseis = `https://api.duellinks.pro/cartas/${deckseis.mainseis}`;
      const urlmainsiete = `https://api.duellinks.pro/cartas/${decksiete.mainsiete}`;
      const urlmainocho = `https://api.duellinks.pro/cartas/${deckocho.mainocho}`;
      const urlmainnueve = `https://api.duellinks.pro/cartas/${decknueve.mainnueve}`;
      const urlmaindiez = `https://api.duellinks.pro/cartas/${deckdiez.maindiez}`;
      //DIEZ URL
      const urlmainonce = `https://api.duellinks.pro/cartas/${deckonce.mainonce}`;
      const urlmaindoce = `https://api.duellinks.pro/cartas/${deckdoce.maindoce}`;
      const urlmaintrce = `https://api.duellinks.pro/cartas/${decktrece.maintrece}`;
      const urlmaincatorce = `https://api.duellinks.pro/cartas/${deckcatorce.maincatorce}`;
      const urlmainquince = `https://api.duellinks.pro/cartas/${deckquince.mainquince}`;
      const urlmaindieciseis = `https://api.duellinks.pro/cartas/${deckdieciseis.maindieciseis}`;
      const urlmaindiecisiete = `https://api.duellinks.pro/cartas/${deckdiecisiete.maindiecisiete}`;
      const urlmaindieciocho = `https://api.duellinks.pro/cartas/${deckdieciocho.maindieciocho}`;
      const urlmaindiecinueve = `https://api.duellinks.pro/cartas/${deckdiecinueve.maindiecinueve}`;
      const urlmainveinte = `https://api.duellinks.pro/cartas/${deckveinte.mainveinte}`;
      //VEINTE URL
      const urlmainveintiuno = `https://api.duellinks.pro/cartas/${deckveintiuno.mainveintiuno}`;
      const urlmainveintidos = `https://api.duellinks.pro/cartas/${deckveintidos.mainveintidos}`;
      const urlmainveintitres = `https://api.duellinks.pro/cartas/${deckveintitres.mainveintitres}`;
        const urlmainveinticuatro = `https://api.duellinks.pro/cartas/${deckveinticuatro.mainveinticuatro}`;
      const urlmainveinticinco = `https://api.duellinks.pro/cartas/${deckveinticinco.mainveinticinco}`;
       const urlmainveintiseis = `https://api.duellinks.pro/cartas/${deckveintiseis.mainveintiseis}`;
      const urlmainveintisiete = `https://api.duellinks.pro/cartas/${deckveintisiete.mainveintisiete}`;
      const urlmainveintiocho = `https://api.duellinks.pro/cartas/${deckveintiocho.mainveintiocho}`;
      const urlmainveintinueve = `https://api.duellinks.pro/cartas/${deckveinitinueve.mainveintinueve}`;
      const urlmaintreinta = `https://api.duellinks.pro/cartas/${decktreinta.maintreinta}`;
      
      //COMIENZAN URL DE EXTRA DECK

      const urlextrauno = `https://api.duellinks.pro/cartas/${deckextrauno.extrauno}`;
      const urlextrados = `https://api.duellinks.pro/cartas/${deckextrados.extrados}`;
      const urlextratres = `https://api.duellinks.pro/cartas/${deckextratres.extratres}`;
      const urlextracuatro = `https://api.duellinks.pro/cartas/${deckextracuatro.extracuatro}`;
      const urlextracinco = `https://api.duellinks.pro/cartas/${deckextracinco.extracinco}`;
      const urlextraseis = `https://api.duellinks.pro/cartas/${deckextraseis.extraseis}`;
      const urlextrasiete = `https://api.duellinks.pro/cartas/${deckextrasiete.extrasiete}`;
      const urlextraocho = `https://api.duellinks.pro/cartas/${deckextraocho.extraocho}`;
    //  const urlextranueve = `https://api.duellinks.pro/cartas/${extranueve.extranuevepos}`;
    //  const urlextradiez = `https://api.duellinks.pro/cartas/${extradiez.extradiezpos}`;   */

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

const UrlAtributos = {
  AGUA: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-a_bgb8gi.png",
  OSCURIDAD: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-o_mpvorg.png",
  LUZ: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-l_qr3a8g.png",
  FUEGO:"https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-f_x0zolt.png",
  TIERRA: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-t_bfdbhz.png",
  VIENTO: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-v_tlniay.png",
  DIVINIDAD: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-d_ssxcag.png",
  M??GICA: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-m_gojjne.png",
  TRAMPA: "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663818431/iconos%20dlp/at-tr_zdjtkd.png"

}

const UrlTipodeMagicaoTrampa = {
  "De juego r??pido": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/de_juego_rapido_mmsikz.webp",
  "Normal": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/normal_vpey0j.webp",
  "De campo": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/de_campo_qoxyag.webp",
  "Continua": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/continua_wh3pfj.webp",
  "De contraefecto": "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/contraefecto_pxkz7z.webp"
}

//Atributos
//1-10
const AtributosMainuno = mainuno.atributo
const AtributosMaindos = maindos.atributo
const AtributosMaintres = maintres.atributo
const AtributosMaincuatro = maincuatro.atributo
const AtributosMaincinco = maincinco.atributo
const AtributosMainseis = mainseis.atributo
const AtributosMainsiete = mainsiete.atributo
const AtributosMainocho = mainocho.atributo
const AtributosMainnueve = mainnueve.atributo
const AtributosMaindiez = maindiez.atributo

//11-20
const AtributosMainonce = mainonce.atributo
const AtributosMaindoce = maindoce.atributo
const AtributosMaintrece = maintrece.atributo
const AtributosMaincatorce = maincatorce.atributo
const AtributosMainquince = mainquince.atributo
const AtributosMaindieciseis = maindieciseis.atributo
const AtributosMaindiecisiete = maindiecisiete.atributo
const AtributosMaindieciocho = maindieciocho.atributo
const AtributosMaindiecinueve = maindiecinueve.atributo
const AtributosMainveinte = mainveinte.atributo

//21-30
const AtributosMainveintiuno = mainveintiuno.atributo
const AtributosMainveintidos = mainveintidos.atributo
const AtributosMainveintitres = mainveintitres.atributo
const AtributosMainveinticuatro = mainveinticuatro.atributo
const AtributosMainveinticinco = mainveinticinco.atributo
const AtributosMainveintiseis = mainveintiseis.atributo
const AtributosMainveintisiete = mainveintisiete.atributo
const AtributosMainveintiocho = mainveintiocho.atributo
const AtributosMainveintinueve = mainveintinueve.atributo
const AtributosMaintreinta = maintreinta.atributo

//31-40
const AtributosExtrauno = extrauno.atributo
const AtributosExtrados = extrados.atributo
const AtributosExtratres = extratres.atributo
const AtributosExtracuatro = extracuatro.atributo
const AtributosExtracinco = extracinco.atributo
const AtributosExtraseis = extraseis.atributo
const AtributosExtrasiete = extrasiete.atributo
const AtributosExtraocho = extraocho.atributo

//41-50

//VALOR DEFAULT
const DefaultAtributoMainuno = ""

//VALOR PARA RENDERIZAR DEL 1-10
const AtributoMainuno = UrlAtributos[AtributosMainuno] || DefaultAtributoMainuno
const AtributoMaindos = UrlAtributos[AtributosMaindos] || DefaultAtributoMainuno
const AtributoMaintres = UrlAtributos[AtributosMaintres] || DefaultAtributoMainuno
const AtributoMaincuatro = UrlAtributos[AtributosMaincuatro] || DefaultAtributoMainuno
const AtributoMaincinco = UrlAtributos[AtributosMaincinco] || DefaultAtributoMainuno
const AtributoMainseis = UrlAtributos[AtributosMainseis] || DefaultAtributoMainuno
const AtributoMainsiete = UrlAtributos[AtributosMainsiete] || DefaultAtributoMainuno
const AtributoMainocho = UrlAtributos[AtributosMainocho] || DefaultAtributoMainuno
const AtributoMainnueve = UrlAtributos[AtributosMainnueve] || DefaultAtributoMainuno
const AtributoMaindiez = UrlAtributos[AtributosMaindiez] || DefaultAtributoMainuno

//11-20
const AtributoMainonce = UrlAtributos[AtributosMainonce] || DefaultAtributoMainuno
const AtributoMaindoce = UrlAtributos[AtributosMaindoce] || DefaultAtributoMainuno
const AtributoMaintrece = UrlAtributos[AtributosMaintrece] || DefaultAtributoMainuno
const AtributoMaincatorce = UrlAtributos[AtributosMaincatorce] || DefaultAtributoMainuno
const AtributoMainquince = UrlAtributos[AtributosMainquince] || DefaultAtributoMainuno
const AtributoMaindieciseis = UrlAtributos[AtributosMaindieciseis] || DefaultAtributoMainuno
const AtributoMaindiecisiete = UrlAtributos[AtributosMaindiecisiete] || DefaultAtributoMainuno
const AtributoMaindieciocho = UrlAtributos[AtributosMaindieciocho] || DefaultAtributoMainuno
const AtributoMaindiecinueve = UrlAtributos[AtributosMaindiecinueve] || DefaultAtributoMainuno
const AtributoMainveinte = UrlAtributos[AtributosMainveinte] || DefaultAtributoMainuno

//21-30
const AtributoMainveintiuno = UrlAtributos[AtributosMainveintiuno] || DefaultAtributoMainuno
const AtributoMainveintidos = UrlAtributos[AtributosMainveintidos] || DefaultAtributoMainuno
const AtributoMainveintitres = UrlAtributos[AtributosMainveintitres] || DefaultAtributoMainuno
const AtributoMainveinticuatro = UrlAtributos[AtributosMainveinticuatro] || DefaultAtributoMainuno
const AtributoMainveinticinco = UrlAtributos[AtributosMainveinticinco] || DefaultAtributoMainuno
const AtributoMainveintiseis = UrlAtributos[AtributosMainveintiseis] || DefaultAtributoMainuno
const AtributoMainveintisiete = UrlAtributos[AtributosMainveintisiete] || DefaultAtributoMainuno
const AtributoMainveintiocho = UrlAtributos[AtributosMainveintiocho] || DefaultAtributoMainuno
const AtributoMainveintinueve = UrlAtributos[AtributosMainveintinueve] || DefaultAtributoMainuno
const AtributoMaintreinta = UrlAtributos[AtributosMaintreinta] || DefaultAtributoMainuno

//EXTRA DECK 31-40
const AtributoExtrauno = UrlAtributos[AtributosExtrauno] || DefaultAtributoMainuno
const AtributoExtrados = UrlAtributos[AtributosExtrados] || DefaultAtributoMainuno
const AtributoExtratres = UrlAtributos[AtributosExtratres] || DefaultAtributoMainuno
const AtributoExtracuatro = UrlAtributos[AtributosExtracuatro] || DefaultAtributoMainuno
const AtributoExtracinco = UrlAtributos[AtributosExtracinco] || DefaultAtributoMainuno
const AtributoExtraseis = UrlAtributos[AtributosExtraseis] || DefaultAtributoMainuno
const AtributoExtrasiete = UrlAtributos[AtributosExtrasiete] || DefaultAtributoMainuno
const AtributoExtraocho = UrlAtributos[AtributosExtraocho] || DefaultAtributoMainuno

//Tipo de Magica trampa
//1-10
const TiposdeMagicaTrampaMainuno = mainuno.tipo_magica_trampa
const TiposdeMagicaTrampaMaindos = maindos.tipo_magica_trampa
const TiposdeMagicaTrampaMaintres = maintres.tipo_magica_trampa
const TiposdeMagicaTrampaMaincuatro = maincuatro.tipo_magica_trampa
const TiposdeMagicaTrampaMaincinco = maincinco.tipo_magica_trampa
const TiposdeMagicaTrampaMainseis = mainseis.tipo_magica_trampa
const TiposdeMagicaTrampaMainsiete = mainsiete.tipo_magica_trampa
const TiposdeMagicaTrampaMainocho = mainocho.tipo_magica_trampa
const TiposdeMagicaTrampaMainnueve = mainnueve.tipo_magica_trampa
const TiposdeMagicaTrampaMaindiez = maindiez.tipo_magica_trampa

//11-20
const TiposdeMagicaTrampaMainonce = mainonce.tipo_magica_trampa
const TiposdeMagicaTrampaMaindoce = maindoce.tipo_magica_trampa
const TiposdeMagicaTrampaMaintrece = maintrece.tipo_magica_trampa
const TiposdeMagicaTrampaMaincatorce = maincatorce.tipo_magica_trampa
const TiposdeMagicaTrampaMainquince = mainquince.tipo_magica_trampa
const TiposdeMagicaTrampaMaindieciseis = maindieciseis.tipo_magica_trampa
const TiposdeMagicaTrampaMaindiecisiete = maindiecisiete.tipo_magica_trampa
const TiposdeMagicaTrampaMaindieciocho = maindieciocho.tipo_magica_trampa
const TiposdeMagicaTrampaMaindiecinueve = maindiecinueve.tipo_magica_trampa
const TiposdeMagicaTrampaMainveinte = mainveinte.tipo_magica_trampa

//21-30
const TiposdeMagicaTrampaMainveintiuno = mainveintiuno.tipo_magica_trampa
const TiposdeMagicaTrampaMainveintidos = mainveintidos.tipo_magica_trampa
const TiposdeMagicaTrampaMainveintitres = mainveintitres.tipo_magica_trampa
const TiposdeMagicaTrampaMainveinticuatro = mainveinticuatro.tipo_magica_trampa
const TiposdeMagicaTrampaMainveinticinco = mainveinticinco.tipo_magica_trampa
const TiposdeMagicaTrampaMainveintiseis = mainveintiseis.tipo_magica_trampa
const TiposdeMagicaTrampaMainveintisiete = mainveintisiete.tipo_magica_trampa
const TiposdeMagicaTrampaMainveintiocho = mainveintiocho.tipo_magica_trampa
const TiposdeMagicaTrampaMainveintinueve = mainveintinueve.tipo_magica_trampa
const TiposdeMagicaTrampaMaintreinta = maintreinta.tipo_magica_trampa

//EXTRA DECK 31-40
const TiposdeMagicaTrampaExtrauno = extrauno.tipo_magica_trampa
const TiposdeMagicaTrampaExtrados = extrados.tipo_magica_trampa
const TiposdeMagicaTrampaExtratres = extratres.tipo_magica_trampa
const TiposdeMagicaTrampaExtracuatro = extracuatro.tipo_magica_trampa
const TiposdeMagicaTrampaExtracinco = extracinco.tipo_magica_trampa
const TiposdeMagicaTrampaExtraseis = extraseis.tipo_magica_trampa
const TiposdeMagicaTrampaExtrasiete = extrasiete.tipo_magica_trampa
const TiposdeMagicaTrampaExtraocho = extraocho.tipo_magica_trampa


//VALOR DEFAULT
const DefaultTipodeMagicaTrampa = ""


//TIPOS DE MAGICA TRAMPA PARA RENDERIZAR
//1-10
const TipodeMagicaTrampaMainuno = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainuno] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaindos = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaindos] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaintres = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaintres] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaincuatro = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaincuatro] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaincinco = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaincinco] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainseis = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainseis] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainsiete = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainsiete] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainocho = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainocho] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainnueve = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainnueve] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaindiez = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaindiez] || DefaultTipodeMagicaTrampa

//11-20
const TipodeMagicaTrampaMainonce = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainonce] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaindoce = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaindoce] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaintrece = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaintrece] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaincatorce = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaincatorce] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainquince = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainquince] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaindieciseis = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaindieciseis] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaindiecisiete = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaindiecisiete] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaindieciocho = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaindieciocho] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaindiecinueve = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaindiecinueve] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainveinte = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainveinte] || DefaultTipodeMagicaTrampa

//21-30
const TipodeMagicaTrampaMainveintiuno = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainveintiuno] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainveintidos = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainveintidos] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainveintitres = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainveintitres] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainveinticuatro = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainveinticuatro] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainveinticinco = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainveinticinco] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainveintiseis = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainveintiseis] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainveintisiete = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainveintisiete] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainveintiocho = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainveintiocho] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMainveintinueve = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMainveintinueve] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaMaintreinta = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaMaintreinta] || DefaultTipodeMagicaTrampa

//EXTRA DECK 31-40
const TipodeMagicaTrampaExtrauno = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaExtrauno] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaExtrados = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaExtrados] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaExtratres = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaExtratres] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaExtracuatro = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaExtracuatro] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaExtracinco = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaExtracinco] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaExtraseis = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaExtraseis] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaExtrasiete = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaExtrasiete] || DefaultTipodeMagicaTrampa
const TipodeMagicaTrampaExtraocho = UrlTipodeMagicaoTrampa[TiposdeMagicaTrampaExtraocho] || DefaultTipodeMagicaTrampa


//const TiposdecartasMainuno = mainuno.tipo_de_carta

//Main uno **
const Tooltipsmainuno = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainuno.nombre}</span><img
                  src={AtributoMainuno}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" >{mainuno.atributo}</span>
                <img
                  src={
                    mainuno.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainuno.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainuno.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainuno.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainuno.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainuno.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainuno.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainuno.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainuno.nivel_rango_link || mainuno.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainuno.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainuno.escala === 0 ? '' : mainuno.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainuno}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainuno.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainuno.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainuno.tipo} / ${mainuno.tipo_de_carta}   ${
                    mainuno.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainuno.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainuno.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainuno.tipo_de_carta === "Link" ? "/ Efecto" :  mainuno.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainuno.materiales}</span>
                <span className="span_info">{mainuno.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainuno.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainuno.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainuno.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainuno.atk}  ${
                    mainuno.tipo_de_carta === "Link"
                      ? "LINK - " + mainuno.nivel_rango_link
                      : "DEF/ " + mainuno.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainuno.caja}</span>
               
                <span className="span_info">{mainuno.estructura}</span>
               
                <span className="span_info">{mainuno.selection_box}</span>
                
                <span className="span_info">{mainuno.lote}</span>
                
                <span className="span_info">{mainuno.adicional}</span>
          </div>
        </div>
  )
})



// Main Dos **
const Tooltipsmaindos = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maindos.nombre}</span><img
                  src={AtributoMaindos}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maindos.atributo} </span>
                <img
                  src={
                    maindos.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maindos.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maindos.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindos.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maindos.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maindos.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindos.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maindos.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maindos.nivel_rango_link || maindos.nivel_rango
                    : ""
                }   `}</span>
                <img src={maindos.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips" >{maindos.escala === 0 ? '' : maindos.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaindos}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maindos.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maindos.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maindos.tipo} / ${maindos.tipo_de_carta}   ${
                    maindos.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maindos.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maindos.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maindos.tipo_de_carta === "Link" ? "/ Efecto" :  maindos.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maindos.materiales}</span>
                <span className="span_info">{maindos.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maindos.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maindos.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maindos.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maindos.atk}  ${
                    maindos.tipo_de_carta === "Link"
                      ? "LINK - " + maindos.nivel_rango_link
                      : "DEF/ " + maindos.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maindos.caja}</span>

                <span className="span_info">{maindos.estructura}</span>
               
               <span className="span_info">{maindos.selection_box}</span>
               
               <span className="span_info">{maindos.lote}</span>
               
               <span className="span_info">{maindos.adicional}</span>
          </div>
        </div>
  )
})

//Main tres
const Tooltipsmaintres = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maintres.nombre}</span><img
                  src={AtributoMaintres}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maintres.atributo} </span>
                <img
                  src={
                    maintres.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maintres.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maintres.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maintres.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maintres.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maintres.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maintres.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maintres.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maintres.nivel_rango_link || maintres.nivel_rango
                    : ""
                }   `}</span>
                <img src={maintres.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{maintres.escala === 0 ? '' : maintres.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaintres}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maintres.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maintres.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maintres.tipo} / ${maintres.tipo_de_carta}   ${
                    maintres.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maintres.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maintres.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maintres.tipo_de_carta === "Link" ? "/ Efecto" :  maintres.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maintres.materiales}</span>
                <span className="span_info">{maintres.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maintres.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maintres.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maintres.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maintres.atk}  ${
                    maintres.tipo_de_carta === "Link"
                      ? "LINK - " + maintres.nivel_rango_link
                      : "DEF/ " + maintres.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maintres.caja}</span>

                <span className="span_info">{maintres.estructura}</span>
               
               <span className="span_info">{maintres.selection_box}</span>
               
               <span className="span_info">{maintres.lote}</span>
               
               <span className="span_info">{maintres.adicional}</span>
          </div>
        </div>
  )
})

//Maincuatro

const Tooltipsmaincuatro = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maincuatro.nombre}</span><img
                  src={AtributoMaincuatro}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maincuatro.atributo} </span>
                <img
                  src={
                    maincuatro.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maincuatro.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maincuatro.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maincuatro.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maincuatro.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maincuatro.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maincuatro.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maincuatro.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maincuatro.nivel_rango_link || maincuatro.nivel_rango
                    : ""
                }   `}</span>
                <img src={maincuatro.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips" >{maincuatro.escala === 0 ? '' : maincuatro.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaincuatro}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maincuatro.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maincuatro.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maincuatro.tipo} / ${maincuatro.tipo_de_carta}   ${
                    maincuatro.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maincuatro.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maincuatro.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maincuatro.tipo_de_carta === "Link" ? "/ Efecto" :  maincuatro.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maincuatro.materiales}</span>
                <span className="span_info">{maincuatro.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maincuatro.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maincuatro.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maincuatro.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maincuatro.atk}  ${
                    maincuatro.tipo_de_carta === "Link"
                      ? "LINK - " + maincuatro.nivel_rango_link
                      : "DEF/ " + maincuatro.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maincuatro.caja}</span>

                <span className="span_info">{maincuatro.estructura}</span>
               
               <span className="span_info">{maincuatro.selection_box}</span>
               
               <span className="span_info">{maincuatro.lote}</span>
               
               <span className="span_info">{maincuatro.adicional}</span>
          </div>
        </div>
  )
})

//Maincinco

const Tooltipsmaincinco = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maincinco.nombre}</span><img
                  src={AtributoMaincinco}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maincinco.atributo} </span>
                <img
                  src={
                    maincinco.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maincinco.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maincinco.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maincinco.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maincinco.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maincinco.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maincinco.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maincinco.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maincinco.nivel_rango_link || maincinco.nivel_rango
                    : ""
                }   `}</span>
                <img src={maincinco.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips" >{maincinco.escala === 0 ? '' : maincinco.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaincinco}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span lassName="tipo_magica_trampa_tooltip">{maincinco.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maincinco.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maincinco.tipo} / ${maincinco.tipo_de_carta}   ${
                    maincinco.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maincinco.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maincinco.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maincinco.tipo_de_carta === "Link" ? "/ Efecto" :  maincinco.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maincinco.materiales}</span>
                <span className="span_info">{maincinco.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maincinco.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maincinco.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maincinco.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maincinco.atk}  ${
                    maincinco.tipo_de_carta === "Link"
                      ? "LINK - " + maincinco.nivel_rango_link
                      : "DEF/ " + maincinco.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maincinco.caja}</span>

                <span className="span_info">{maincinco.estructura}</span>
               
               <span className="span_info">{maincinco.selection_box}</span>
               
               <span className="span_info">{maincinco.lote}</span>
               
               <span className="span_info">{maincinco.adicional}</span>
          </div>
        </div>
  )
})

//Mainseis

const Tooltipsmainseis = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainseis.nombre}</span><img
                  src={AtributoMainseis}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainseis.atributo} </span>
                <img
                  src={
                    mainseis.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainseis.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainseis.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainseis.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainseis.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainseis.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainseis.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainseis.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainseis.nivel_rango_link || mainseis.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainseis.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips" >{mainseis.escala === 0 ? '' : mainseis.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainseis}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainseis.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainseis.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainseis.tipo} / ${mainseis.tipo_de_carta}   ${
                    mainseis.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainseis.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainseis.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainseis.tipo_de_carta === "Link" ? "/ Efecto" :  mainseis.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainseis.materiales}</span>
                <span className="span_info">{mainseis.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainseis.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainseis.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainseis.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainseis.atk}  ${
                    mainseis.tipo_de_carta === "Link"
                      ? "LINK - " + mainseis.nivel_rango_link
                      : "DEF/ " + mainseis.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainseis.caja}</span>

                <span className="span_info">{mainseis.estructura}</span>
               
               <span className="span_info">{mainseis.selection_box}</span>
               
               <span className="span_info">{mainseis.lote}</span>
               
               <span className="span_info">{mainseis.adicional}</span>
          </div>
        </div>
  )
})

//Mainsiete

const Tooltipsmainsiete = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainsiete.nombre}</span><img
                  src={AtributoMainsiete}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainsiete.atributo} </span>
                <img
                  src={
                    mainsiete.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainsiete.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainsiete.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainsiete.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainsiete.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainsiete.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainsiete.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainsiete.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainsiete.nivel_rango_link || mainsiete.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainsiete.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainsiete.escala === 0 ? '' : mainsiete.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainsiete}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainsiete.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainsiete.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainsiete.tipo} / ${mainsiete.tipo_de_carta}   ${
                    mainsiete.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainsiete.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainsiete.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainsiete.tipo_de_carta === "Link" ? "/ Efecto" :  mainsiete.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainsiete.materiales}</span>
                <span className="span_info">{mainsiete.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainsiete.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainsiete.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainseis.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainsiete.atk}  ${
                    mainsiete.tipo_de_carta === "Link"
                      ? "LINK - " + mainsiete.nivel_rango_link
                      : "DEF/ " + mainsiete.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainsiete.caja}</span>

                <span className="span_info">{mainsiete.estructura}</span>
               
               <span className="span_info">{mainsiete.selection_box}</span>
               
               <span className="span_info">{mainsiete.lote}</span>
               
               <span className="span_info">{mainsiete.adicional}</span>
          </div>
        </div>
  )
})

//Mainocho
const Tooltipsmainocho = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainocho.nombre}</span><img
                  src={AtributoMainocho}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainocho.atributo} </span>
                <img
                  src={
                    mainocho.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainocho.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainocho.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainocho.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainocho.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainocho.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainocho.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainocho.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainocho.nivel_rango_link || mainocho.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainocho.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainocho.escala === 0 ? '' : mainocho.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainocho}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainocho.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainocho.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainocho.tipo} / ${mainocho.tipo_de_carta}   ${
                    mainocho.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainocho.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainocho.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainocho.tipo_de_carta === "Link" ? "/ Efecto" :  mainocho.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainocho.materiales}</span>
                <span className="span_info">{mainocho.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainocho.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainocho.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainocho.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainocho.atk}  ${
                    mainocho.tipo_de_carta === "Link"
                      ? "LINK - " + mainocho.nivel_rango_link
                      : "DEF/ " + mainocho.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainocho.caja}</span>

                <span className="span_info">{mainocho.estructura}</span>
               
               <span className="span_info">{mainocho.selection_box}</span>
               
               <span className="span_info">{mainocho.lote}</span>
               
               <span className="span_info">{mainocho.adicional}</span>
          </div>
        </div>
  )
})

//Mainnueve
const Tooltipsmainnueve = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainnueve.nombre}</span><img
                  src={AtributoMainnueve}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainnueve.atributo} </span>
                <img
                  src={
                    mainnueve.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainnueve.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainnueve.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainnueve.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainnueve.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainnueve.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainnueve.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainnueve.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainnueve.nivel_rango_link || mainnueve.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainnueve.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainnueve.escala === 0 ? '' : mainnueve.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainnueve}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainnueve.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainnueve.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainnueve.tipo} / ${mainnueve.tipo_de_carta}   ${
                    mainnueve.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainnueve.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainnueve.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainnueve.tipo_de_carta === "Link" ? "/ Efecto" :  mainnueve.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainnueve.materiales}</span>
                <span className="span_info">{mainnueve.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainnueve.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainnueve.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainnueve.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainnueve.atk}  ${
                    mainnueve.tipo_de_carta === "Link"
                      ? "LINK - " + mainnueve.nivel_rango_link
                      : "DEF/ " + mainnueve.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainnueve.caja}</span>

                <span className="span_info">{mainnueve.estructura}</span>
               
               <span className="span_info">{mainnueve.selection_box}</span>
               
               <span className="span_info">{mainnueve.lote}</span>
               
               <span className="span_info">{mainnueve.adicional}</span>
          </div>
        </div>
  )
})

//Maindiez
const Tooltipsmaindiez = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maindiez.nombre}</span><img
                  src={AtributoMaindiez}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maindiez.atributo} </span>
                <img
                  src={
                    maindiez.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maindiez.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maindiez.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindiez.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maindiez.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maindiez.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindiez.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maindiez.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maindiez.nivel_rango_link || maindiez.nivel_rango
                    : ""
                }   `}</span>
                <img src={maindiez.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{maindiez.escala === 0 ? '' : maindiez.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaindiez}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maindiez.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maindiez.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maindiez.tipo} / ${maindiez.tipo_de_carta}   ${
                    maindiez.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maindiez.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maindiez.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maindiez.tipo_de_carta === "Link" ? "/ Efecto" :  maindiez.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maindiez.materiales}</span>
                <span className="span_info">{maindiez.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maindiez.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maindiez.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maindiez.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maindiez.atk}  ${
                    maindiez.tipo_de_carta === "Link"
                      ? "LINK - " + maindiez.nivel_rango_link
                      : "DEF/ " + maindiez.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maindiez.caja}</span>

                <span className="span_info">{maindiez.estructura}</span>
               
               <span className="span_info">{maindiez.selection_box}</span>
               
               <span className="span_info">{maindiez.lote}</span>
               
               <span className="span_info">{maindiez.adicional}</span>
          </div>
        </div>
  )
})

//Mainonce
const Tooltipsmainonce = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainonce.nombre}</span><img
                  src={AtributoMainonce}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainonce.atributo} </span>
                <img
                  src={
                    mainonce.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainonce.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainonce.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainonce.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainonce.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainonce.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainonce.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainonce.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainonce.nivel_rango_link || mainonce.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainonce.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainonce.escala === 0 ? '' : mainonce.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainonce}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainonce.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainonce.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainonce.tipo} / ${mainonce.tipo_de_carta}   ${
                    mainonce.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainonce.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainonce.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainonce.tipo_de_carta === "Link" ? "/ Efecto" :  mainonce.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainonce.materiales}</span>
                <span className="span_info">{mainonce.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainonce.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainonce.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainonce.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainonce.atk}  ${
                    mainonce.tipo_de_carta === "Link"
                      ? "LINK - " + mainonce.nivel_rango_link
                      : "DEF/ " + mainonce.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainonce.caja}</span>

                <span className="span_info">{mainonce.estructura}</span>
               
               <span className="span_info">{mainonce.selection_box}</span>
               
               <span className="span_info">{mainonce.lote}</span>
               
               <span className="span_info">{mainonce.adicional}</span>
          </div>
        </div>
  )
})

//Maindoce
const Tooltipsmaindoce = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maindoce.nombre}</span><img
                  src={AtributoMaindoce}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maindoce.atributo} </span>
                <img
                  src={
                    maindoce.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maindoce.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maindoce.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindoce.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maindoce.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maindoce.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindoce.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maindoce.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maindoce.nivel_rango_link || maindoce.nivel_rango
                    : ""
                }   `}</span>
                <img src={maindoce.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{maindoce.escala === 0 ? '' : maindoce.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaindoce}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maindoce.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maindoce.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maindoce.tipo} / ${maindoce.tipo_de_carta}   ${
                    maindoce.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maindoce.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maindoce.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maindoce.tipo_de_carta === "Link" ? "/ Efecto" :  maindoce.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maindoce.materiales}</span>
                <span className="span_info">{maindoce.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maindoce.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maindoce.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maindoce.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maindoce.atk}  ${
                    maindoce.tipo_de_carta === "Link"
                      ? "LINK - " + maindoce.nivel_rango_link
                      : "DEF/ " + maindoce.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maindoce.caja}</span>

                <span className="span_info">{maindoce.estructura}</span>
               
               <span className="span_info">{maindoce.selection_box}</span>
               
               <span className="span_info">{maindoce.lote}</span>
               
               <span className="span_info">{maindoce.adicional}</span>
          </div>
        </div>
  )
})

//Maintrece
const Tooltipsmaintrece = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maintrece.nombre}</span><img
                  src={AtributoMaintrece}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maintrece.atributo} </span>
                <img
                  src={
                    maintrece.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maintrece.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maintrece.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maintrece.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maintrece.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maintrece.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maintrece.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maintrece.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maintrece.nivel_rango_link || maintrece.nivel_rango
                    : ""
                }   `}</span>
                <img src={maintrece.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{maintrece.escala === 0 ? '' : maintrece.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaintrece}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maintrece.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maintrece.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maintrece.tipo} / ${maintrece.tipo_de_carta}   ${
                    maintrece.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maintrece.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maintrece.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maintrece.tipo_de_carta === "Link" ? "/ Efecto" :  maintrece.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maintrece.materiales}</span>
                <span className="span_info">{maintrece.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maintrece.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maintrece.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maintrece.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maintrece.atk}  ${
                    maintrece.tipo_de_carta === "Link"
                      ? "LINK - " + maintrece.nivel_rango_link
                      : "DEF/ " + maintrece.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maintrece.caja}</span>

                <span className="span_info">{maintrece.estructura}</span>
               
               <span className="span_info">{maintrece.selection_box}</span>
               
               <span className="span_info">{maintrece.lote}</span>
               
               <span className="span_info">{maintrece.adicional}</span>
          </div>
        </div>
  )
})

//Maincatorce
const Tooltipsmaincatorce = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maincatorce.nombre}</span><img
                  src={AtributoMaincatorce}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maincatorce.atributo} </span>
                <img
                  src={
                    maincatorce.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maincatorce.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maincatorce.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maincatorce.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maincatorce.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maincatorce.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maincatorce.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maincatorce.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maincatorce.nivel_rango_link || maincatorce.nivel_rango
                    : ""
                }   `}</span>
                <img src={maincatorce.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{maincatorce.escala === 0 ? '' : maincatorce.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaincatorce}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maincatorce.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maincatorce.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maincatorce.tipo} / ${maincatorce.tipo_de_carta}   ${
                    maincatorce.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maincatorce.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maincatorce.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maincatorce.tipo_de_carta === "Link" ? "/ Efecto" :  maincatorce.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maincatorce.materiales}</span>
                <span className="span_info">{maincatorce.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maincatorce.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maincatorce.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maincatorce.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maincatorce.atk}  ${
                    maincatorce.tipo_de_carta === "Link"
                      ? "LINK - " + maincatorce.nivel_rango_link
                      : "DEF/ " + maincatorce.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maincatorce.caja}</span>

                <span className="span_info">{maincatorce.estructura}</span>
               
               <span className="span_info">{maincatorce.selection_box}</span>
               
               <span className="span_info">{maincatorce.lote}</span>
               
               <span className="span_info">{maincatorce.adicional}</span>
          </div>
        </div>
  )
})

//Mainquince
const Tooltipsmainquince = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainquince.nombre}</span><img
                  src={AtributoMainquince}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainquince.atributo} </span>
                <img
                  src={
                    mainquince.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainquince.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainquince.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainquince.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainquince.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainquince.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainquince.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainquince.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainquince.nivel_rango_link || mainquince.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainquince.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainquince.escala === 0 ? '' : mainquince.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainquince}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainquince.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainquince.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainquince.tipo} / ${mainquince.tipo_de_carta}   ${
                    mainquince.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainquince.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainquince.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainquince.tipo_de_carta === "Link" ? "/ Efecto" :  mainquince.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainquince.materiales}</span>
                <span className="span_info">{mainquince.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainquince.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainquince.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainquince.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainquince.atk}  ${
                    mainquince.tipo_de_carta === "Link"
                      ? "LINK - " + mainquince.nivel_rango_link
                      : "DEF/ " + mainquince.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainquince.caja}</span>

                <span className="span_info">{mainquince.estructura}</span>
               
               <span className="span_info">{mainquince.selection_box}</span>
               
               <span className="span_info">{mainquince.lote}</span>
               
               <span className="span_info">{mainquince.adicional}</span>
          </div>
        </div>
  )
})

//Maindieciseis
const Tooltipsmaindieciseis = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maindieciseis.nombre}</span><img
                  src={AtributoMaindieciseis}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maindieciseis.atributo} </span>
                <img
                  src={
                    maindieciseis.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maindieciseis.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maindieciseis.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindieciseis.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maindieciseis.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maindieciseis.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindieciseis.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maindieciseis.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maindieciseis.nivel_rango_link || maindieciseis.nivel_rango
                    : ""
                }   `}</span>
                <img src={maindieciseis.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{maindieciseis.escala === 0 ? '' : maindieciseis.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaindieciseis}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maindieciseis.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maindieciseis.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maindieciseis.tipo} / ${maindieciseis.tipo_de_carta}   ${
                    maindieciseis.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainquince.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainquince.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainquince.tipo_de_carta === "Link" ? "/ Efecto" :  mainquince.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainquince.materiales}</span>
                <span className="span_info">{mainquince.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainquince.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainquince.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainquince.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainquince.atk}  ${
                    mainquince.tipo_de_carta === "Link"
                      ? "LINK - " + mainquince.nivel_rango_link
                      : "DEF/ " + mainquince.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainquince.caja}</span>

                <span className="span_info">{mainquince.estructura}</span>
               
               <span className="span_info">{mainquince.selection_box}</span>
               
               <span className="span_info">{mainquince.lote}</span>
               
               <span className="span_info">{mainquince.adicional}</span>
          </div>
        </div>
  )
})

//Maindiecisiete
const Tooltipsmaindiecisiete = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maindiecisiete.nombre}</span><img
                  src={AtributoMaindiecisiete}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maindiecisiete.atributo} </span>
                <img
                  src={
                    maindiecisiete.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maindiecisiete.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maindiecisiete.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindiecisiete.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maindiecisiete.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maindiecisiete.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindiecisiete.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maindiecisiete.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maindiecisiete.nivel_rango_link || maindiecisiete.nivel_rango
                    : ""
                }   `}</span>
                <img src={maindiecisiete.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{maindiecisiete.escala === 0 ? '' : maindiecisiete.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaindiecisiete}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maindiecisiete.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maindiecisiete.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maindiecisiete.tipo} / ${maindiecisiete.tipo_de_carta}   ${
                    maindiecisiete.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maindiecisiete.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maindiecisiete.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maindiecisiete.tipo_de_carta === "Link" ? "/ Efecto" :  maindiecisiete.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maindiecisiete.materiales}</span>
                <span className="span_info">{maindiecisiete.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maindiecisiete.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maindiecisiete.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maindiecisiete.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maindiecisiete.atk}  ${
                    maindiecisiete.tipo_de_carta === "Link"
                      ? "LINK - " + maindiecisiete.nivel_rango_link
                      : "DEF/ " + maindiecisiete.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maindiecisiete.caja}</span>

                <span className="span_info">{maindiecisiete.estructura}</span>
               
               <span className="span_info">{maindiecisiete.selection_box}</span>
               
               <span className="span_info">{maindiecisiete.lote}</span>
               
               <span className="span_info">{maindiecisiete.adicional}</span>
          </div>
        </div>
  )
})

//Maindieciocho
const Tooltipsmaindieciocho = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maindieciocho.nombre}</span><img
                  src={AtributoMaindieciocho}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maindieciocho.atributo} </span>
                <img
                  src={
                    maindieciocho.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maindieciocho.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maindieciocho.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindieciocho.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maindieciocho.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maindieciocho.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindieciocho.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maindieciocho.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maindieciocho.nivel_rango_link || maindieciocho.nivel_rango
                    : ""
                }   `}</span>
                <img src={maindieciocho.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{maindieciocho.escala === 0 ? '' : maindieciocho.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaindieciocho}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maindieciocho.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maindieciocho.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maindieciocho.tipo} / ${maindieciocho.tipo_de_carta}   ${
                    maindieciocho.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maindieciocho.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maindieciocho.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maindieciocho.tipo_de_carta === "Link" ? "/ Efecto" :  maindieciocho.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maindieciocho.materiales}</span>
                <span className="span_info">{maindieciocho.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maindieciocho.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maindieciocho.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maindieciocho.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maindieciocho.atk}  ${
                    maindieciocho.tipo_de_carta === "Link"
                      ? "LINK - " + maindieciocho.nivel_rango_link
                      : "DEF/ " + maindieciocho.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maindieciocho.caja}</span>

                <span className="span_info">{maindieciocho.estructura}</span>
               
               <span className="span_info">{maindieciocho.selection_box}</span>
               
               <span className="span_info">{maindieciocho.lote}</span>
               
               <span className="span_info">{maindieciocho.adicional}</span>
          </div>
        </div>
  )
})

//Maindiecinueve
const Tooltipsmaindiecinueve = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maindiecinueve.nombre}</span><img
                  src={AtributoMaindiecinueve}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maindiecinueve.atributo} </span>
                <img
                  src={
                    maindiecinueve.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maindiecinueve.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maindiecinueve.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindiecinueve.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maindiecinueve.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maindiecinueve.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maindiecinueve.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maindiecinueve.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maindiecinueve.nivel_rango_link || maindiecinueve.nivel_rango
                    : ""
                }   `}</span>
                <img src={maindiecinueve.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{maindiecinueve.escala === 0 ? '' : maindiecinueve.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaindiecinueve}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maindiecinueve.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maindiecinueve.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maindiecinueve.tipo} / ${maindiecinueve.tipo_de_carta}   ${
                    maindiecinueve.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maindiecinueve.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maindiecinueve.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maindiecinueve.tipo_de_carta === "Link" ? "/ Efecto" :  maindiecinueve.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maindiecinueve.materiales}</span>
                <span className="span_info">{maindiecinueve.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maindiecinueve.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maindiecinueve.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maindiecinueve.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maindiecinueve.atk}  ${
                    maindiecinueve.tipo_de_carta === "Link"
                      ? "LINK - " + maindiecinueve.nivel_rango_link
                      : "DEF/ " + maindiecinueve.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maindiecinueve.caja}</span>

                <span className="span_info">{maindiecinueve.estructura}</span>
               
               <span className="span_info">{maindiecinueve.selection_box}</span>
               
               <span className="span_info">{maindiecinueve.lote}</span>
               
               <span className="span_info">{maindiecinueve.adicional}</span>
          </div>
        </div>
  )
})

//Mainveinte 20
const Tooltipsmainveinte = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainveinte.nombre}</span><img
                  src={AtributoMainveinte}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainveinte.atributo} </span>
                <img
                  src={
                    mainveinte.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainveinte.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainveinte.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveinte.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainveinte.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainveinte.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveinte.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainveinte.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainveinte.nivel_rango_link || mainveinte.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainveinte.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainveinte.escala === 0 ? '' : mainveinte.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainveinte}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainveinte.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainveinte.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainveinte.tipo} / ${mainveinte.tipo_de_carta}   ${
                    mainveinte.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainveinte.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainveinte.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainveinte.tipo_de_carta === "Link" ? "/ Efecto" :  mainveinte.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainveinte.materiales}</span>
                <span className="span_info">{mainveinte.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainveinte.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainveinte.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainveinte.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainveinte.atk}  ${
                    mainveinte.tipo_de_carta === "Link"
                      ? "LINK - " + mainveinte.nivel_rango_link
                      : "DEF/ " + mainveinte.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainveinte.caja}</span>

                <span className="span_info">{mainveinte.estructura}</span>
               
               <span className="span_info">{mainveinte.selection_box}</span>
               
               <span className="span_info">{mainveinte.lote}</span>
               
               <span className="span_info">{mainveinte.adicional}</span>
          </div>
        </div>
  )
})

//Mainveintiuno 21
const Tooltipsmainveintiuno = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainveintiuno.nombre}</span><img
                  src={AtributoMainveintiuno}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainveintiuno.atributo} </span>
                <img
                  src={
                    mainveintiuno.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainveintiuno.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainveintiuno.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintiuno.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainveintiuno.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainveintiuno.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintiuno.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainveintiuno.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainveintiuno.nivel_rango_link || mainveintiuno.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainveintiuno.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainveintiuno.escala === 0 ? '' : mainveintiuno.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainveintiuno}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainveintiuno.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainveintiuno.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainveintiuno.tipo} / ${mainveintiuno.tipo_de_carta}   ${
                    mainveintiuno.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainveintiuno.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainveintiuno.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainveintiuno.tipo_de_carta === "Link" ? "/ Efecto" :  mainveintiuno.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainveintiuno.materiales}</span>
                <span className="span_info">{mainveintiuno.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainveintiuno.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainveintiuno.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainveintiuno.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainveintiuno.atk}  ${
                    mainveintiuno.tipo_de_carta === "Link"
                      ? "LINK - " + mainveintiuno.nivel_rango_link
                      : "DEF/ " + mainveintiuno.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainveintiuno.caja}</span>

                <span className="span_info">{mainveintiuno.estructura}</span>
               
               <span className="span_info">{mainveintiuno.selection_box}</span>
               
               <span className="span_info">{mainveintiuno.lote}</span>
               
               <span className="span_info">{mainveintiuno.adicional}</span>
          </div>
        </div>
  )
})

//Mainveintidos 22
const Tooltipsmainveintidos = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainveintidos.nombre}</span><img
                  src={AtributoMainveintidos}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainveintidos.atributo} </span>
                <img
                  src={
                    mainveintidos.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainveintidos.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainveintidos.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintidos.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainveintidos.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainveintidos.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintidos.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainveintidos.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainveintidos.nivel_rango_link || mainveintidos.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainveintidos.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainveintidos.escala === 0 ? '' : mainveintidos.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainveintidos}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainveintidos.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainveintidos.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainveintidos.tipo} / ${mainveintidos.tipo_de_carta}   ${
                    mainveintidos.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainveintidos.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainveintidos.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainveintidos.tipo_de_carta === "Link" ? "/ Efecto" :  mainveintidos.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainveintidos.materiales}</span>
                <span className="span_info">{mainveintidos.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainveintidos.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainveintidos.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainveintidos.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainveintidos.atk}  ${
                    mainveintidos.tipo_de_carta === "Link"
                      ? "LINK - " + mainveintidos.nivel_rango_link
                      : "DEF/ " + mainveintidos.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainveintidos.caja}</span>

                <span className="span_info">{mainveintidos.estructura}</span>
               
               <span className="span_info">{mainveintidos.selection_box}</span>
               
               <span className="span_info">{mainveintidos.lote}</span>
               
               <span className="span_info">{mainveintidos.adicional}</span>
          </div>
        </div>
  )
})

//23
const Tooltipsmainveintitres = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainveintitres.nombre}</span><img
                  src={AtributoMainveintitres}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainveintitres.atributo} </span>
                <img
                  src={
                    mainveintitres.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainveintitres.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainveintitres.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintitres.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainveintitres.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainveintitres.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintitres.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainveintitres.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainveintitres.nivel_rango_link || mainveintitres.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainveintitres.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainveintitres.escala === 0 ? '' : mainveintitres.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainveintitres}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainveintitres.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainveintitres.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainveintitres.tipo} / ${mainveintitres.tipo_de_carta}   ${
                    mainveintitres.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainveintitres.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainveintitres.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainveintitres.tipo_de_carta === "Link" ? "/ Efecto" :  mainveintitres.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainveintitres.materiales}</span>
                <span className="span_info">{mainveintitres.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainveintitres.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainveintitres.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainveintitres.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainveintitres.atk}  ${
                    mainveintitres.tipo_de_carta === "Link"
                      ? "LINK - " + mainveintitres.nivel_rango_link
                      : "DEF/ " + mainveintitres.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainveintitres.caja}</span>

                <span className="span_info">{mainveintitres.estructura}</span>
               
               <span className="span_info">{mainveintitres.selection_box}</span>
               
               <span className="span_info">{mainveintitres.lote}</span>
               
               <span className="span_info">{mainveintitres.adicional}</span>
          </div>
        </div>
  )
})

//24
const Tooltipsmainveinticuatro = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainveinticuatro.nombre}</span><img
                  src={AtributoMainveinticuatro}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainveinticuatro.atributo} </span>
                <img
                  src={
                    mainveinticuatro.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainveinticuatro.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainveinticuatro.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveinticuatro.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainveinticuatro.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainveinticuatro.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveinticuatro.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainveinticuatro.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainveinticuatro.nivel_rango_link || mainveinticuatro.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainveinticuatro.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainveinticuatro.escala === 0 ? '' : mainveinticuatro.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainveinticuatro}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainveinticuatro.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainveinticuatro.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainveinticuatro.tipo} / ${mainveinticuatro.tipo_de_carta}   ${
                    mainveinticuatro.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainveinticuatro.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainveinticuatro.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainveinticuatro.tipo_de_carta === "Link" ? "/ Efecto" :  mainveinticuatro.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainveinticuatro.materiales}</span>
                <span className="span_info">{mainveinticuatro.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainveinticuatro.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainveinticuatro.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainveinticuatro.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainveinticuatro.atk}  ${
                    mainveinticuatro.tipo_de_carta === "Link"
                      ? "LINK - " + mainveinticuatro.nivel_rango_link
                      : "DEF/ " + mainveinticuatro.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainveinticuatro.caja}</span>

                <span className="span_info">{mainveinticuatro.estructura}</span>
               
               <span className="span_info">{mainveinticuatro.selection_box}</span>
               
               <span className="span_info">{mainveinticuatro.lote}</span>
               
               <span className="span_info">{mainveinticuatro.adicional}</span>
          </div>
        </div>
  )
})

//25
const Tooltipsmainveinticinco = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainveinticinco.nombre}</span><img
                  src={AtributoMainveinticinco}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainveinticinco.atributo} </span>
                <img
                  src={
                    mainveinticinco.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainveinticinco.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainveinticinco.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveinticinco.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainveinticinco.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainveinticinco.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveinticinco.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainveinticinco.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainveinticinco.nivel_rango_link || mainveinticinco.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainveinticinco.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainveinticinco.escala === 0 ? '' : mainveinticinco.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainveinticinco}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainveinticinco.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainveinticinco.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainveinticinco.tipo} / ${mainveinticinco.tipo_de_carta}   ${
                    mainveinticinco.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainveinticinco.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainveinticinco.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainveinticinco.tipo_de_carta === "Link" ? "/ Efecto" :  mainveinticinco.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainveinticinco.materiales}</span>
                <span className="span_info">{mainveinticinco.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainveinticinco.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainveinticinco.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainveinticinco.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainveinticinco.atk}  ${
                    mainveinticinco.tipo_de_carta === "Link"
                      ? "LINK - " + mainveinticinco.nivel_rango_link
                      : "DEF/ " + mainveinticinco.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainveinticinco.caja}</span>

                <span className="span_info">{mainveinticinco.estructura}</span>
               
               <span className="span_info">{mainveinticinco.selection_box}</span>
               
               <span className="span_info">{mainveinticinco.lote}</span>
               
               <span className="span_info">{mainveinticinco.adicional}</span>
          </div>
        </div>
  )
})

//26
const Tooltipsmainveintiseis = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainveintiseis.nombre}</span><img
                  src={AtributoMainveintiseis}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainveintiseis.atributo} </span>
                <img
                  src={
                    mainveintiseis.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainveintiseis.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainveintiseis.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintiseis.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainveintiseis.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainveintiseis.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintiseis.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainveintiseis.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainveintiseis.nivel_rango_link || mainveintiseis.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainveintiseis.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainveintiseis.escala === 0 ? '' : mainveintiseis.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainveintiseis}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainveintiseis.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainveintiseis.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainveintiseis.tipo} / ${mainveintiseis.tipo_de_carta}   ${
                    mainveintiseis.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainveintiseis.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainveintiseis.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainveintiseis.tipo_de_carta === "Link" ? "/ Efecto" :  mainveintiseis.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainveintiseis.materiales}</span>
                <span className="span_info">{mainveintiseis.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainveintiseis.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainveintiseis.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainveintiseis.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainveintiseis.atk}  ${
                    mainveintiseis.tipo_de_carta === "Link"
                      ? "LINK - " + mainveintiseis.nivel_rango_link
                      : "DEF/ " + mainveintiseis.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainveintiseis.caja}</span>

                <span className="span_info">{mainveintiseis.estructura}</span>
               
               <span className="span_info">{mainveintiseis.selection_box}</span>
               
               <span className="span_info">{mainveintiseis.lote}</span>
               
               <span className="span_info">{mainveintiseis.adicional}</span>
          </div>
        </div>
  )
})

//27
const Tooltipsmainveintisiete = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainveintisiete.nombre}</span><img
                  src={AtributoMainveintisiete}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainveintisiete.atributo} </span>
                <img
                  src={
                    mainveintisiete.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainveintisiete.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainveintisiete.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintisiete.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainveintisiete.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainveintisiete.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintisiete.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainveintisiete.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainveintisiete.nivel_rango_link || mainveintisiete.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainveintisiete.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainveintisiete.escala === 0 ? '' : mainveintisiete.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainveintisiete}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainveintisiete.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainveintisiete.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainveintisiete.tipo} / ${mainveintisiete.tipo_de_carta}   ${
                    mainveintisiete.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainveintisiete.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainveintisiete.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainveintisiete.tipo_de_carta === "Link" ? "/ Efecto" :  mainveintisiete.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainveintisiete.materiales}</span>
                <span className="span_info">{mainveintisiete.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainveintisiete.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainveintisiete.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainveintisiete.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainveintisiete.atk}  ${
                    mainveintisiete.tipo_de_carta === "Link"
                      ? "LINK - " + mainveintisiete.nivel_rango_link
                      : "DEF/ " + mainveintisiete.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainveintisiete.caja}</span>

                <span className="span_info">{mainveintisiete.estructura}</span>
               
               <span className="span_info">{mainveintisiete.selection_box}</span>
               
               <span className="span_info">{mainveintisiete.lote}</span>
               
               <span className="span_info">{mainveintisiete.adicional}</span>
          </div>
        </div>
  )
})

//28
const Tooltipsmainveintiocho = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainveintiocho.nombre}</span><img
                  src={AtributoMainveintiocho}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainveintiocho.atributo} </span>
                <img
                  src={
                    mainveintiocho.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainveintiocho.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainveintiocho.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintiocho.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainveintiocho.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainveintiocho.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintiocho.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainveintiocho.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainveintiocho.nivel_rango_link || mainveintiocho.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainveintiocho.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainveintiocho.escala === 0 ? '' : mainveintiocho.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainveintiocho}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainveintiocho.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainveintiocho.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainveintiocho.tipo} / ${mainveintiocho.tipo_de_carta}   ${
                    mainveintiocho.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainveintiocho.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainveintiocho.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainveintiocho.tipo_de_carta === "Link" ? "/ Efecto" :  mainveintiocho.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainveintiocho.materiales}</span>
                <span className="span_info">{mainveintiocho.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainveintiocho.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainveintiocho.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainveintiocho.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainveintiocho.atk}  ${
                    mainveintiocho.tipo_de_carta === "Link"
                      ? "LINK - " + mainveintiocho.nivel_rango_link
                      : "DEF/ " + mainveintiocho.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainveintiocho.caja}</span>

                <span className="span_info">{mainveintiocho.estructura}</span>
               
               <span className="span_info">{mainveintiocho.selection_box}</span>
               
               <span className="span_info">{mainveintiocho.lote}</span>
               
               <span className="span_info">{mainveintiocho.adicional}</span>
          </div>
        </div>
  )
})

//29
const Tooltipsmainveintinueve = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{mainveintinueve.nombre}</span><img
                  src={AtributoMainveintinueve}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {mainveintinueve.atributo} </span>
                <img
                  src={
                    mainveintinueve.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    mainveintinueve.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : mainveintinueve.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintinueve.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    mainveintinueve.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : mainveintinueve.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : mainveintinueve.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  mainveintinueve.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? mainveintinueve.nivel_rango_link || mainveintinueve.nivel_rango
                    : ""
                }   `}</span>
                <img src={mainveintinueve.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{mainveintinueve.escala === 0 ? '' : mainveintinueve.escala}</span>
                <img
                  src={TipodeMagicaTrampaMainveintinueve}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{mainveintinueve.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={mainveintinueve.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${mainveintinueve.tipo} / ${mainveintinueve.tipo_de_carta}   ${
                    mainveintinueve.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${mainveintinueve.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    mainveintinueve.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    mainveintinueve.tipo_de_carta === "Link" ? "/ Efecto" :  mainveintinueve.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{mainveintinueve.materiales}</span>
                <span className="span_info">{mainveintinueve.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{mainveintinueve.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    mainveintinueve.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${mainveintinueve.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${mainveintinueve.atk}  ${
                    mainveintinueve.tipo_de_carta === "Link"
                      ? "LINK - " + mainveintinueve.nivel_rango_link
                      : "DEF/ " + mainveintinueve.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{mainveintinueve.caja}</span>

                <span className="span_info">{mainveintinueve.estructura}</span>
               
               <span className="span_info">{mainveintinueve.selection_box}</span>
               
               <span className="span_info">{mainveintinueve.lote}</span>
               
               <span className="span_info">{mainveintinueve.adicional}</span>
          </div>
        </div>
  )
})

//30
const Tooltipsmaintreinta = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{maintreinta.nombre}</span><img
                  src={AtributoMaintreinta}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {maintreinta.atributo} </span>
                <img
                  src={
                    maintreinta.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    maintreinta.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : maintreinta.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maintreinta.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    maintreinta.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : maintreinta.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : maintreinta.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  maintreinta.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? maintreinta.nivel_rango_link || maintreinta.nivel_rango
                    : ""
                }   `}</span>
                <img src={maintreinta.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{maintreinta.escala === 0 ? '' : maintreinta.escala}</span>
                <img
                  src={TipodeMagicaTrampaMaintreinta}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{maintreinta.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={maintreinta.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${maintreinta.tipo} / ${maintreinta.tipo_de_carta}   ${
                    maintreinta.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${maintreinta.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    maintreinta.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    maintreinta.tipo_de_carta === "Link" ? "/ Efecto" :  maintreinta.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{maintreinta.materiales}</span>
                <span className="span_info">{maintreinta.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{maintreinta.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    maintreinta.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${maintreinta.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${maintreinta.atk}  ${
                    maintreinta.tipo_de_carta === "Link"
                      ? "LINK - " + maintreinta.nivel_rango_link
                      : "DEF/ " + maintreinta.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{maintreinta.caja}</span>

                <span className="span_info">{maintreinta.estructura}</span>
               
               <span className="span_info">{maintreinta.selection_box}</span>
               
               <span className="span_info">{maintreinta.lote}</span>
               
               <span className="span_info">{maintreinta.adicional}</span>
          </div>
        </div>
  )
})

//EXTRA DECK

// 1
const Tooltipsextrauno = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{extrauno.nombre}</span><img
                  src={AtributoExtrauno}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {extrauno.atributo} </span>
                <img
                  src={
                    extrauno.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    extrauno.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : extrauno.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extrauno.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    extrauno.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : extrauno.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extrauno.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  extrauno.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? extrauno.nivel_rango_link || extrauno.nivel_rango
                    : ""
                }   `}</span>
                <img src={extrauno.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{extrauno.escala === 0 ? '' : extrauno.escala}</span>
                <img
                  src={TipodeMagicaTrampaExtrauno}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{extrauno.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={extrauno.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${extrauno.tipo} / ${extrauno.tipo_de_carta}   ${
                    extrauno.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${extrauno.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    extrauno.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    extrauno.tipo_de_carta === "Link" ? "/ Efecto" :  extrauno.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{extrauno.materiales}</span>
                <span className="span_info">{extrauno.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{extrauno.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    extrauno.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${extrauno.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${extrauno.atk}  ${
                    extrauno.tipo_de_carta === "Link"
                      ? "LINK - " + extrauno.nivel_rango_link
                      : "DEF/ " + extrauno.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{extrauno.caja}</span>

                <span className="span_info">{extrauno.estructura}</span>
               
               <span className="span_info">{extrauno.selection_box}</span>
               
               <span className="span_info">{extrauno.lote}</span>
               
               <span className="span_info">{extrauno.adicional}</span>
          </div>
        </div>
  )
})

//2
const Tooltipsextrados = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{extrados.nombre}</span><img
                  src={AtributoExtrados}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {extrados.atributo} </span>
                <img
                  src={
                    extrados.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    extrados.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : extrados.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extrados.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    extrados.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : extrados.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extrados.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  extrados.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? extrados.nivel_rango_link || extrados.nivel_rango
                    : ""
                }   `}</span>
                <img src={extrados.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{extrados.escala === 0 ? '' : extrados.escala}</span>
                <img
                  src={TipodeMagicaTrampaExtrados}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{extrados.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={extrados.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${extrados.tipo} / ${extrados.tipo_de_carta}   ${
                    extrados.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${extrados.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    extrados.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    extrados.tipo_de_carta === "Link" ? "/ Efecto" :  extrados.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{extrados.materiales}</span>
                <span className="span_info">{extrados.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{extrados.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    extrados.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${extrados.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${extrados.atk}  ${
                    extrados.tipo_de_carta === "Link"
                      ? "LINK - " + extrados.nivel_rango_link
                      : "DEF/ " + extrados.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{extrados.caja}</span>

                <span className="span_info">{extrados.estructura}</span>
               
               <span className="span_info">{extrados.selection_box}</span>
               
               <span className="span_info">{extrados.lote}</span>
               
               <span className="span_info">{extrados.adicional}</span>
          </div>
        </div>
  )
})

//3
const Tooltipsextratres = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{extratres.nombre}</span><img
                  src={AtributoExtratres}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {extratres.atributo} </span>
                <img
                  src={
                    extratres.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    extratres.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : extratres.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extratres.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    extratres.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : extratres.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extratres.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  extratres.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? extratres.nivel_rango_link || extratres.nivel_rango
                    : ""
                }   `}</span>
                <img src={extratres.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{extratres.escala === 0 ? '' : extratres.escala}</span>
                <img
                  src={TipodeMagicaTrampaExtratres}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{extratres.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={extratres.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${extratres.tipo} / ${extratres.tipo_de_carta}   ${
                    extratres.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${extratres.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    extratres.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    extratres.tipo_de_carta === "Link" ? "/ Efecto" :  extratres.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{extratres.materiales}</span>
                <span className="span_info">{extratres.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{extratres.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    extratres.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${extratres.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${extratres.atk}  ${
                    extratres.tipo_de_carta === "Link"
                      ? "LINK - " + extratres.nivel_rango_link
                      : "DEF/ " + extratres.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{extratres.caja}</span>

                <span className="span_info">{extratres.estructura}</span>
               
               <span className="span_info">{extratres.selection_box}</span>
               
               <span className="span_info">{extratres.lote}</span>
               
               <span className="span_info">{extratres.adicional}</span>
          </div>
        </div>
  )
})

//4
const Tooltipsextracuatro = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{extracuatro.nombre}</span><img
                  src={AtributoExtracuatro}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {extracuatro.atributo} </span>
                <img
                  src={
                    extracuatro.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    extracuatro.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : extracuatro.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extracuatro.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    extracuatro.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : extracuatro.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extracuatro.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  extracuatro.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? extracuatro.nivel_rango_link || extracuatro.nivel_rango
                    : ""
                }   `}</span>
                <img src={extracuatro.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{extracuatro.escala === 0 ? '' : extracuatro.escala}</span>
                <img
                  src={TipodeMagicaTrampaExtracuatro}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{extracuatro.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={extracuatro.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${extracuatro.tipo} / ${extracuatro.tipo_de_carta}   ${
                    extracuatro.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${extracuatro.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    extracuatro.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    extracuatro.tipo_de_carta === "Link" ? "/ Efecto" :  extracuatro.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{extracuatro.materiales}</span>
                <span className="span_info">{extracuatro.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{extracuatro.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    extracuatro.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${extracuatro.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${extracuatro.atk}  ${
                    extracuatro.tipo_de_carta === "Link"
                      ? "LINK - " + extracuatro.nivel_rango_link
                      : "DEF/ " + extracuatro.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{extracuatro.caja}</span>

                <span className="span_info">{extracuatro.estructura}</span>
               
               <span className="span_info">{extracuatro.selection_box}</span>
               
               <span className="span_info">{extracuatro.lote}</span>
               
               <span className="span_info">{extracuatro.adicional}</span>
          </div>
        </div>
  )
})

//5
const Tooltipsextracinco = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{extracinco.nombre}</span><img
                  src={AtributoExtracinco}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {extracinco.atributo} </span>
                <img
                  src={
                    extracinco.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    extracinco.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : extracinco.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extracinco.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    extracinco.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : extracinco.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extracinco.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  extracinco.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? extracinco.nivel_rango_link || extracinco.nivel_rango
                    : ""
                }   `}</span>
                <img src={extracinco.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{extracinco.escala === 0 ? '' : extracinco.escala}</span>
                <img
                  src={TipodeMagicaTrampaExtracinco}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{extracinco.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={extracinco.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${extracinco.tipo} / ${extracinco.tipo_de_carta}   ${
                    extracinco.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${extracinco.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    extracinco.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    extracinco.tipo_de_carta === "Link" ? "/ Efecto" :  extracinco.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{extracinco.materiales}</span>
                <span className="span_info">{extracinco.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{extracinco.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    extracinco.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${extracinco.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${extracinco.atk}  ${
                    extracinco.tipo_de_carta === "Link"
                      ? "LINK - " + extracinco.nivel_rango_link
                      : "DEF/ " + extracinco.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{extracinco.caja}</span>

                <span className="span_info">{extracinco.estructura}</span>
               
               <span className="span_info">{extracinco.selection_box}</span>
               
               <span className="span_info">{extracinco.lote}</span>
               
               <span className="span_info">{extracinco.adicional}</span>
          </div>
        </div>
  )
})

//6
const Tooltipsextraseis = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{extraseis.nombre}</span><img
                  src={AtributoExtraseis}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {extraseis.atributo} </span>
                <img
                  src={
                    extraseis.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    extraseis.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : extraseis.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extraseis.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    extraseis.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : extraseis.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extraseis.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  extraseis.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? extraseis.nivel_rango_link || extraseis.nivel_rango
                    : ""
                }   `}</span>
                <img src={extraseis.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{extraseis.escala === 0 ? '' : extraseis.escala}</span>
                <img
                  src={TipodeMagicaTrampaExtraseis}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{extraseis.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={extraseis.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${extraseis.tipo} / ${extraseis.tipo_de_carta}   ${
                    extraseis.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${extraseis.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    extraseis.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    extraseis.tipo_de_carta === "Link" ? "/ Efecto" :  extraseis.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{extraseis.materiales}</span>
                <span className="span_info">{extraseis.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{extraseis.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    extraseis.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${extraseis.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${extraseis.atk}  ${
                    extraseis.tipo_de_carta === "Link"
                      ? "LINK - " + extraseis.nivel_rango_link
                      : "DEF/ " + extraseis.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{extraseis.caja}</span>

                <span className="span_info">{extraseis.estructura}</span>
               
               <span className="span_info">{extraseis.selection_box}</span>
               
               <span className="span_info">{extraseis.lote}</span>
               
               <span className="span_info">{extraseis.adicional}</span>
          </div>
        </div>
  )
})

//7
const Tooltipsextrasiete = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{extrasiete.nombre}</span><img
                  src={AtributoExtrasiete}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {extrasiete.atributo} </span>
                <img
                  src={
                    extrasiete.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    extrasiete.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : extrasiete.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extrasiete.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    extrasiete.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : extrasiete.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extrasiete.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  extrasiete.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? extrasiete.nivel_rango_link || extrasiete.nivel_rango
                    : ""
                }   `}</span>
                <img src={extrasiete.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{extrasiete.escala === 0 ? '' : extrasiete.escala}</span>
                <img
                  src={TipodeMagicaTrampaExtrasiete}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{extrasiete.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={extrasiete.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${extrasiete.tipo} / ${extrasiete.tipo_de_carta}   ${
                    extrasiete.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${extrasiete.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    extrasiete.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    extrasiete.tipo_de_carta === "Link" ? "/ Efecto" :  extrasiete.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{extrasiete.materiales}</span>
                <span className="span_info">{extrasiete.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{extrasiete.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    extrasiete.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${extrasiete.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${extrasiete.atk}  ${
                    extrasiete.tipo_de_carta === "Link"
                      ? "LINK - " + extrasiete.nivel_rango_link
                      : "DEF/ " + extrasiete.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{extrasiete.caja}</span>

                <span className="span_info">{extrasiete.estructura}</span>
               
               <span className="span_info">{extrasiete.selection_box}</span>
               
               <span className="span_info">{extrasiete.lote}</span>
               
               <span className="span_info">{extrasiete.adicional}</span>
          </div>
        </div>
  )
})

//8
const Tooltipsextraocho = (()=>{
  return(
<div className="grid-tooltips">
          <div className="grid-tooltips-nombre-descripcion" ><span className="nombre-carta-tooltip" >{extraocho.nombre}</span><img
                  src={AtributoExtraocho}
                  className="atributo_tooltips"
                ></img>{" "}
                <span className="atributo-tooltip" > {extraocho.atributo} </span>
                <img
                  src={
                    extraocho.tipo_de_carta === "Xyz"
                      ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp"
                      : "https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp"
                  }
                  className={
                    extraocho.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : extraocho.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extraocho.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : "nivel_tooltips"
                  }
                ></img>{" "}
                <span
                  className={
                    extraocho.tipo_de_carta === "Link"
                      ? "ocultarinfo"
                      : extraocho.atributo === "TRAMPA"
                      ? "ocultarinfo"
                      : extraocho.atributo === "M??GICA"
                      ? "ocultarinfo"
                      : "data-nivel-tooltip"
                  }
                >{`${
                  extraocho.nivel_rango_link == 1 ||
                  2 ||
                  3 ||
                  4 ||
                  5 ||
                  6 ||
                  7 ||
                  8 ||
                  9 ||
                  10 ||
                  11 ||
                  12
                    ? extraocho.nivel_rango_link || extraocho.nivel_rango
                    : ""
                }   `}</span>
                <img src={extraocho.tipo_de_carta === 'P??ndulo' ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1666163466/iconos%20dlp/escalapendulo_vvabsb.webp": '' }  className='pendulo_tooltips' ></img> <span className="escala_tooltips">{extraocho.escala === 0 ? '' : extraocho.escala}</span>
                <img
                  src={TipodeMagicaTrampaExtraocho}
                  className="nivel_rareza_tooltips"
                ></img>{" "}
                <span className="tipo_magica_trampa_tooltip">{extraocho.tipo_magica_trampa}</span>
                <br />
                <br />
                <span
                  className={extraocho.tipo === "" ? "ocultarinfo" : "span_info"}
                >
                  {" "}
                  [{" "}
                  {`${extraocho.tipo} / ${extraocho.tipo_de_carta}   ${
                    extraocho.tipo_de_carta === "Sincron??a" ? "/ Efecto" : ""
                  }  ${extraocho.tipo_de_carta === "Fusion" ? " / Efecto" : ""} ${
                    extraocho.tipo_de_carta == "Xyz" ? "/ Efecto" : ""
                  } ${
                    extraocho.tipo_de_carta === "Link" ? "/ Efecto" :  extraocho.tipo_de_carta === 'P??ndulo' ? "/ Efecto" : ""
                  }  `}{" "}
                  ]{" "}
                </span>
                <br />
                <span>{extraocho.materiales}</span>
                <span className="span_info">{extraocho.descripcion}</span>
                <br />
                <br />
                <span className="span_info">{extraocho.efecto_pendulo}</span>
                <br />
                <span
                  className={`${
                    extraocho.atk == 0 ? "ocultarinfo" : "span_info"
                  }  ${extraocho.atk == null ? "ocultarinfo" : "span_info"}  `}
                >
                  {" "}
                  {` ATK/ ${extraocho.atk}  ${
                    extraocho.tipo_de_carta === "Link"
                      ? "LINK - " + extraocho.nivel_rango_link
                      : "DEF/ " + extraocho.def
                  }   `}{" "}
                </span>
                <br />
               <span className="span_info">??C??mo obtener?</span>
                <br />
                <span className="span_info">{extraocho.caja}</span>

                <span className="span_info">{extraocho.estructura}</span>
               
               <span className="span_info">{extraocho.selection_box}</span>
               
               <span className="span_info">{extraocho.lote}</span>
               
               <span className="span_info">{extraocho.adicional}</span>
          </div>
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
//const navigate = useNavigate()

// const divtreinta = useState (decktreinta)

  return (
    <div className='' >
      <Header />
      <div className='box-grid container'>
        
       <button className='btn btn-primary button-grid' onClick={() => router.back()} >Atr??s</button>
        <h1>{deckuno.arquetipo}</h1>
        <h2>{deckuno.top}</h2>
        <div>
   {/*  <a href='#'>  <img src='https://res.cloudinary.com/dqofcbeaq/image/upload/v1666132178/iconos%20dlp/act-compdk_bdkyzn.png' className='compartirdeck' ></img> </a> */} 
        </div>
        <div className='gridhabilidad' >
          <h3>{deckuno.jugador}</h3>
        <span className='habilidadtexto'> <img src='https://res.cloudinary.com/dqofcbeaq/image/upload/v1665971318/iconos%20dlp/descarga_5_s7lpmt.webp' className='spanhabilidad' /> {deckuno.habilidad}</span>
        </div>
        {/* DEL 1-10   */}
        <div className='deck-grid'   >
         <div className='container-item item1'><img src={Rarezauno}  className='rareza'  ></img><img src={Limitacionuno}  className='limitacion'  ></img> <Link  href={`/cartas/${mainuno._id}/${mainuno.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainuno />}><div><img src={cartauno.secure_url} className='cartatop2 item1' alt={mainuno.nombre} ></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item2' ><img src={Rarezados}  className='rareza'  ></img><img src={Limitaciondos}  className='limitacion'  ></img><Link  href={`/cartas/${maindos._id}/${maindos.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaindos />}><div><img src={cartados.secure_url} className='cartatop2' alt={maindos.nombre}></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item3' ><img src={Rarezatres}  className='rareza'  ></img><img src={Limitaciontres}  className='limitacion'  ></img> <Link  href={`/cartas/${maintres._id}/${maintres.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaintres />}><div><img src={cartatres.secure_url} className='cartatop2' alt={maintres.nombre}></img></div></Tooltipsdl></a></Link> </div>
          <div className='container-item item4'><img src={Rarezacuatro}  className='rareza' ></img><img src={Limitacioncuatro}  className='limitacion'  ></img><Link  href={`/cartas/${maincuatro._id}/${maincuatro.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaincuatro />}><div><img src={cartacuatro.secure_url} className='cartatop2' alt={maincuatro.nombre}  ></img></div></Tooltipsdl></a></Link> </div>
          <div className='container-item item5' ><img src={Rarezacinco}  className='rareza'  ></img><img src={Limitacioncinco}  className='limitacion'  ></img><Link  href={`/cartas/${maincinco._id}/${maincinco.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaincinco />}><div><img src={cartacinco.secure_url} className='cartatop2' alt={maincinco.nombre}   ></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item6' ><img src={Rarezaseis}  className='rareza'  ></img><img src={Limitacionseis}  className='limitacion'  ></img><Link  href={`/cartas/${mainseis._id}/${mainseis.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainseis />}><div><img src={cartaseis.secure_url} className='cartatop2' alt={mainseis.nombre}  ></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item7' ><img src={Rarezasiete}  className='rareza'  ></img><img src={Limitacionsiete}  className='limitacion'  ></img><Link  href={`/cartas/${mainsiete._id}/${mainsiete.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainsiete />}><div><img src={cartasiete.secure_url} className='cartatop2' alt={mainsiete.nombre}   ></img></div></Tooltipsdl></a></Link> </div>
          <div className='container-item item8' ><img src={Rarezaocho}  className='rareza'  ></img><img src={Limitacionocho}  className='limitacion'  ></img><Link  href={`/cartas/${mainocho._id}/${mainocho.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainocho />}><div><img src={cartaocho.secure_url} className='cartatop2' alt={mainocho.nombre}   ></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item9' ><img src={Rarezanueve}  className='rareza'  ></img><img src={Limitacionnueve}  className='limitacion'  ></img><Link  href={`/cartas/${mainnueve._id}/${mainnueve.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainnueve />}><div><img src={cartanueve.secure_url} className='cartatop2' alt={mainnueve.nombre}   ></img></div></Tooltipsdl></a></Link> </div>
          <div className='container-item item10' ><img src={Rarezadiez}  className='rareza' ></img><img src={Limitaciondiez}  className='limitacion'  ></img><Link  href={`/cartas/${maindiez._id}/${maindiez.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaindiez />}><div><img src={cartadiez.secure_url} className='cartatop2' alt={maindiez.nombre}   ></img></div></Tooltipsdl></a></Link></div>


          {/* DEL 11-20   */}
          <div className='container-item item11' ><img src={Rarezaonce}  className='rareza'  ></img><img src={Limitaciononce}  className='limitacion'  ></img><Link  href={`/cartas/${mainonce._id}/${mainonce.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainonce />}><div><img src={cartaonce.secure_url} className='cartatop2' alt={mainonce.nombre}  ></img></div></Tooltipsdl></a></Link> </div>
          <div className='container-item item12' ><img src={Rarezadoce}  className='rareza'  ></img><img src={Limitaciondoce}  className='limitacion'  ></img><Link  href={`/cartas/${maindoce._id}/${maindoce.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaindoce />}><div><img src={cartadoce.secure_url} className='cartatop2' alt={maindoce.nombre}  ></img></div></Tooltipsdl></a></Link> </div>
          <div className='container-item item13' ><img src={Rarezatrece}  className='rareza'  ></img><img src={Limitaciontrece}  className='limitacion'  ></img><Link  href={`/cartas/${maintrece._id}/${maintrece.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaintrece />}><div><img src={cartatrece.secure_url} className='cartatop2' alt={maintrece.nombre}  ></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item14' ><img src={Rarezacatorce}  className='rareza'  ></img><img src={Limitacioncatorce}  className='limitacion'  ></img><Link  href={`/cartas/${maincatorce._id}/${maincatorce.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaincatorce />}><div><img src={cartacatorce.secure_url} className='cartatop2' alt={maincatorce.nombre}   ></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item15' ><img src={Rarezaquince}  className='rareza'  ></img><img src={Limitacionquince}  className='limitacion'  ></img><Link  href={`/cartas/${mainquince._id}/${mainquince.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainquince />}><div><img src={cartaquince.secure_url} className='cartatop2' alt={mainquince.nombre}   ></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item16' ><img src={Rarezadieciseis}  className='rareza'  ></img><img src={Limitaciondieciseis}  className='limitacion'  ></img><Link  href={`/cartas/${maindieciseis._id}/${maindieciseis.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaindieciseis />}><div><img src={cartadieciseis.secure_url} className='cartatop2' alt={maindieciseis.nombre}   ></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item17' ><img src={Rarezadiecisiete}  className='rareza' ></img><img src={Limitaciondiecisiete}  className='limitacion'  ></img><Link  href={`/cartas/${maindiecisiete._id}/${maindiecisiete.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaindiecisiete />}><div><img src={cartadiecisiete.secure_url} className='cartatop2' alt={maindiecisiete.nombre}  ></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item18' ><img src={Rarezadieciocho}  className='rareza'  ></img><img src={Limitaciondieciocho}  className='limitacion'  ></img><Link  href={`/cartas/${maindieciocho._id}/${maindieciocho.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaindieciocho />}><div><img src={cartadieciocho.secure_url} className='cartatop2' alt={maindieciocho.nombre}  ></img></div></Tooltipsdl></a></Link></div>
          <div className='container-item item18' ><img src={Rarezadiecinueve}  className='rareza'  ></img><img src={Limitaciondiecinueve}  className='limitacion'  ></img><Link  href={`/cartas/${maindiecinueve._id}/${maindiecinueve.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaindiecinueve />}><div><img src={cartadiecinueve.secure_url} className='cartatop2' alt={maindiecinueve.nombre}  ></img></div></Tooltipsdl></a></Link> </div>
          <div className='container-item item20' ><img src={Rarezaveinte}  className='rareza' ></img><img src={Limitacionveinte}  className='limitacion'  ></img><Link  href={`/cartas/${mainveinte._id}/${mainveinte.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainveinte />}><div><img src={cartaveinte.secure_url} className='cartatop2' alt={mainveinte.nombre}   ></img></div></Tooltipsdl></a></Link></div>


          {/* DEL 21-30   */}
          <div className={ deckveintiuno.mainveintiuno === '' ? 'ocultar' : 'container-item item21'} > <img src={Rarezaveintiuno}  className='rareza'  ></img><img src={Limitacionveintiuno}  className='limitacion'  ></img><Link  href={`/cartas/${mainveintiuno._id}/${mainveintiuno.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainveintiuno />}><div><img src={ cartaveintiuno ?  cartaveintiuno.secure_url : null  } className='cartatop2' alt={mainveintiuno.nombre}  ></img></div></Tooltipsdl></a></Link> </div>
          <div className={ deckveintidos.mainveintidos === '' ? 'ocultar' : 'container-item item22'} ><img src={Rarezaveintidos}  className='rareza'  ></img><img src={Limitacionveintidos}  className='limitacion'  ></img><Link  href={`/cartas/${mainveintidos._id}/${mainveintidos.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainveintidos />}><div><img src={  cartaveintidos ?  cartaveintidos.secure_url : null } className='cartatop2' alt={mainveintidos.nombre}   ></img></div></Tooltipsdl></a></Link></div>
          <div className={ deckveintitres.mainveintitres === '' ? 'ocultar' : 'container-item item23'} ><img src={Rarezaveintitres}  className='rareza' ></img><img src={Limitacionveintitres}  className='limitacion'  ></img><Link  href={`/cartas/${mainveintitres._id}/${mainveintitres.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainveintitres />}><div><img src={ cartaveintitres ?  cartaveintitres.secure_url : null} className='cartatop2' alt={mainveintitres.nombre}  ></img></div></Tooltipsdl></a></Link> </div>
          <div className={ deckveinticuatro.mainveinticuatro === '' ? 'ocultar' : 'container-item item24'} ><img src={Rarezaveinticuatro}  className='rareza'  ></img><img src={Limitacionveinticuatro}  className='limitacion'  ></img><Link  href={`/cartas/${mainveinticuatro._id}/${mainveinticuatro.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainveinticuatro />}><div><img src={ cartaveinticuatro ? cartaveinticuatro.secure_url : null } className='cartatop2' alt={mainveinticuatro.nombre}   ></img></div></Tooltipsdl></a></Link></div>
          <div className={ deckveinticinco.mainveinticinco === '' ? 'ocultar' : 'container-item item25'} ><img src={Rarezaveinticinco}  className='rareza'  ></img><img src={Limitacionveinticinco}  className='limitacion'  ></img><Link  href={`/cartas/${mainveinticinco._id}/${mainveinticinco.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainveinticinco />}><div><img src={ cartaveintiseis ? cartaveinticinco.secure_url : null } className='cartatop2' alt={mainveinticinco.nombre}   ></img></div></Tooltipsdl></a></Link></div>
          <div className={ deckveintiseis.mainveintiseis === '' ? 'ocultar' : 'container-item item26'} ><img src={Rarezaveintiseis}  className='rareza'  ></img><img src={Limitacionveintiseis}  className='limitacion'  ></img><Link  href={`/cartas/${mainveintiseis._id}/${mainveintiseis.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainveintiseis />}><div><img src={ cartaveintiseis && cartaveintiseis.secure_url  } className='cartatop2' alt={mainveintiseis.nombre}  ></img></div></Tooltipsdl></a></Link></div>
          <div className={ deckveintisiete.mainveintisiete === '' ? 'ocultar' : 'container-item item27'} ><img src={Rarezaveintisiete}  className='rareza'  ></img><img src={Limitacionveintisiete}  className='limitacion'  ></img><Link  href={`/cartas/${mainveintisiete._id}/${mainveintisiete.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainveintisiete />}><div><img src={ cartaveintisiete ? cartaveintisiete.secure_url : null } className='cartatop2' alt={mainveintisiete.nombre}   ></img></div></Tooltipsdl></a></Link> </div>
          <div className={ deckveintiocho.mainveintiocho === '' ? 'ocultar' :  'container-item item28'} ><img src={Rarezaveintiocho}  className='rareza'  ></img><img src={Limitacionveintiocho}  className='limitacion'  ></img><Link  href={`/cartas/${mainveintiocho._id}/${mainveintiocho.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainveintiocho />}><div><img src={ cartaveintiocho && cartaveintiocho.secure_url  } className='cartatop2' alt={mainveintiocho.nombre}  ></img></div></Tooltipsdl></a></Link></div>
          <div className={ deckveinitinueve.mainveintinueve === '' ? 'ocultar' :  'container-item item29'} ><img src={Rarezaveintinueve}  className='rareza' ></img><img src={Limitacionveintinueve}  className='limitacion'  ></img><Link  href={`/cartas/${mainveintinueve._id}/${mainveintinueve.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmainveintinueve />}><div><img src={ cartaveintinueve && cartaveintinueve.secure_url  } className='cartatop2' alt={mainveintinueve.nombre}   ></img></div></Tooltipsdl></a></Link> </div>
          <div className={ decktreinta.maintreinta === '' ? 'ocultar' : 'container-item item30' } ><img src={Rarezatreinta}  className='rareza' ></img><img src={Limitaciontreinta}  className='limitacion'  ></img><Link  href={`/cartas/${maintreinta._id}/${maintreinta.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsmaintreinta />}><div><img src={ cartatreinta && cartatreinta.secure_url } className={'cartatop2' }alt={maintreinta.nombre}  ></img></div></Tooltipsdl></a></Link></div>
          
        </div>
      
        <span>Zona extra</span>
        <div className='extra-grid' >
        <div className={ deckextrauno.extrauno === '' ? 'ocultar' :'container-extra extra1' } ><img src={Rarezaextrauno}  className='rareza' ></img><img src={ extrauno.limitacion === 0 ? '' : extrauno.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extrauno.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extrauno.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extrauno.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" : extrauno.limitacion}  className='limitacion'  ></img><Link  href={`/cartas/${extrauno._id}/${extrauno.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsextrauno />}><div><img src={ cartaextrauno &&  cartaextrauno.secure_url } className={'cartatop2' }alt={extrauno.nombre}  ></img></div></Tooltipsdl></a></Link> </div>
        <div className={ deckextrados.extrados === '' ? 'ocultar' : 'container-extra extra2' } ><img src={Rarezaextrados}  className='rareza' ></img><img src={ extrados.limitacion === 0 ? '' : extrados.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extrados.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extrados.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extrados.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extrados.limitacion}  className='limitacion'  ></img><Link  href={`/cartas/${extrados._id}/${extrados.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsextrados />}><div><img src={ cartaextrados && cartaextrados.secure_url } className={'cartatop2' }alt={extrados.nombre}  ></img></div></Tooltipsdl></a></Link> </div>
        <div className={ deckextratres.extratres === '' ? 'ocultar' : 'container-extra extra3' } ><img src={Rarezaextratres}  className='rareza' ></img><img src={  extratres.limitacion === 0 ? '' : extratres.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extratres.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extratres.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extratres.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :    extratres.limitacion}  className='limitacion'  ></img><Link  href={`/cartas/${extratres._id}/${extratres.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsextratres />}><div><img src={ cartaextratres && cartaextratres.secure_url } className={'cartatop2' }alt={extratres.nombre}  ></img></div></Tooltipsdl></a></Link></div>
        <div className={ deckextracuatro.extracuatro === '' ? 'ocultar' : 'container-extra extra4' } ><img src={Rarezaextracuatro}  className='rareza' ></img><img src={ extracuatro.limitacion === 0 ? '' : extracuatro.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extracuatro.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extracuatro.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extracuatro.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extracuatro.limitacion}  className='limitacion'  ></img><Link  href={`/cartas/${extracuatro._id}/${extracuatro.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsextracuatro />}><div><img src={ cartaextracuatro && cartaextracuatro.secure_url } className={'cartatop2' }alt={extracuatro.nombre}  ></img></div></Tooltipsdl></a></Link> </div>
        <div className={ deckextracinco.extracinco === '' ? 'ocultar' : 'container-extra extra5' } ><img src={Rarezaextracinco}  className='rareza' ></img><img src={ extracinco.limitacion === 0 ? '' : extracinco.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extracinco.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extracinco.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extracinco.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extracinco.limitacion}  className='limitacion'  ></img><Link  href={`/cartas/${extracinco._id}/${extracinco.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsextracinco />}><div><img src={ cartaextracinco && cartaextracinco.secure_url } className={'cartatop2' }alt={extracinco.nombre}  ></img></div></Tooltipsdl></a></Link></div>
        <div className={ deckextraseis.extraseis === '' ? 'ocultar' : 'container-extra extra6' } ><img src={Rarezaextraseis}  className='rareza' ></img><img src={ extraseis.limitacion === 0 ? '' : extraseis.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extraseis.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extraseis.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extraseis.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extraseis.limitacion}  className='limitacion'  ></img><Link  href={`/cartas/${extraseis._id}/${extraseis.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsextraseis />}><div><img src={ cartaextraseis && cartaextraseis.secure_url } className={'cartatop2' }alt={extraseis.nombre}  ></img></div></Tooltipsdl></a></Link></div>
        <div className={ deckextrasiete.extrasiete === '' ? 'ocultar' : 'container-extra extra7' } ><img src={Rarezaextrasiete}  className='rareza' ></img><img src={ extrasiete.limitacion === 0 ? '' : extrasiete.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extrasiete.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extrasiete.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extrasiete.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extrasiete.limitacion}  className='limitacion'  ></img><Link  href={`/cartas/${extrasiete._id}/${extrasiete.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsextrasiete />}><div><img src={ cartaextrasiete && cartaextrasiete.secure_url } className={'cartatop2' }alt={extrasiete.nombre}  ></img></div></Tooltipsdl></a></Link></div>
        <div className={ deckextraocho.extraocho === '' ? 'ocultar' : 'container-extra extra8' } ><img src={Rarezaextraocho}  className='rareza' ></img><img src={ extraocho.limitacion === 0 ? '' : extraocho.limitacion === 1 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107074/iconos%20dlp/limited-1-dlp_b2mgxg.svg" : extraocho.limitacion === 2 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107082/iconos%20dlp/limited-2-dlp_yf3ttg.svg" : extraocho.limitacion === 3 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1661107087/iconos%20dlp/limited-3-dlp_aq3dv8.svg" : extraocho.limitacion === 4 ? "https://res.cloudinary.com/dqofcbeaq/image/upload/v1665724325/iconos%20dlp/prihibidas_itbkvb.svg" :  extraocho.limitacion}  className='limitacion'  ></img><Link  href={`/cartas/${extraocho._id}/${extraocho.nombre}/`} ><a><Tooltipsdl position="right" animationDuration={200} content={<Tooltipsextraocho />}><div><img src={ cartaextraocho && cartaextraocho.secure_url } className={'cartatop2' }alt={extraocho.nombre}  ></img></div></Tooltipsdl></a></Link></div>
        </div>
        
        <h2> Lista de otros decks  </h2>

       

      </div> 
      <Footer /> 
    </div>
  )
}

export default Deckscreator