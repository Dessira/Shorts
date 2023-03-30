import React  from 'react'
import Shorts from './ShortsDisplay';
import Settings from './Settings';
import Profile from './Profile';
import Help from './Help';
import Create from './CreateJournal';
import { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import Journals from './JournalsDisplay';
import CreateJournal from './CreateJournal';
const DashBoard = () => {
	const {state} = useLocation();
	console.log("state next")	
	const [dash, setDash] = useState("dash");
	const [comp, setComp] = useState(<div>hey</div>);
	let user = localStorage.getItem("user");
	let newuser = JSON.parse(user);
	const [id, setId] = useState("holder")
	//console.log(id);

	const changeDash = (val) =>{
		console.log(val)
		setDash(val)
	}

	useEffect(() => {
		//console.log("triggered")
		setId(newuser._id)
		switch(dash) {
			// case 'shorts':
				
			//   return setComp(<Shorts id={newuser} firstName={newuser.firstName}/>);
			case 'profile':
			  return setComp(<Profile id={newuser._id} firstName={newuser.firstName} email={newuser.email}/>);
			case 'journal':
				if (newuser){
				//console.log(newuser._id)
				return  setComp(<Journals id={id} />);
				}
			case 'create':
				if (newuser){
				return setComp(<CreateJournal id={newuser._id}/>)
			}
			case 'settings':
				return setComp(<Settings id={id}/>)
			case 'help':
				return setComp(<Help />)
			default:
			  return setComp(<Shorts id={newuser._id} endpoint={"shorts"}/>);
		  }
		
	}, [dash]);
  return (
    <div>
        <div class="container-fluid">
		<div class="row">
			<div class="col-2 align-self-start bg-dark min-vh-100" >
				<div class="pb-3">
					<h2 className='light'>Dashboard</h2>
				</div>
				
				<ul class="nav flex-column align-items-start pt-left-40">
					<li class="nav-item" onClick={()=>changeDash("profile")}>
						<a class="nav-link active" href="#"><i class="fas fa-user"></i> Profile</a>
					</li>
					<li class="nav-item" onClick={()=>changeDash("create")}>
						<a class="nav-link" href="#"><i class="fas fa-plus-circle"></i> Create Journal</a>
					</li>
					<li class="nav-item" onClick={()=>changeDash("journal")}>
						<a class="nav-link" href="#"><i class="fas fa-book"></i> View Journal</a>
					</li>
					<li class="nav-item" onClick={()=>changeDash("Shorts")}>
						<a class="nav-link" href="#"><i class="fas fa-bolt"></i> Shorts</a>
					</li>
					<li class="nav-item" onClick={()=>changeDash("settings")}>
						<a class="nav-link" href="#"><i class="fas fa-cog"></i> Settings</a>
					</li>
					<li class="nav-item" onClick={()=>changeDash("help")}>
						<a class="nav-link" href="#"><i class="fas fa-question-circle"></i> Help</a>
					</li>
				</ul>
			</div>
			<div class="col-9">
			{comp}
			</div>
		</div>
	</div>
    </div>
  )
}
export default DashBoard;