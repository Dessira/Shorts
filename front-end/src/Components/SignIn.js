import React from 'react'
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({})
  
  const handleSubmit = (e) =>{
    e.preventDefault();
      fetch(`http://localhost:5000/sign-in`, {
        method: "POST",
        headers: {
          "Content-type":"application/json",
        },
        body:JSON.stringify({email, password})
  })
    .then((response) => response.json())
    .then((result) => {
          if (result.token == -1){
            //wrong email or password
          }else{
            //redirect user to dashboard
            console.log(result);
            setUser(result)
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/dashboard", {replace: true, state: {user}})
          }
        })          
    .catch((error) => {
            console.error("Error:", error);
    });
    }
  return (
    <div className='signin-container min-vh-100'>
          <div className='imgdiv'>
            <img src='/assets/19471261_6111095.jpg'/>
          </div>
        <form onSubmit={handleSubmit}>
            <h2>Welcome Back! Signin</h2>
                <input type="email" required placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                
                <input type="password" required placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button className='btn btn-primary btn-block mb-4 signin-btn'>login</button>
                <p>Dont have an account? <Link to={'/signup'}>create one</Link></p>
        </form>
    </div>
  )
}
export default SignIn;