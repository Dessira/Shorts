import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
export const CreateShort = () => {
    const location = useLocation();
    const data = location.state;
    //console.log(data)
    const [newdata, setData] = useState(data)
    const {user, _id} = newdata
    const journal = _id
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const hello = "hello"
    //console.log(name, content, user, journal)

    const Submitshort = (e) =>{
        e.preventDefault()
        fetch("http://localhost:5000/new-short", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify({name, content, user, journal})
        }).then((response) => response.json())
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    <div className='create'>
        <h3>CreateShort</h3>
        <form onSubmit={Submitshort}>
            <input placeholder='Short name' value={name} onChange={e => setName(e.target.value)} className="name"/>
            <textarea placeholder='Write away' value={content} onChange={e => setContent(e.target.value)} className="content"/>
            <button className='btn btn-primary'>Create me!</button>
        </form>
    </div>
  )
}
