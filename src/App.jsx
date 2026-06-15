import { useState } from 'react'
import Assignment1 from './assignments/Assignment1'


function App() {
  const [count, setCount] = useState(0)


    
  return (
    <>
    {/* assignment1 is normally making a counter using state  */}
    <Assignment1/>
    </>
  )
}

export default App
