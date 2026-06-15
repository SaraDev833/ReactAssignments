

import React, { useEffect, useState } from 'react'


const Assignment5 = () => {
    const [users, setUsers] = useState([]);
    const [loading , setLoading] = useState(true);
     const API = "https://jsonplaceholder.typicode.com/users";

 const [name, setName] = useState("");
useEffect(() => {
  const fetchUsers= async()=>{
    const response = await fetch(API);
    const data = await response.json();
   
    setUsers(data);
    setLoading(false);
  }

 fetchUsers();
}, [])

console.log(users)
const filteredUsers =users.filter(user =>
    user.name.toLowerCase().includes(name.toLowerCase())
)
console.log(filteredUsers)

  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
    
         <ul>
            {filteredUsers.map(user=>(
                <li key={user.id}>{user.name}</li>
            ))}
         </ul>
   
    </div>
  )
}

export default Assignment5
