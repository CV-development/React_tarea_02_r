import './App.css'
import Registro from './components/Registro'
import { useState } from 'react'
import Alert from './components/Alert'

function App () {
  const [alert, setAlert] = useState({ error: '', msg: '', color: '' })
  return (
    <>
      <Registro obtenerAlert={setAlert} />
      <Alert color={alert.color} msg={alert.msg} />
    </>
  )
}

export default App
