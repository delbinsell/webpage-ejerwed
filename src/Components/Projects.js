import React from 'react';

const Projects = () => {
    return (
        <div className='container'>
            <div className='content'>
                <h1 className='titulo'>Proyectos</h1>
                <div className='project'>
                    <h2>Proyecto 1: Aplicación de Lista de Tareas</h2>
                    <p>Descripción: Una aplicación web que te permite crear, editar y eliminar tareas.</p>
                    <p>Tecnologías utilizadas: React, CSS, localStorage.</p>
                </div>
                <div className='project'>
                    <h2>Proyecto 2: Blog Personal</h2>
                    <p>Descripción: Un blog personal donde puedes escribir y publicar tus pensamientos y experiencias.</p>
                    <p>Tecnologías utilizadas: Node.js, Express, MongoDB, React, Redux.</p>
                </div>
                <div className='project'>
                    <h2>Proyecto 3: Aplicación de Clima</h2>
                    <p>Descripción: Una aplicación que te proporciona información actualizada sobre el clima en diferentes ciudades.</p>
                    <p>Tecnologías utilizadas: React, OpenWeather API, CSS.</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;

