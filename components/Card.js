import React, { useState, useEffect } from 'react'

const defaulImageSrc = '/img/srcyugi.jpg'

const initialFieldValues = {
    _id: '',
    nombre: '',
    tipo_de_carta: '',
    atributo: '',
   // atributo_ico: '',
    tipo: '',
    tipo_magica_trampa: '',
    nivel_rango_link: 0,
   // nivel_rango_ico: '',
  //  magica_tampa_ico: '',
    escala: 0,
    rareza: '',
    limitacion: 0,
    imageSrc: defaulImageSrc,
    image: null,
    secure_url: '',
    atk: 0,
   // atk_ico:'',
    def: 0,
   // def_ico:'',
    materiales: '',
    descripcion: '',
    efecto_pendulo: '',
    caja: '',
    estructura: '',
    selection_box: '',
    lote: '',
    adicional: '',
    fecha_lanzamiento: ''
}

export default function Card(props) {


//Props
//const {addOrEdit, recordForEdit} = props
const {addOrEdit } = props 


//Use state de los valores
const [values, setValues] = useState(initialFieldValues)
const [errors, setErrors] = useState({})

//useEffect (()=>{
 //   if (recordForEdit!=null)
 //       setValues(recordForEdit);
//},[recordForEdit])

const handleInputChange = e => {
    const {name, value} = e.target;

    setValues({
        ...values,
        [name]:value
    })
    
}

const showPreview = e => {
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
            imageSrc : defaulImageSrc
        })
    }
}

const validate = ()=>{
    let temp = {}
    temp.nombre = values.name===''?false:true;
    temp.imageSrc = values.imageSrc===defaulImageSrc?false:true;
    setErrors(temp)
    return Object.values(temp).every(x => x===true)
}

const resetForm = ()=>{
    setValues(initialFieldValues)
    document.getElementById('image-uploader').value = null;
}

const handleFormSubmit = e =>{
    e.preventDefault()
    if(validate()){
    const formData = new FormData()
    formData.append('_id', values._id)
    formData.append('nombre', values.nombre)
    formData.append('tipo_de_carta', values.tipo_de_carta)
    formData.append('atributo', values.atributo)
 //   formData.append('atributo_ico', values.atributo_ico )
    formData.append('tipo', values.tipo)
    formData.append('tipo_magica_trampa', values.tipo_magica_trampa)
    formData.append('nivel_rango_link', values.nivel_rango_link)
 //   formData.append('nivel_rango_ico', values.nivel_rango_ico)
//    formData.append('magica_trampa_ico', values.magica_trampa_ico)
    formData.append('escala', values.escala)
    formData.append('rareza', values.rareza)
    formData.append('limitacion', values.limitacion)
    formData.append('image', values.image)
    formData.append('image.secure_url', values.secure_url)
    formData.append('atk', values.atk)
  //  formData.append('atk_ico', values.atk_ico)
    formData.append('def', values.def)
 //   formData.append('def_ico', values.def_ico)
    formData.append('materiales', values.materiales)
    formData.append('descripcion', values.descripcion)
    formData.append('efecto_pendulo', values.efecto_pendulo)
    formData.append('caja', values.caja)
    formData.append('estructura', values.estructura)
    formData.append('selection_box', values.selection_box)
    formData.append('lote', values.lote)
    formData.append('adicional', values.adicional)
    formData.append('fecha_lanzamiento', values.fecha_lanzamiento)
    addOrEdit(formData,resetForm)    

    }
}

