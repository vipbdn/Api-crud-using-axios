import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


function EmpList() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

   async function getApitData(){
    const response = await axios.get('http://localhost:8004/posts')
    setData(response.data)

    }
   

   async  function removeEmp(id){
         
        const d =    await axios.delete(`http://localhost:8004/posts/${id}`)
        getApitData()
        
       console.log(d.data)
      
    }


    useEffect(()=>{
        getApitData()
    },[])
console.log(data)
  return (
    <>
    <button onClick={()=>navigate('/add')}>Add</button>
    <table border='1' width='600'>
       
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Edit Emp Details</th>
            <th>Remove Emp</th>
        </tr>
      
       {
        data.map((eachItem)=>{
            return(
                <tr>
                    <th>{eachItem.id}</th>
                    <th>{eachItem.name}</th>
                    <th>{eachItem.designaion}</th>
                    <th><button onClick={()=>navigate('/edit')}>Edit</button></th>
                    <th><button onClick={()=>removeEmp(eachItem.id)}>Remove</button></th>
                </tr>
            )
        })
       }
    
    </table>
    </>
  )
}

export default EmpList
