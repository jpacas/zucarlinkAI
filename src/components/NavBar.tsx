import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import HamburgerMenu from './HamburgerMenu'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-white p-4 fixed w-full z-10 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <img src='/assets/images/logo.png' alt='Logo' className='h-8 w-8' />
        <ul className='hidden md:flex space-x-4 text-[#201747]'>
          <li>
            <Link
              to='/'
              className='hover:text-[#00C9FF] transition-colors duration-300'
            >
              Directorio
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='hover:text-[#00C9FF] transition-colors duration-300'
            >
              Proveedores
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='hover:text-[#00C9FF] transition-colors duration-300'
            >
              Foro
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='hover:text-[#00C9FF] transition-colors duration-300'
            >
              Empleos
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='hover:text-[#00C9FF] transition-colors duration-300'
            >
              Equipos
            </Link>
          </li>
        </ul>
        <div className='hidden md:flex space-x-4'>
          <Link
            to='/login'
            className='bg-[#00C9FF] hover:bg-[#0DDB89] text-white px-4 py-2 rounded'
          >
            Ingreso
          </Link>
          <Link
            to='/register'
            className='bg-[#FF724B] hover:bg-[#FF5532] text-white px-4 py-2 rounded'
          >
            Registro
          </Link>
        </div>
        <FaBars
          className='md:hidden text-[#201747] text-2xl'
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <HamburgerMenu isOpen={isOpen} />
    </nav>
  )
}

export default NavBar
