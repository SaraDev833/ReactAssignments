import { useState } from 'react'
import Assignment1 from './assignments/Assignment1'
import Assignment2 from './assignments/Assignment2'


function App() {
  const [count, setCount] = useState(0)


    
  return (
    <>
    {/* assignment1 is normally making a counter using state  */}
    <Assignment1/>
    <div style={{marginTop:"30px"}}>
      <span>Assignment 2</span>
      <Assignment2/>
    </div>
    </>
  )
}

export default App
