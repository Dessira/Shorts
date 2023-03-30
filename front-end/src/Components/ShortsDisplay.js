import React from 'react'
import Short from './Short'
import { useEffect, useState } from 'react';

const Shorts = (prop) => {
    const [shorts, setShorts] = useState([])
    const [state, setState] = useState(false)
    console.log(prop)
    console.log("shorts side")
   useEffect( () =>{
    console.log("in here")
        fetch(`http://localhost:5000/${prop.endpoint}/${prop.id}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((result) => {
                    setShorts(result);
                    console.log(result)
                    if (result.length > 0){
                      setState(true)
                    
                    console.log(shorts)
                    }
        })
        .catch((error) => {
                console.error("Error:", error);
        });
    }, [])

    
  return (
    <div >
      <div className='shorts'>
      {
          (state)
          ? shorts.map(short =>
          <Short key={short.id} short={short} />
          )
          : 'Shorts not Avaliable'
        }
        
        </div>
    </div>
  )
}
export default Shorts