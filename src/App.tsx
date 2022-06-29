import { useState } from 'react'
import logo from './logo.svg'
import './styles/global.css'
function App() {
  const [count, setCount] = useState(0)

  return (
      <h1 className="text-3xl font-bold underline text-green-400">
        Hello world!
      </h1>
  )
}

export default App
