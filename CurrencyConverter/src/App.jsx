import { useState } from 'react'
import Test from './components/Test'
import CurrenyHook from './hooks/CurrenyHook'

function App() {
  const [count, setCount] = useState(0)
  const data = CurrenyHook('inr')
  console.log(data);
  

  return (
    <>

    </>
  )
}

export default App
