import { useState } from 'react'
import './App.css'
import { Practice1 } from './practices/Practice1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Practice1 />
    </>
  )
}

export default App
