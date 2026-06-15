// Assignment 2: Show / Hide Profile Card
//  Task

// Create a React component that:

// 1. Has a button
// Initial text: "Show Profile"
// 2. When button is clicked:
// A profile card appears on the screen
// Button text changes to: "Hide Profile"
// 3. When clicked again:
// Profile card disappears
// Button text changes back to: "Show Profile"
// 👤 Profile Card Content

// Inside the card show:

// Name: Sara
// Role: Web Developer

import React, { useState } from 'react'

const Assignment2 = () => {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={()=>setShow(!show)}>
            {show?"Hide profile": "Show Profile"}
        </button>
 
       {show && 
        <div className="card">
            name: sara,
            role: web developer
        </div>
       
       }
    </div>
  )
}

export default Assignment2
