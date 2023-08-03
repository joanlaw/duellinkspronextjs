import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PostBlog() {
  const [blog, setBlog] = useState({});
  const router = useRouter();
  const { titulo } = router.query;

  // Función para obtener los detalles del blog desde el backend
  const fetchBlogDetails = async () => {
    try {
      const response = await fetch(`https://backend-dlp-neuronube.koyeb.app/blogs/${encodeURIComponent(titulo)}`); // Cambia la ruta a tu endpoint de blogs con el título como parámetro
      const data = await response.json();
      setBlog(data);
    } catch (error) {
      console.error('Error fetching blog details:', error);
    }
  };

  useEffect(() => {
    if (titulo) {
      fetchBlogDetails();
    }
  }, [titulo]);

  return (
    <>
    <Header />
    <div className="container">

      <div className="blog-body" dangerouslySetInnerHTML={{ __html: blog.cuerpo_blog }} />
    </div>
    <Footer />
    </>
  );
}

export default PostBlog;
