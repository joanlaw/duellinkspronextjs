import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Index() {
  const [blogs, setBlogs] = useState([]);

  // Función para obtener la lista de blogs desde el backend
  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://api.duellinks.pro/blogs'); // Cambia la ruta a tu endpoint de blogs
      const data = await response.json();
      setBlogs(data.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
    <Header />
    <h1>Blog</h1>
    <div className="container">

      {blogs.map((blog) => (
        <div key={blog._id} className="blog-item">
          <Link href={`/blogs/${encodeURIComponent(blog.titulo)}`}>
            <a>
              <img src={blog.imagen_destacada} alt={blog.titulo} />
              <h3>{blog.titulo}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
    <Footer />
    </>
  );
}

export default Index;
