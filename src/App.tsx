import { useState } from 'react'
import './App.css'
import { Practice1 } from './practices/Practice1'
import { Practice2 } from './practices/Practice2'
import { Practice3 } from './practices/Practice3'
import { Practice4 } from './practices/Practice4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Practice1 />
    <Practice2 />
    <Practice3 />
    <Practice4 />
    </>
  )
}

export default App
