// Assignment 4: User List App (API Project)
// Goal

// Build an app that:

// Fetches users from API
// Shows them on screen
// Handles loading state
// Uses conditional rendering
// API
// https://jsonplaceholder.typicode.com/users
import React, { useState , useEffect } from 'react'

const Assignment4 = () => {
    const [users , setUsers] = useState([]);
    const[loading, setLoading] = useState(true);
    const API = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
     const fetchUsers = async()=>{
         const response= await fetch(API);
         const data =await response.json();
         setUsers(data)
         setLoading(false);
     }
     fetchUsers()
   
    }, [])
    
  return (
    <div>
       {loading?"is loading...": 
       <div>
        {users.map(user=>(
          <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <br />
          </div>
        )
      
        )}
       </div>
       
       
       
       }



        
    </div>
  )
}

export default Assignment4
