import React, { useState, useEffect } from 'react'
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Card from '../../components/Card.js'
import axios from 'axios'
//import { Pagination } from '../pages/!#/Pagination.js'
import Header from '../../components/Header.js'
import Footer from '../../components/Footer.js'



export default function Cardlist() {



  const [cardList, setCardList] = useState([])
  const [search, setSearch ] = useState("")
  const [recordForEdit, setrecordForEdit ] = useState("")
  const [loading, setLoading ] = useState (false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage,] = useState(100)

  useEffect(()=>{
    refreshCardList();
  },[])

  const cardsApi = (url = 'https://api.duellinks.pro/cartas/') => {
    return {
        fetchAll: () => axios.get(url),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url  + id, updatedRecord),
        delete: id => axios.delete(url + id)
    }
  }  

    //Funcion de búsqueda

    const searcher = (e) => {
      setSearch(e.target.value)
      //console.log(e.target.value);
    }
  
  //metodo de filtrado 1
  
 // let results = []
 // if (!search) {
 //   results = cardList
//  } else {
//    results = cardList.filter( (dato) => 
//    dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
//  }

//Metodo filtrado 2

const results = !search ? cardList : cardList.filter((data)=> data.nombre.toLowerCase().includes(search.toLowerCase()) )

//const results = search? Cardlist : cardList.filter((dato)=>dato.nombre.toLowerCase().includes(search?.toLowerCase()))

//const results = !search ? cardList : cardList.filter((dato)=> dato.nombre.toLowerCase().includes(search?.toLocaleLowerCase()))

  

  function refreshCardList(){
    cardsApi().fetchAll()
    .then(res=> setCardList(res.data) )
    .catch(err => console.log(err))
  }
   
  const addOrEdit = (formData, onSuccess) => {
  //  if (FormData.get('_id') == "0")
    cardsApi().create(formData)
    .then(res => {
        onSuccess();
        refreshCardList();
    })
    .catch(err => console.log(err))
 //   else
//    cardsApi().update(FormData.get('_id'),FormData)
 //   .then(res => {
  //      onSuccess();
  //      refreshCardList();
  //  })
   // .catch(err => console.log(err))


  }  

//  const showRecordDetails = data => {
//  setrecordForEdit(data)
//  }

  //Solicitar a la api los datos de cartas para mostrar
  const imageCard = data =>(

   // <div className='card' onClick={()=>{showRecordDetails(data)}} >
   <div className='cartalist'>
      <div><img src={data.rareza} className='rareza'></img></div>
      <div><img src={data.limitacion} className='limitacion'></img></div>
  <div> <img src={data.image.secure_url} className='cartatop' sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"></img> </div>
   </div>
  )


    //Solicitar a la api datos funcion para limitacion

//    function imageCard(data){
 //     const imageCard = data()
 //     return (
//    <div className='card'>
//     <div><img src={data.rareza} className='rareza'  ></img></div>
 //    <img src={data.image.secure_url} className='card-img-top' height='200px' max-width='121.41px' ></img>
 //   </div>
 //     )
 // }

    // Mostrar numero de cartas actual en el post
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = results.slice(indexOfFirstPost, indexOfLastPost)

    //Cambio de pagina

    const paginate = pageNumber => setCurrentPage(pageNumber)


  /*  return (
  
  
      <div>
       <Header />
       <br /> 
       <br /> 
       <br /> 
       <br /> 
       <br /> 
       <br /> 
      <div className='row'>
          <div className='col-md-4'> <Card 
                          addOrEdit={addOrEdit}
                         // recordForEdit={recordForEdit}
                                                  /> 
          </div>
          <div className='col-md-8 listaa listatopcards'  >
             <table> 
                <tbody>
                  {
                    //tr > 3 td
                    [...Array(Math.ceil(currentPost.length/ 6))].map((e,i)=>
                    <tr key={i} >
                      <td> {imageCard(currentPost[6 * i ])} </td>
                      <td> {currentPost[6 * i + 1] ? imageCard(currentPost[6 * i + 1]) : null} </td>
                      <td> {currentPost[6 * i + 2] ? imageCard(currentPost[6 * i + 2]) : null} </td>
                      <td> {currentPost[6 * i + 3] ? imageCard(currentPost[6 * i + 3]) : null} </td>
                      <td> {currentPost[6 * i + 4] ? imageCard(currentPost[6 * i + 4]) : null} </td>
                      <td> {currentPost[6 * i + 5] ? imageCard(currentPost[6 * i + 5]) : null} </td>
  
  
                    </tr>
  
                    )
                  }
                </tbody>
             </table>
             <br />
             <Pagination  postPerPage={postPerPage} totalPost={results.length} paginate={paginate} />
              </div>
              
          </div>
  
          
  
      </div>
    )
  } */

  return (
  
  
    <div>
     <Header />
     <br /> 
     <br /> 
     <br /> 
     <br /> 
     <br /> 
     <br /> 

        <div className='container'> <Card 
                        addOrEdit={addOrEdit}
                       // recordForEdit={recordForEdit}
                                                /> 
        </div>
        <br />
      <Footer />      
        </div>

        

  )
}
