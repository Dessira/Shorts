import React from 'react'
import { useLocation } from 'react-router-dom';

export const Profile = (prop) => {
  const val = useLocation()
  console.log(prop)
  return (
    <div>
      <h2>Hi {prop.firstName}!</h2>
      <div className='profile-pic img-fluid'>
        <img src='/assets/761388_woman-01.jpg'/>
      </div>
      <div className='profile-email'>
        Email
        <span>{prop.email}</span>
        </div>
      <div className='bio-content'>
        <h4>Bio</h4>
        <div className=' profile-content'><p>
        Sarah Lee is a 32-year-old marketing manager from New York City. She grew up in Queens, studied marketing at a university in Boston, and worked her way up the ladder in the advertising industry. In her free time, she enjoys hiking and volunteering at a local food bank
        </p></div>
      </div>

    </div>
  )
}
export default Profile;