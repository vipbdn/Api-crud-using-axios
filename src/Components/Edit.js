import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Edit() {

  const [id, setId] = useState()
  const [name, setName] = useState()
  const [designaion, setDesignation] = useState()
  const nav = useNavigate('/')

  async function editUserDetails(){
    await axios.put(`http://localhost:8004/posts/${id}`,{id:id,name:name, designaion:designaion})
    nav('/')
  }
 

  return (
    <div>
    <h1>Edit User Details</h1>
<div className='input-cont'>
  <input onChange={(e)=>setId(e.target.value)} value={id} placeholder='Enter Id' className='input'/>
  </div>
  <div className='input-cont'>
  <input onChange={(e)=>setName(e.target.value)} value={name} placeholder='Enter name' className='input'/>
  </div>
  <div className='input-cont'>
  <input onChange={(e)=>setDesignation(e.target.value)} value={designaion} placeholder='Enter Designation' className='input'/>
  </div>
  <button onClick={()=>editUserDetails()}>Update</button>
  
</div>
  )
}

export default Edit
