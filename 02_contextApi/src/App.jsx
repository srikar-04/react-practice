import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-green-500'>
        hello world
      </div>
      <div className='text-red-500'>
        this is srikar
      </div>
      <div className='text-red-500'>
        hello world again
      </div>
    </>
  )
}

export default App
