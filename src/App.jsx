import { useState } from 'react'
import './App.css'
console.log(import.meta.env.VITE_MY_API_KEY);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Image Generator</h1>
    </div>
  )
}

export default App
