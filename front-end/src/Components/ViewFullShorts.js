import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const ViewShort = (prop) => {

    const {state} = useLocation();
    const {result} = state
    const [isOwner, setOwner] = useState(false)
    const user = "grouch"
    if (result.user == user){
      setOwner(true)
    }
    console.log(result)
  return (
    <div>
      <div className='short-img'>
      <img src="/assets/23096150_christmas_2012-new_1029.jpg" alt="Blog banner" className="img-fluid" />
      </div>
    <div className='fullshort'>
      <h3 className='short-logo'>// Short //</h3>
        {isOwner && (<button>edit</button>)}
        <div >
        <p className='short-name'>{result.name}</p>
        <p>Published on {result.createdAt}</p>
        </div>
        <p>published by grouch</p>
        <p className='short-content'>{result.content}</p>
        <button>View more shorts from this journal</button>
    </div>
    <div className='short-img second-img'>
    <img src="/assets/23096150_christmas_2012-new_1029.jpg" alt="Blog banner" className="img-fluid" />
    </div>
    </div>
  )
}

export default ViewShort;