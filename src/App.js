import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Inicio';
import Navegador from './Components/Navegador';
import Contacto from './Components/Contacto';
import LoginForm from './Components/LoginForm';
import Footer from './Components/Footer';
import Projects from './Components/Projects';


function App() {
  const [currentPage, setCurrentPage] = useState('Inicio'); // Estado para controlar la página actual

  // Función para cambiar la página actual
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Navegador currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Renderiza el contenido de acuerdo a la página actual */}
      {currentPage === 'Inicio' && <Navbar />}
      {currentPage === 'Contacto' && <Contacto />}
      {currentPage === 'IniciarSesion' && <LoginForm />}
      {currentPage === 'Projects' && <Projects />}
      <Footer /> {}
    </div>
  );
}

export default App;




