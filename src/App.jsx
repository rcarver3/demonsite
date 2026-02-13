import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Demonically Online</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Love is {count}
        </button>
        <p>Press to love!</p>
      </div>
      <p className="read-the-docs">
        Crazy demon art by Felix Blackmon
      </p>
    </>
  )
}

export default App