const applyErrorClass = field => ((field in errors && errors[field]===false )?' invalid-field':'' )  // ESTO {'form-control-file'+applyErrorClass('imageSrc')}  DEBE IR EN LA CLASE


  return (


    <div className='row'>
        <h4> Añadir carta </h4>
    
 
            <div className='col-md-4'>
                 <form autoComplete='off ' noValidate onSubmit={handleFormSubmit}>
                <img src={values.imageSrc} className='card-img-top' />
                <div className='card-body col-md-4'> 
                    <div className='form-group'>
                        <input type='file' accept='image/*' name='image' className={'form-control-file'+applyErrorClass('imageSrc')} onChange={showPreview}  id='image-uploader' />
                    </div>
 
                    <div className='form-group text-center'>
                        <button type='submit' className='btn btn-light'> Enviar </button>
                    </div>

                </div>
                </form> 
            </div>
            <div className='col-md-4' >
            <div className='form-group'>
                        <input className={'form-control'+applyErrorClass('nombre')} placeholder='Ingrese nombre de carta' name='nombre' value={values.nombre} onChange={handleInputChange} />
                        <label>Tipo de carta</label>
                        <select className='form-control' placeholder='Tipo de carta' name='tipo_de_carta' value={values.tipo_de_carta} onChange={handleInputChange} >
                        <option value=""></option>
                                        <option value="Normal">Normal</option>
                                        <option value="Ritual">Rital</option>
                                        <option value="Sincronía">Sincronía</option>
                                        <option value="Péndulo">Péndulo</option>
                                        <option value="Péndulo normal">Péndulo Normal</option>
                                        <option value="Efecto">Efecto</option>
                                        <option value="Fusion">Fusión</option>
                                        <option value="Xyz">Xyz</option>
                                        <option value="Link">Link</option>
                                        
                        </select>
                        <label>Atributo</label>
                        <select  className='form-control' placeholder='atributo' name='atributo' value={values.atributo} onChange={handleInputChange} >
                            
                                        <option value=""></option>
                                        <option value="no">no aplica</option>
                                        <option value="LUZ">LUZ</option>
                                        <option value="OSCURIDAD">OSCURIDAD</option>
                                        <option value="AGUA">AGUA</option>
                                        <option value="FUEGO">FUEGO</option>
                                        <option value="TIERRA">TIERRA</option>
                                        <option value="VIENTO">VIENTO</option>
                                        <option value="DIVINIDAD">DIVINIDAD</option>
                                        <option value="MÁGICA">MÁGICA</option>
                                        <option value="TRAMPA">TRAMPA</option>
                            
                        </select>

                        <label>Tipo</label>
                        <select  className='form-control' placeholder='tipo' name='tipo' value={values.tipo} onChange={handleInputChange} > 

                                        <option value=""></option>
                                        <option value="Dragon">Dragón</option>
                                        <option value="Zombi">Zombi</option>
                                        <option value="Demonio">Demonio</option>
                                        <option value="Piro">Piro</option>
                                        <option value="Serpiente marina">Serpiente Marina</option>
                                        <option value="Roca">Roca</option>
                                        <option value="Maquina">Máquina</option>
                                        <option value="Pez">Pez</option>
                                        <option value="Dinosaurio">Dinosaurio</option>
                                        <option value="Insecto">Insecto</option>
                                        <option value="Bestia">Bestia</option>
                                        <option value="Guerrero-bestia">Guerrero-Bestia</option>
                                        <option value="Planta">Planta</option>
                                        <option value="Aqua">Aqua</option>
                                        <option value="Guerrero">Guerrero</option>
                                        <option value="Bestia alada">Bestia Alada</option>
                                        <option value="Hada">Hada</option>
                                        <option value="Lanzador de conjuros">Lanzador de Conjuros</option>
                                        <option value="Trueno">Trueno</option>
                                        <option value="Reptil">Reptil</option>
                                        <option value="Psiquico">Psíquico</option>
                                        <option value="Wyrm">Wyrm</option>
                                        <option value="Ciberso">Ciberso</option>
                                        
                        
                        </select>
                        <label>Tipo de mágica o trampa</label>
                        <select  className='form-control' placeholder='tipo magica o trampa' name='tipo_magica_trampa' value={values.tipo_magica_trampa} onChange={handleInputChange} >
                            
                            <option value=""></option>
                            <option value="no">no aplica</option>
                            <option value="Normal">Normal</option>
                                        <option value="De campo">De campo</option>
                                        <option value="De equipo">De equipo</option>
                                        <option value="Continua">Continua</option>
                                        <option value="De juego rápido">De juego rapido</option>
                                        <option value="De ritual">De ritual</option>
                                        <option value="De contraefecto">De contraefecto</option>
                                        <option value="Continua">Continua</option>
                
            </select>


                        <label>Nivel RANGO O LINK</label>
                        <input  className='form-control' placeholder='nivel_rango_link' name='nivel_rango_link' value={values.nivel_rango_link} onChange={handleInputChange} />   

                        <label>Escala</label>
                        <input  className='form-control' placeholder='escala' name='escala' value={values.escala} onChange={handleInputChange} />
                        <input  className='form-control' placeholder='rareza' name='rareza' value={values.rareza} onChange={handleInputChange} required  />
                        <label>Limitacion</label>
                        <input  className='form-control' placeholder='limitacion' name='limitacion' value={values.limitacion} onChange={handleInputChange} />
                        <label>Ataque</label>
                        <input className='form-control' placeholder='atk' name='atk' value={values.atk} onChange={handleInputChange} />
                        
                        
            </div>
            </div>
            <div className='col-md-4' >
            <div className='form-group'>
                        <label>Defensa</label>
                        <input className='form-control' placeholder='def' name='def' value={values.def} onChange={handleInputChange} />

                        <input className='form-control' placeholder='materiales' name='materiales' value={values.materiales} onChange={handleInputChange} />
                        <input className='form-control' placeholder='descripcion' name='descripcion' required value={values.descripcion} onChange={handleInputChange} />
                        <input className='form-control' placeholder='efecto_pendulo' name='efecto_pendulo' required value={values.efecto_pendulo} onChange={handleInputChange} />
                        <label>Caja</label>
                        <select  className='form-control' placeholder='caja' name='caja' value={values.caja} onChange={handleInputChange} > 

                        <option value=""></option>
                        <option value="Braver victory">Braver victory</option>
                        <option value="Stage of trickstar">Stage of trickstar</option>
                        <option value="Link revolution">Link revolution</option>
                        <option value="Stars of syncro">Stars of syncro</option>
                        <option value="Shining sunrise">Shining sunrise</option>
                        <option value="Heart of xyz">Heart of xyz</option>
                        <option value="Cross dimension">Cross dimension</option>
                        <option value="Energy of gigarays">Energy of gigarays</option>
                        <option value="Maximum gustav">Maximum gustav</option>
                        <option value="Phantom of rebellion">Phantom of rebellion</option>
                        <option value="Fantastic arc">Fantastic arc</option>
                        <option value="Dark dimension">Dark dimension</option>
                        <option value="Shining hope">Shining hope</option>
                        <option value="Infinity ray">Infinity ray</option>
                        <option value="Rage of volcano">Rage of volcano</option>
                        <option value="Shark fang">Shark fang</option>
                        <option value="Voltage of the metal">Voltage of the metal</option>
                        <option value="Arena of sanctuary">Arena of sanctuary</option>
                        <option value="Infernity destruction">Infernity destruction</option>
                        <option value="Chronicle of glory">Chronicle of glory</option>
                        <option value="Witch's sorcery">Witchs sorcery</option>
                        <option value="Flames of the heart">Flames of the heart</option>
                        <option value="Fortress of gears">Fortress of gears</option>
                        <option value="Judgement force">Judgement force</option>
                        <option value="Master of shadow">Master of shadow</option>
                        <option value="Future horizon">Future horizon</option>
                        <option value="Soul of resurrection">Soul of resurrection</option>
                        <option value="Aerial assault">Aerial assault</option>
                        <option value="Spirit of the beast">Spirit of the beast</option>
                        <option value="Valhalla calling">Valhalla calling</option>
                        <option value="Curse of dread">Curse of dread</option>
                        <option value="Cybernetic rebellion">Cybernetic rebellion</option>
                        <option value="Guardians of rock">Guardians of rock</option>
                        <option value="Blazing rose">Blazing rose</option>
                        <option value="Lords of shining">Lords of shining</option>
                        <option value="Warriors unite">Warriors unite</option>
                        <option value="Dimensions of the wizards">Dimensions of the wizards</option>
                        <option value="Absolute inferno">Absolute inferno</option>
                        <option value="Tornado of phantoms">Tornado of phantoms</option>
                        <option value="Revolution beginning">Revolution beginning</option>
                        <option value="Secrets of the ancients">Secrets of the ancients</option>
                        <option value="Blacktorm rising">Blacktorm rising</option>
                        <option value="Power of bravery">Power of bravery</option>
                        <option value="Stardust acceleration">Stardust acceleration</option>
                        <option value="Gaia genesis">Gaia genesis</option>
                        <option value="Empire of scarlet">Empire of scarlet</option>
                        <option value="Birning nova">Birning nova</option>
                        <option value="Clash of wings">Clash of wings</option>
                        <option value="Crusaders Battlegrounds">Crusaders Battlegrounds</option>
                        <option value="Visions of ice">Visions of ice</option>
                        <option value="Valiant souls">Valiant souls</option>
                        <option value="Rampage of the forest">Rampage of the forest</option>
                        <option value="Abyss encounters">Abyss encounters</option>
                        <option value="Resonance of contrast">Resonance of contrast</option>
                        <option value="Primal burst">Primal burst</option>
                        <option value="Blades of spirits">Blades of spirits</option>
                        <option value="Galactic origin">Galactic origin</option>
                        <option value="Servants of kings">Servants of kings</option>
                        <option value="Generation next">Generation next</option>
                        <option value="Echoes of silence">Echoes of silence</option>
                        <option value="Electric overload">Electric overload</option>
                        <option value="Dawn of destiny">Dawn of destiny</option>
                        <option value="Crimson kingdom">Crimson kingdom</option>
                        <option value="Land of the titans">Land of the titans</option>
                        <option value="Chaotic compliance">Chaotic compliance</option>
                        <option value="Wonders of the sky">Wonders of the sky</option>
                        <option value="Valkyrie's rage">Valkyries rage</option>
                        <option value="Flame of the tyrant">Flame of the tyrant</option>
                        <option value="Neo-impact">Neo-impact</option>
                        <option value="Age of discovery">Age of discovery</option>
                        <option value="The ultimate rising">The ultimate rising</option>
                        

                        </select>
                        <label>Estructura</label>
                        <select  className='form-control' placeholder='estructura' name='estructura' value={values.estructura} onChange={handleInputChange} > 

                        <option value=""></option>
                        <option value="Cyberse code">Cyberse code</option>
                        <option value="Ruddy rose burning">Ruddy rose burning</option>
                        <option value="Brave hope">Brave hope</option>
                        <option value="Heart of xyz">Tellarknight advent</option>
                        <option value="Cross dimension">Sword of paladin</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        

                        </select>

                        <label>Selection box</label>
                        <select  className='form-control' placeholder='selection box' name='selection_box' value={values.selection_box} onChange={handleInputChange} > 

                        <option value=""></option>
                        <option value="Selection box super mini vol.02">Selection box super mini vol.02</option>
                        <option value="Selection box mini vol.04">Selection box mini vol.04</option>
                        <option value="Selection box vol.05">Selection box vol.05</option>
                        <option value="Selection box vol.04">Selection box vol.04</option>

                        </select>
                        <label>Lote</label>
                        <select  className='form-control' placeholder='lote' name='lote' value={values.lote} onChange={handleInputChange} > 

                        <option value=""></option>
                        <option value="Lote especial">Lote especial</option>

                        </select>
                        <input className='form-control' placeholder='Informacion adicional' name='adicional' value={values.adicional} onChange={handleInputChange} />
                        <input className='form-control' placeholder='Fecha de lanzamiento' name='fecha_lanzamiento' value={values.fecha_lanzamiento} onChange={handleInputChange} />

            </div>          
            </div>    
            </div>

  )
}
