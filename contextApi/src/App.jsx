import { useState } from 'react'
import userContextProvider from './context/userContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
   <userContextProvider>
    <h1>React with chai</h1>
   </userContextProvider>
  )
}

export default App
