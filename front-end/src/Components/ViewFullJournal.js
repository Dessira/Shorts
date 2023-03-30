import React from 'react'
import { Link, useLocation} from 'react-router-dom';
import Shorts from './ShortsDisplay';

const ViewJournal = (prop) => {
    const {state} = useLocation();
    let {result} = state
    console.log(result);
    if (!result){
      result = prop
      console.log(result)
    }
    

  return (
    <div>ViewJournal
        <div>
          <button>edit journal</button>
        <p>{result.description} heyyyyy</p>
        </div>
        <div>
            <Shorts id={result._id} endpoint={"journal-short"}/>
            shorts section
        </div>
        <Link to="/create-short" state={result}> <button>
            add new short
        </button></Link>
    </div>
  )
}
export default ViewJournal