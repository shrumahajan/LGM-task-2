import React, { useState } from 'react';
import './App.css';
const App=()=>{
  const [users,setUser]=useState([]);
  const loadUsers=async()=>{
    const response= await fetch("https://api.github.com/users");
    const jsonresponse= await response.json();
    setUser(jsonresponse);
  }
  return(
  <div className='App'>
     <h1 className='heading'>LGMVIP-Task 2</h1>
     <button className='btn' onClick={loadUsers}>Get Data</button>

     <h3 className='heading2'>Users</h3>
     <ul className='ul'>
     {users.map(({id,login,avatar_url})=>(
        <li className='li' key={id}>Name: {login} ||
        Avatar :{avatar_url}
        </li>
     ))}
     </ul>
  </div>
  
  );
}



export default App;
