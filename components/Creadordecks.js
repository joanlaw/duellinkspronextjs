import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header'


const initialFieldValuesDecks = {
    _id: '',
    jugador: '',
    habilidad: '',
    arquetipo: '',
    arquetipo_image: '',
    engine: '',
    top: '',
    puesto: '',
    date: '',
    cartauno: '',
    cartados: ''
}

export default function Creadordecks(props) {

   const { addOrEditDecks } = props

   const [values, setValues] = useState(initialFieldValuesDecks)
   const [errors, setErrors] = useState({})

   const handleInputChange = e => {
    const {name, value} = e.target;

    setValues({
        ...values,
        [name]:value
    })
    
}

/*const showPreview = e => {
    if(e.target.files && e.target.files[0]){
        let image = e.target.files[0];
        const reader = new FileReader();
        reader.onload = x=>{
            setValues({
                ...values,
                image,
                imageSrc : x.target.result
            })
        }
        reader.readAsDataURL(image)
    }
    else{
        setValues({
            ...values,
            image: null,
        //    imageSrc : defaulImageSrc
        })
    }
} */

const validate = ()=>{
    let temp = {}
    temp.nombre = values.name===''?false:true;
   // temp.imageSrc = values.imageSrc===defaulImageSrc?false:true;
    setErrors(temp)
    return Object.values(temp).every(x => x===true)
}

const resetForm = ()=>{
    setValues(initialFieldValuesDecks)
  //  document.getElementById('image-uploader').value = null;
}

const handleFormSubmit = e =>{
    e.preventDefault()
    if(validate()){
    const formData = new FormData()
    formData.append('_id', values._id)
    formData.append('jugador', values.jugador)
    formData.append('habilidad', values.habilidad)
    formData.append('arquetipo', values.arquetipo)
    formData.append('arquetipo_image', values.arquetipo_image )
    formData.append('engine', values.engine)
    formData.append('top', values.top)
    formData.append('puesto', values.puesto)
    formData.append('date', values.date)
    formData.append('cartauno', values.cartauno)
    formData.append('cartados', values.cartados)
    addOrEditDecks(formData,resetForm)  
/*    formData.append('rareza', values.rareza)
    formData.append('limitacion', values.limitacion)
    formData.append('image', values.image)
    formData.append('image.secure_url', values.secure_url)
    formData.append('atk', values.atk)
    formData.append('atk_ico', values.atk_ico)
    formData.append('def', values.def)
    formData.append('def_ico', values.def_ico)
    formData.append('materiales', values.materiales)
    formData.append('descripcion', values.descripcion)
    formData.append('caja', values.caja)
    formData.append('estructura', values.estructura)
    formData.append('selection_box', values.selection_box)
    formData.append('lote', values.lote)
    formData.append('fecha_lanzamiento', values.fecha_lanzamiento) */
      

    }
}

//const applyErrorClass = field => ((field in errors && errors[field]===false )?' invalid-field':'' )  // ESTO {'form-control-file'+applyErrorClass('imageSrc')}  DEBE IR EN LA CLASE   
  return (
<> 
    <div>
        <Header />
        <h1 className='h1margen' >Creador cartas</h1> 
        <form autoComplete='off ' noValidate onSubmit={handleFormSubmit}>
            <div className='card'>
                <img src={values.imageSrc} className='card-img-top' />
                <div className='card-body'> 
                    <div className='form-group'>
                    <input  className='form-control' placeholder='jugador' name='jugador' value={values.jugador} onChange={handleInputChange} />
                    <input  className='form-control' placeholder='habilidad' name='habilidad' value={values.habilidad} onChange={handleInputChange} />
    
                    </div>
                    
                    <div className='form-group text-center'>
                        <button type='submit' className='btn btn-light'> Enviar </button>
                    </div>
                </div>
            </div>

    </form>
    </div>
    </>   
  )
}

