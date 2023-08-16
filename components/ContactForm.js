import React, { useState } from 'react';

import {Textarea} from "@nextui-org/react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Nuevo estado para rastrear si el formulario se ha enviado

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch('https://formsubmit.co/ajax/66e0aa808386fb6ab3a440485e2006b1', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Correo enviado exitosamente');
        setSubmitted(true); // Actualiza el estado para indicar que el formulario se ha enviado
        setName(''); // Reinicia los valores de los estados
        setEmail('');
        setMessage('');
      } else {
        console.error('Error al enviar el correo');
        // Aquí puedes manejar el error de alguna manera
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
        <input 
          type="text" 
          className="mt-1 p-2 w-full border rounded-md" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <input 
          type="email" 
          className="mt-1 p-2 w-full border rounded-md" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
        <Textarea
          className="mt-1 p-2 w-full border rounded-md"
          id="message" 
          rows="5" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
      </div>
      <button 
        type="submit" 
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Enviar
      </button>
      {submitted && <p className="mt-2 text-success">¡Formulario enviado!</p>}
    </form>
  );
};

export default ContactForm;
