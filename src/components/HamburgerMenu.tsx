import React from 'react'
import { Link } from 'react-router-dom'

interface HamburgerMenuProps {
  isOpen: boolean
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen }) => {
  return (
    isOpen && (
      <div className='md:hidden bg-[#201747] p-4 text-white'>
        <ul className='space-y-4'>
          <li>
            <Link to='/'>Directorio</Link>
          </li>
          <li>
            <Link to='/'>Proveedores</Link>
          </li>
          <li>
            <Link to='/'>Foro</Link>
          </li>
          <li>
            <Link to='/'>Empleos</Link>
          </li>
          <li>
            <Link to='/'>Equipos</Link>
          </li>
        </ul>
        <div className='mt-4'>
          <Link
            to='/login'
            className='block bg-[#00C9FF] hover:bg-[#0DDB89] px-4 py-2 rounded mb-2'
          >
            Ingreso
          </Link>
          <Link
            to='/register'
            className='block bg-[#FF724B] hover:bg-[#FF5532] px-4 py-2 rounded'
          >
            Registro
          </Link>
        </div>
      </div>
    )
  )
}

export default HamburgerMenu
