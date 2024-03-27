import React, { useState } from 'react'
const Formulario = ({ obtenerAlert }) => {
  // Estados del formulario
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  // Envío de formulario
  const validarPassword = (e) => {
    e.preventDefault()

    if (password !== confirm) {
      obtenerAlert({
        error: true,
        msg: 'Las contraseñas no coinciden',
        color: 'bg-danger'
      })
      return
    }
    if (nombre === '' || email === '' || password === '' || confirm === '') {
      obtenerAlert({
        error: true,
        msg: 'Completa todos los campos',
        color: 'bg-danger'
      })
      return
    }
    obtenerAlert({ error: false, msg: 'Cuenta creada exitosamente', color: 'bg-success' })
    setNombre('')
    setEmail('')
    setPassword('')
    setConfirm('')
  }

  return (
    <form className='formulario' onSubmit={validarPassword}>
      <div className='form-group mb-2'>
        <input
          type='text'
          name='nombre'
          className='form-control'
          placeholder='Nombre'
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
      </div>
      <div className='form-group mb-2'>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='tuemail@ejemplo.com'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className='form-group mb-2'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='Contraseña'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className='form-group mb-2'>
        <input
          type='password'
          name='confirm'
          className='form-control'
          placeholder='Confirma tu contraseña'
          onChange={(e) => setConfirm(e.target.value)}
          value={confirm}
        />
      </div>
      <div className='d-grid gap-1'>
        <button className='btn btn-success' type='submit'>
          Registrarse
        </button>

      </div>
    </form>
  )
}

export default Formulario
