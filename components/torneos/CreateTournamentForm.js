import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Input } from '@nextui-org/react';
import { useUser } from "../../contexts/UserContext";  // Asegúrate de ajustar la ruta de importación al lugar correcto
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';


const CreateTournamentForm = () => {
  const user = useUser(); 
  
  const initialFormData = {
    league_name: '',
    league_format: '',
    start_date: '',
    start_time: '', // Nuevo campo para la hora
    enlace_torneo: '',
    image: '',
    infoTorneo: [{
      format: '',
      banlist: '',
      deck_info: '',
      eliminacion: ''
    }]
  };

  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const imageFileRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());


  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!validImageTypes.includes(file.type)) {
        alert('Formato de imagen no válido. Por favor sube una imagen .jpeg, .jpg o .png');
        if (imageFileRef.current) {
          imageFileRef.current.value = ''; // Reinicia el valor del input aquí
        }
        return;
      }
      setImageFile(file);
    }
  };
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('infoTorneo')) {
      const nestedField = name.split('.')[1];
      setFormData((prevFormData) => ({
        ...prevFormData,
        infoTorneo: [{
          ...prevFormData.infoTorneo[0],
          [nestedField]: value,
        }],
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  


const handleSubmit = async (e) => {
  e.preventDefault();

  const contentState = editorState.getCurrentContent();
  const contentRaw = JSON.stringify(convertToRaw(contentState));

  const completeDateTime = `${formData.start_date}T${formData.start_time}:00.000Z`;


  const formDataToSend = new FormData();
  Object.keys(formData).forEach((key) => {
    if (key === 'infoTorneo') {
      formDataToSend.append(key, JSON.stringify(formData[key]));
    } else if (key !== 'start_date' && key !== 'start_time') { // Ignora estos dos
      formDataToSend.append(key, formData[key]);
    }
  });

      // Agrega la fecha y hora combinadas
      formDataToSend.append('start_date', completeDateTime);
      formDataToSend.append('reglas', contentRaw); // Cambia "reglas" por el nombre de campo correcto en tu API

  if (imageFile) {
    formDataToSend.append('image', imageFile);
  }

  formDataToSend.append('organizer', user.discordId);

  try {
    const response = await axios.post('https://api.duellinks.pro/leagues', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Torneo creado con éxito', response.data);
    setEditorState(EditorState.createEmpty());
    setFormData(initialFormData);
    setImageFile(null);
    if (imageFileRef.current) {
      imageFileRef.current.value = ''; // Reinicia el campo de archivo aquí
    }
  } catch (error) {
    console.error('Hubo un problema al crear el torneo', error);
  }
};


  const variants = ['format', 'banlist', 'deck_info', 'eliminacion'];

  const getOptionsForVariant = (variant) => {
    switch (variant) {
      case 'format':
        return ['Fun', 'Libre', 'Ensalada'];
      case 'banlist':
        return ['Con banlist', 'Sin banlist'];
      case 'deck_info':
        return ['deck + extra deck', 'deck + extra deck + side deck'];
      case 'eliminacion':
        return ['Eliminacion directa', 'Rondas suizas', 'Bo3'];
      default:
        return [];
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <Input
        type="text"
        name="league_name"
        value={formData.league_name}
        onChange={handleChange}
        placeholder="Nombre del Torneo"
        label="Nombre del Torneo"
      />
      {/* Mantén los campos restantes como Input */}
      <Input
        type="date"
        name="start_date"
        value={formData.start_date}
        onChange={handleChange}
        label="Fecha de inicio"
      />
      <Input
        type="time" // Campo de tipo "time" para capturar la hora
        name="start_time"
        value={formData.start_time}
        onChange={handleChange}
        label="Hora de inicio"
      />
      <Input
        type="url"
        name="enlace_torneo"
        value={formData.enlace_torneo}
        onChange={handleChange}
        placeholder="Enlace del Torneo"
        label="Enlace del Torneo"
      />
      <Input
        type="file"
        name="image"
        ref={imageFileRef} // Asigna la referencia aquí
        onChange={handleImageChange}
        label=""
      />
            <select
        name="league_format"
        value={formData.league_format}
        onChange={handleChange}
        className="input-style" // Clase para el estilo, puedes reutilizar la clase de Input
      >
        <option value="">Tipo de liga o torneo</option>
        <option value="formato1">Torneo</option>
        <option value="formato2">Liga</option>
        {/* Agrega más opciones aquí si es necesario */}
      </select>

      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
  {variants.map((variant) => (
    <select
      key={variant}
      name={`infoTorneo.${variant}`}
      value={formData.infoTorneo[0][variant]} // Accede a las propiedades del primer objeto en el arreglo
      onChange={(e) => handleChange(e)}
      className="input-style"
    >
      <option value="">{variant}</option>
      {getOptionsForVariant(variant).map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  ))}
</div>
      {/* Campo para ingresar reglas con formato */}
      {/* Campo para ingresar reglas con formato */}
      <div className="input-label">Reglas</div>
      <div className="editor-container">
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          name="reglas"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
        Crear Torneo
      </button>
    </form>
  );
};

export default CreateTournamentForm;
