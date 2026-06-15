// Assignment 3 (Your first API assignment)
// Goal:

// Build a Random Quote Generator

// API:
// https://dummyjson.com/quotes/random
// Requirements:
// When page loads:
// Fetch a random quote from the API.
// Display:
// Quote
// Author

// Add a button:

// New Quote
// When clicked:
// Fetch another random quote
// Update the screen
import React, { useState, useEffect } from 'react'
const Assignment3 = () => {
    const API = "https://dummyjson.com/quotes/random";
    const [data, setData] = useState(null);
    const [loading , setLoading] =useState(true)
    useEffect(() => {
      const fetchQuotes = async () =>{
        const response = await fetch(API);
         const data =await response.json();
         setData(data);
         setLoading(false)
      }
    
        fetchQuotes();
    }, [])
    
    
  return (

<div>
     {loading? <div><h5>is loading...</h5></div>:
      <div>
        <h3>{data.author}</h3>
        <p>{data.quote}</p>
      </div>
     }
</div>
  )
}

export default Assignment3
