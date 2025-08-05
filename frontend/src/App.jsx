import { useState } from 'react'
import './App.css'
import AuthForm from './components/AuthForm'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  {/* <h1>Hello </h1> */}
  <AuthForm/>
  {/* <div className='grid text-black grid-cols-[auto_1fr] min-h-screen'>
    <Navbar/>
    <div className='bg-red-400'>
      {Array(100).forEach(element => {
        <h1>sfdg</h1>
      })}
    </div>
    </div> */}
    </>
  )
}

export default App
