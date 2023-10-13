import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import businessLogo from './assets/logo_jjsistemas.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img className="block" src={businessLogo} alt="Logo de JJsistemas" />
      <h1>WebSite de la tienda virtual</h1>
      <h1>JJsistemas</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
