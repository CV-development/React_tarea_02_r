import Formulario from './Formulario'
import SocialButton from './SocialButton'

const Registro = ({ obtenerAlert }) => {
  return (
    <div className='container border border-light-subtle rounded-3 bg-white p-6'>
      <h1 className='fs-2'>Crea una cuenta</h1>
      <div className='d-flex gap.3 justify-content-center my-3'>
        <SocialButton icon='fa-brands fa-facebook' />
        <SocialButton icon='fa-brands fa-github' />
        <SocialButton icon='fa-brands fa-linkedin-in' />
      </div>
      <p>O usa tu email para registrarte</p>
      <Formulario obtenerAlert={obtenerAlert} />
    </div>
  )
}

export default Registro
