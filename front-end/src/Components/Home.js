import { useNavigate, Link } from 'react-router-dom';
import Nav from "./Nav"
import Footer from "./Footer"
import Short from './Short';
import { useEffect, useState } from 'react';
import Shorts from './ShortsDisplay'
const Home = () => {
    const [shorts, setShorts] = useState();
    useEffect(()=>{
        fetch("http://localhost:5000/shorts", {

        }).then((response) => response.json())
        .then((result) => {
            setShorts(result)
        })
        .catch((error) => {
            console.error("Error:", error);
    });

    }, [])
    
    return (
        <div>
            <Nav/>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Welcome to Shorts</h1>
                        <p className="lead">Journal your way through life one Short at a time.</p>
                        <Link to="signup"><button className="btn btn-primary">Sign Up</button></Link>
                        <Link to="/signin"><button className="btn btn-outline-primary">Sign In</button></Link>
                    </div>
                    <div className="col-md-6">
                        <img src="/assets/3236267.jpg" alt="Blog banner" className="img-fluid" />
                    </div>
                </div>
                <div>
                    <p>
                    With Short write as little as you can. Share your stories one bit at a time. Compile into journals 
                    Easy to create easy to share. Great for Students, budding and established writers, Documentation, Progress tracker and much more. 
                    </p>
                    <img src="/assets/3286568.jpg" alt="Blog banner" className="img-fluid" />
                    <div>
                    <h2>View our top shorts</h2>
                    <div className='shorts'>
                        {
                            (shorts)
                        ? shorts.map(short =>
                        <Short key={short.id} short={short} />
                        )
                        : 'Shorts not Avaliable'
                        }
                    </div>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    );
};
export default Home;