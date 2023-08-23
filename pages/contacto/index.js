import React from 'react';
import ContactForm from '../../components/ContactForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavbarCustom from '../../components/NavbarCustom';
import FooterCustom from '../../components/FooterCustom'

const ContactPage = () => {
  return (
    <>
  <NavbarCustom />
  <div className="container mx-auto px-4 mt-10">
    <div className="flex flex-col lg:flex-row justify-center">
      <div className="w-full lg:w-1/2 px-2 lg:px-0">
        <h1 className="text-2xl mb-8">Contacto</h1>
        <p className="mb-8">
          ¡Estamos encantados de escucharte! Si tienes alguna pregunta, comentario o simplemente deseas ponerte en contacto con nosotros, no dudes en utilizar nuestro formulario de contacto a continuación. Tu opinión es valiosa para nosotros y haremos nuestro mejor esfuerzo para responder lo antes posible. ¡Esperamos tener noticias tuyas pronto!
        </p>
        <ContactForm />
      </div>
    </div>
  </div>
  <FooterCustom />
    </>
  );
};

export default ContactPage;
