import React, { useState } from 'react'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic for login
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleLogin}
        className='bg-white p-6 rounded-lg shadow-lg'
      >
        <h2 className='text-2xl mb-6 text-center'>Ingreso</h2>
        <input
          type='email'
          placeholder='Correo'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mb-4 p-2 w-full border rounded'
        />
        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mb-4 p-2 w-full border rounded'
        />
        <button className='bg-blue-500 text-white p-2 w-full rounded'>
          Ingresar
        </button>
      </form>
    </div>
  )
}

export default Login
