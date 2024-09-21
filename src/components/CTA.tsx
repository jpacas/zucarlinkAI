import React from 'react'
import { Link } from 'react-router-dom'

const CTA: React.FC = () => {
  return (
    <section
      className='relative bg-cover bg-center text-white h-screen flex flex-col justify-center items-center'
      style={{ backgroundImage: "url('/assets/images/sugarcane.jpg')" }} // Imagen de fondo
    >
      {/* Capa semi-transparente más ligera */}
      <div className='absolute inset-0 bg-black bg-opacity-40'></div>

      {/* Contenido del CTA con sombra en el texto */}
      <div className='relative z-10 text-center max-w-xl'>
        <h1 className='text-4xl sm:text-5xl font-bold drop-shadow-md'>
          Únete a la Comunidad de la Industria Azucarera
        </h1>
        <p className='mt-4 text-lg sm:text-xl drop-shadow-md'>
          Conecta, comparte y crece con profesionales del sector.
        </p>

        {/* Botón con enlace a la página de registro */}
        <Link to='/register'>
          <button className='mt-6 bg-[#0DDB89] hover:bg-[#00C9FF] text-[#201747] px-6 py-3 rounded-lg shadow-md transition-all'>
            Regístrate ahora
          </button>
        </Link>
      </div>
    </section>
  )
}

export default CTA
