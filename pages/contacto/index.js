import React from 'react';
import ContactForm from '../../components/ContactForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ContactPage = () => {
  return (
    <>
    <Header />
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="mb-4">Contacto</h1>
          <p>¡Estamos encantados de escucharte! Si tienes alguna pregunta, comentario o simplemente deseas ponerte en contacto con nosotros, no dudes en utilizar nuestro formulario de contacto a continuación. Tu opinión es valiosa para nosotros y haremos nuestro mejor esfuerzo para responder lo antes posible. ¡Esperamos tener noticias tuyas pronto!
</p>
          <ContactForm />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;
