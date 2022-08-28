import './App.css'
import Input from './assets/components/Input'
import Btn from './assets/components/Btn'
import { useState } from 'react'

function App() {
  
  const [password, setPassword] = useState('')

  return (
    <>
      <h1>Ingresa la contraseña secreta</h1>
      {password === '252525' ? <Btn/> : null}
      <Input setPassword={setPassword}/>
    </>
  )
  
}

export default App
