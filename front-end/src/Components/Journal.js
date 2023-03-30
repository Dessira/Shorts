import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Journal = (holder) => {
  const navigate = useNavigate()
  const [res, setRes] = useState({})
  const {journal} = holder
  //console.log({journal})
  //console.log(journal.journal)
    // on click fetch journal shorts
    const ShowFull = (id) => {
      console.log(`${journal._id}`)
      fetch(`http://localhost:5000/journalbyid/${journal._id}`, {
        method: "GET",


      }).then( (response)=> response.json())
      .then((result) =>{
      console.log("chicken")
      console.log(result);
      setRes(result)
      navigate("/viewjournal", {replace: true, state: {result}})
     })
      .catch((error) => {
        console.error("Error:", error);
});
    }
  return (
    <div className='col-sm-6' m-50>
      <div className='card' onClick={() => ShowFull(journal.id)}>
      <h4 className='card.title'>{journal.name}</h4>
      <p className='card-body'>{journal.description}</p>
      <span>{journal.createdAt}</span>
      </div>
    </div>
  )
}
export default Journal;
