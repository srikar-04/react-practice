import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoProvider>
        <div className='w-full min-h-screen bg-zinc-700'>
          
        </div>
      </TodoProvider>
    </>
  )
}

export default App
