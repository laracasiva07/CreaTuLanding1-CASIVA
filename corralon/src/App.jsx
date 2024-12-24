import { useState } from 'react'
import './App.css'
import NavBar from './componentes/navBar/navBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer />
    </>
    
  )
}

export default App

