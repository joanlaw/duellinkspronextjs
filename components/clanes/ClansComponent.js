import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import { Input, Button, Image } from '@nextui-org/react';

const createClanAPI = async (name, creator, token, selectedImage) => {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('creator', creator);
  
  if (selectedImage) {
    formData.append('logo', selectedImage);
  }
  
  return axios.post(
    'https://api.duellinks.pro/clans',
    formData,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

const ClansComponent = () => {
  const { userId, token } = useContext(UserContext);
  const [newClanName, setNewClanName] = useState('');
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [success, setSuccess] = useState(null);

  const createClan = async () => {
    try {
      const response = await createClanAPI(newClanName, userId, token, selectedImage);
      setNewClanName('');
      setSelectedImage(null);
      setImagePreview(null);
      fileInputRef.current.value = null;
      setError(null);
      setSuccess('Clan creado con éxito');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al crear el clan');
      setSuccess(null);
      console.error('Error al crear el clan:', err);
    }
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setError(null);
    setSelectedImage(null);
    setImagePreview(null);

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      setError('Formato de imagen no soportado. Solo se aceptan JPEG y PNG.');
      fileInputRef.current.value = null;
      return;
    }

    setSelectedImage(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };


  return (
    <div className="p-4 lg:p-8">
  <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 lg:mb-8">Crea tu clan</h1>
  {error && <div className="floating-alert w-full lg:w-1/4 bg-red-500 text-white p-3 rounded-md mb-4">{error}</div>}
  {success && <div className="floating-alert w-full lg:w-1/4 bg-green-500 text-white p-3 rounded-md mb-4">{success}</div>}
  {/* El formulario para crear un clan aquí. No ha cambiado. */}
  <div className="flex flex-col lg:flex-row items-start lg:items-start lg:space-x-8">
    <div className="w-full lg:w-1/4 flex items-center">
      <Input
        type="text"
        placeholder="Nombre del clan"
        value={newClanName}
        onChange={(e) => setNewClanName(e.target.value)}
      />
    </div>
    <div className="mt-4 lg:mt-0 flex flex-col items-start">
      <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center mb-4">
        {imagePreview ? (
          <Image
            width={100}
            height={100}
            src={imagePreview}
            alt="Vista previa de la imagen"
          />
        ) : (
          <span className="text-gray-400">Vista previa</span>
        )}
      </div>
      <input type="file" ref={fileInputRef} accept="image/png, image/jpeg" onChange={uploadImage} className="mb-4" />
      
    </div>
  </div>
  <div className="mt-4 lg:mt-8">
      <Button onClick={createClan} disabled={!!error} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Crear Clan
      </Button>
    </div>
</div>


  );
};

export default ClansComponent;
