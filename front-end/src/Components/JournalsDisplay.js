import React from 'react'
import Journal from './Journal'
import { useState, useEffect } from 'react'

const Journals =(user_id) => {
  console.log(user_id)
 const [journals, setJournals] = useState([])
    const [state, setState] = useState(false)
    useEffect( () =>{
      console.log("i ran")
        fetch(`http://localhost:5000/journal/${user_id.id}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
                    setJournals(result);
                    setState(true)
        })
        .catch((error) => {
                console.error("Error:", error);
        });
    }, [])

    /* */
  return (
    <div className='row'>

         {journals.map(journal =>
        <Journal key={journal._id} journal={journal} />
      )}
    </div>
  )
}
export default Journals;