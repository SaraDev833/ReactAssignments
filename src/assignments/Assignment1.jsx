import React from 'react'
import { useState } from 'react'

const Assignment1 = () => {
    const [count, setCount] = useState(0)
  return (
    <div style={{display:'flex', gap:"20px", alignItems:"center",justifyContent:"center"}}>
      
        <button onClick={()=>setCount(count + 1)}>plus</button>
        <span>counter {count} </span>
        <button onClick={()=>setCount(count - 1)} disabled={count===0}>minus</button>
    </div>
  )
}

export default Assignment1
