import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Imagen1 from '../img/Proyecto1.jpg'; 
import Imagen2 from '../img/Proyecto2.jpg'; 
import Imagen3 from '../img/fondo 1.gif'; 

const Navbar = () => {
  return (
    <div className='container'>
      <div className='content'>
        <Carousel showArrows={true} showThumbs={false}>
          {/* Agrega tus imágenes aquí */}
          <div>
            <img src={Imagen1} alt="Proyecto 1" className="carousel-image" />
          </div>
          <div>
            <img src={Imagen2} alt="Proyecto 2" className="carousel-image" />
          </div>
          <div>
            <img src={Imagen3} alt="Proyecto 3" className="carousel-image" />
          </div>
        </Carousel>

        <h1 className='titulo'>Bienvenido al portafolio de Anderson Avila</h1>
        <h2 className='Contenido'>
          Hola, soy Anderson Avila, un apasionado de la programación con un fuerte compromiso con la excelencia técnica y la innovación. A través de este portafolio, te invito a explorar mi viaje en el mundo del desarrollo de software y a descubrir los proyectos y habilidades que he adquirido a lo largo de mi educación y experiencia profesional. Mi objetivo es diseñar soluciones efectivas y crear aplicaciones impactantes que aborden problemas del mundo real. ¡Espero que disfrutes explorando mi trabajo y descubriendo cómo puedo contribuir a proyectos futuros!
        </h2>
      </div>
    </div>
  );
}

export default Navbar;



