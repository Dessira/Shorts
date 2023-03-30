import React from 'react'
import { useNavigate } from 'react-router-dom';
const Short =({key, short}) => {
    const navigate = useNavigate();
    console.log(short._id)
    const getFullShort = (id)=>{
            fetch(`http://localhost:5000/short/${short._id}`, {
                method: "GET",
            })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                navigate("/viewshort", {replace: true, state: {result}})
            })
            .catch((error) => {
                    console.error("Error:", error);
            });
        
    }
return (
    <div>
    <div className='card short' onClick={() => getFullShort(short.id)}>
        <div><h2>{short.name}</h2>
        <p>{short.content.substring(0, 100)}</p>
        </div>
        <p>{short.createDate}</p>
        <p><i class="fa-solid fa-heart"></i>{short.likes}</p>
    </div>
    </div>
  )
}
export default Short;