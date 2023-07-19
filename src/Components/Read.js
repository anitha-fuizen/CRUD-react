import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Read() {
    const[read,setRead]=useState([])
    const{id}=useParams()
    useEffect(() => {
      axios.get("http://localhost:5000/users/"+id).then(Response=>setRead(Response.data))
     
    }, [])
    
  return (
    <div>
         <form >
<div>
                <label>ID:</label>
                <input type="text" name="id" disabled value={read.id} />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={read.name} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email"  value={read.email} />
            </div>
        
        </form>
    </div>
  )
}

export default Read