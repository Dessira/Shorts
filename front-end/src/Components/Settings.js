import React from 'react'

const Settings = () => {
  return (
   <div className='setting'>
    <h3>Settings</h3>
    <form>
    <div>
      <label>Update username</label>
      <input className='name'/>
    </div>
    <div>
      <label>update password</label>
      <input className='name'/>
      </div>

    <div>
      <label>Update email</label>
      <input className='name'/>
      </div>
    <div>
      <label>Update full name</label>
      <input className='name'/>
    </div>
    <button className='btn btn-secondary'>Done</button>
    </form>
   </div>
  )
}
export default Settings;