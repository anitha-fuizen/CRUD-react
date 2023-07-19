import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function Home() {
    const[data,setData]=useState([])
    const[columns,setColumns]=useState([])

    const getdata=()=>{
        axios.get("http://localhost:5000/users").then(response=>{setData(response.data); setColumns(Object.keys(response.data[0]))})
    }

    const deletefun=(id)=>{
        axios.delete("http://localhost:5000/users/"+id).then(res=>{
            alert("do u want to delete this item")
        })
        getdata();

    }

    useEffect(() => {
       getdata()
     }, [])
    
  return (
    <>
    <div>
    <Link to="/add">ADD+</Link>
    </div>
   <div>
    
     <table>
            <thead>
                <tr>
                    {
                        columns.map((c,i)=>(
                            <th key={i}>{c}</th>

                        )

                        )
                    }
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d)=>(
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <button onClick={()=>deletefun(d.id)}>Delete</button>
                            <Link to={`/Update/${d.id}`} >update</Link>
                            <Link to={`/Read/${d.id}`}>Read</Link>
                         </tr>

                    ))
                }
            </tbody>
        </table>
       
   </div>
   </>
  )
}

export default Home