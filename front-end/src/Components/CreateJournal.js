import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateJournal = ({id}) => {
    const navigate = useNavigate();
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const user = id
    //console.log(id)
    //send the new journal via post
    const Submit = (e)=>{
        //fetch data
        e.preventDefault();
      fetch(`http://localhost:5000/create-journal`, {
        method: "POST",
        headers: {
          "Content-type":"application/json",
        },
        body:JSON.stringify({user, name, description})
  })
    .then((response) => response.json())
    .then((result) => {
            navigate("/viewjournal", {replace: true, state: {result}})
        })          
    .catch((error) => {
            console.error("Error:", error);
    });

    }
  return (
    <div className='create'>
        <h3>Create a Journal</h3>
        <form onSubmit={Submit}>
            <input type="text" placeholder='Title' value={name} onChange={e => setName(e.target.value)} className="name"/>
            <textarea placeholder='Content' value={description} onChange={e => setDescription(e.target.value)} className="content"/>
            <button className='btn btn-primary'> create me</button>
        </form>
    </div>
  )
}
export default CreateJournal;