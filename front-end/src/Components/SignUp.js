import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'



const SignUp = () =>{
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState({})

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (password != confirmPassword){
            console.log("password does not match")
        }else{
            //post to backend
            // await response
            // navigate to dashboard using credentials recieved
        fetch(`http://localhost:5000/create-user`, {
        method: "POST",
        headers: {
          "Content-type":"application/json",
        },
        body:JSON.stringify({firstName, lastName, email, password})
  })
    .then((response) => response.json())
    .then((result) => {
          if (result.token == -1){
            //user exists
          }else{
            //redirect user to dashboard
            setUser(result)
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/dashboard", {replace: true, state: {user}})
          }
        })          
    .catch((error) => {
            console.error("Error:", error);
    });
        }
    }
    return (
        <div className='container-fluid min-vh-100 signup-main'>
            <div className='signup-image'>
            <img src="/assets/11436088_4709786.jpg"/>
            </div>
        <div  className='signup'>
        <form method="post" onSubmit={handleSubmit} >
                <h4>Create an account</h4>
                <div>
                < input type="text" required placeholder="first name" value={firstName} onChange={e => setFirstName(e.target.value)} ></input>
                </div>
                <div>
                <input type="text" required placeholder="last name" value={lastName} onChange={e => setLastName(e.target.value)}></input>
                </div>
                <div>
                <input type="email" required placeholder="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                <i class="fa-solid fa-at"></i>
                </div>
                <div>
                <input type="password" required placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                <i class="fa-solid fa-eye"></i>
                </div>
                <div>
                <input type="password" required placeholder="confirm password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}  ></input>
                <i class="fa-solid fa-eye"></i>
                </div>
                <button type="submit" className='btn btn-primary btn-block mb-4'>Submit</button>
            </form>
            <p>Already have an account,&nbsp;<Link>login</Link></p>
        </div>
        </div>
    )
}
export default SignUp