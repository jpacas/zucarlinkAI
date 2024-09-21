import React from 'react'
import {
  FaNetworkWired,
  FaUsers,
  FaIndustry,
  FaTools,
  FaSuitcase,
  FaComments,
} from 'react-icons/fa'

const Benefits: React.FC = () => {
  const benefits = [
    { text: 'Networking con profesionales', icon: <FaNetworkWired /> },
    { text: 'Acceso a proveedores confiables', icon: <FaUsers /> },
    { text: 'Ofertas laborales exclusivas', icon: <FaSuitcase /> },
    { text: 'Foro de discusión técnica', icon: <FaComments /> },
    { text: 'Acceso a equipos especializados', icon: <FaTools /> },
    { text: 'Noticias del sector azucarero', icon: <FaIndustry /> },
  ]

  return (
    <section className='p-8 bg-gray-100 text-[#201747]'>
      <h2 className='text-3xl font-semibold text-center mb-6'>
        Beneficios de nuestra comunidad
      </h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className='bg-white p-6 shadow-md rounded-lg flex flex-col items-center hover:shadow-lg transition-all'
          >
            <div className='text-4xl text-[#0029E2] mb-4'>{benefit.icon}</div>
            <p>{benefit.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Benefits
