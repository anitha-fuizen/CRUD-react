import axios from 'axios';
import React, { useState } from 'react'

function Add() {
    const[add,setAdd]=useState({name:"",email:""})
    const submithandler=(e)=>{
       e.preventDefault();
       axios.post("http://localhost:5000/users",add).then(Response=>{
        alert("do u want to add the data")
       })
    }
  return (
    <>
    <form onSubmit={submithandler}>
    <div>
        <label>name:</label>
        <input type='text'name='name' onChange={(e)=>setAdd({...add,name:e.target.value})}/>
    </div>
    <div>
        <label>email:</label>
        <input type='email'name='email' onChange={(e)=>setAdd({...add,email:e.target.value})}/>
    </div>
    <button>submit</button>
    </form>
    </>
  )
}

export default Add