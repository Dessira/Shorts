import Home from "./Components/Home"
import SignUp from "./Components/SignUp"
import Help from "./Components/Help"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DashBoard from "./Components/DashBoard";
import SignIn from "./Components/SignIn";
import ViewJournal from "./Components/ViewFullJournal";
import Profile from "./Components/Profile";
import ViewShort from './Components/ViewFullShorts'
import { CreateShort } from "./Components/CreateShort";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp />} />
           <Route path="/help" element={<Help />} />
           <Route path="/dashboard" element={<DashBoard />} />
           <Route path="/viewjournal" element={<ViewJournal/>}/>
           <Route path="/viewshort" element={<ViewShort/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/create-short" element={<CreateShort/>}></Route>
       </Routes>
    </div>
  );
}
export default App;
