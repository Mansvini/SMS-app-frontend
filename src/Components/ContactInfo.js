import React from "react";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

const ContactInfo=()=>{
	const location = useLocation()
  	const { name, phone } = location.state
	return(
		<div>
		<h1 className='f2 tc white '>CONTACT INFO</h1>
		<div className='w-100 bg-light-blue tc dib br3 pa3 ma2 bw2 shadow-5'>
			<h2>
				{name.name}
			</h2>
			<p>
				{phone.phone}
			</p>
			<button className='center w-30 grow f4 link ph3 pv2 dib white bg-blue'>
				<Link to="/SendMessage" state={{ name: {name} , phone: {phone}}}>
					Send OTP message
				</Link>
			</button>
		</div>
		</div>
		);
	}

export default ContactInfo;
