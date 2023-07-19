import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function Update() {
    const[updatedata,setUpdatedata]=useState([])
    const {id} =useParams()

    useEffect(() => {
      axios.get("http://localhost:5000/users/"+id).then(Response=>setUpdatedata(Response.data))
    
      
    }, [])

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:5000/users/"+id,updatedata)
        .then(res=>{
            alert("do you want to update the data")
           
        })

    }

  return (
    <div>
        <form onSubmit={submitHandler}>
             
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={updatedata.name} onChange={(e)=>setUpdatedata({...updatedata,name:e.target.value})}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={updatedata.email} onChange={(e)=>setUpdatedata({...updatedata,email:e.target.value})}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Update