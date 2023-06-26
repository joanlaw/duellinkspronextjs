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

  const cardsApi = (url = 'https://back-render-cloud-dlp.onrender.com/cartas/',) => {
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
    
    }
  

//Metodo filtrado 2

const results = !search ? cardList : cardList.filter((data)=> data.nombre.toLowerCase().includes(search.toLowerCase()) )

  function refreshCardList(){
    cardsApi().fetchAll()
    .then(res=> setCardList(res.data) )
    .catch(err => console.log(err))
  }
   
  const addOrEdit = (formData, onSuccess) => {

    cardsApi().create(formData)
    .then(res => {
        onSuccess();
        refreshCardList();
    })
    .catch(err => console.log(err))


  }  


  //Solicitar a la api los datos de cartas para mostrar
  const imageCard = data =>(
   <div className='cartalist'>
      <div><img src={data.rareza} className='rareza'></img></div>
      <div><img src={data.limitacion} className='limitacion'></img></div>
  <div> <img src={data.image.secure_url} className='cartatop' sizes="(min-width: 576px) 104px, (max-width: 575px) 20vw"></img> </div>
   </div>
  )

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = results.slice(indexOfFirstPost, indexOfLastPost)

    //Cambio de pagina

    const paginate = pageNumber => setCurrentPage(pageNumber)


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
