import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white p-6'>
      <div className='container mx-auto text-center'>
        <p>&copy; 2024 Comunidad Azucarera. Todos los derechos reservados.</p>
        <div className='mt-4 flex justify-center space-x-6'>
          <a
            href='https://facebook.com'
            className='hover:text-[#FF724B] transition-all'
          >
            <FaFacebook size={30} />
          </a>
          <a
            href='https://linkedin.com'
            className='hover:text-[#00C9FF] transition-all'
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href='https://twitter.com'
            className='hover:text-[#0029E2] transition-all'
          >
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
