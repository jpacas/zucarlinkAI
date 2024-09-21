import React, { useState } from 'react'

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gender: '',
    country: '',
    workArea: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic for registration
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded-lg shadow-lg'
      >
        <h2 className='text-2xl mb-6 text-center'>Registro</h2>
        <input
          type='text'
          name='firstName'
          placeholder='Nombre'
          value={formData.firstName}
          onChange={handleChange}
          className='mb-4 p-2 w-full border rounded'
        />
        <input
          type='text'
          name='lastName'
          placeholder='Apellido'
          value={formData.lastName}
          onChange={handleChange}
          className='mb-4 p-2 w-full border rounded'
        />
        <input
          type='email'
          name='email'
          placeholder='Correo'
          value={formData.email}
          onChange={handleChange}
          className='mb-4 p-2 w-full border rounded'
        />
        <input
          type='text'
          name='age'
          placeholder='Edad'
          value={formData.age}
          onChange={handleChange}
          className='mb-4 p-2 w-full border rounded'
        />
        <select
          name='gender'
          value={formData.gender}
          onChange={handleChange}
          className='mb-4 p-2 w-full border rounded'
        >
          <option value=''>Sexo</option>
          <option value='male'>Masculino</option>
          <option value='female'>Femenino</option>
        </select>
        <input
          type='text'
          name='country'
          placeholder='País'
          value={formData.country}
          onChange={handleChange}
          className='mb-4 p-2 w-full border rounded'
        />
        <input
          type='text'
          name='workArea'
          placeholder='Área de trabajo'
          value={formData.workArea}
          onChange={handleChange}
          className='mb-4 p-2 w-full border rounded'
        />
        <button className='bg-green-500 text-white p-2 w-full rounded'>
          Registrarse
        </button>
      </form>
    </div>
  )
}

export default Register
