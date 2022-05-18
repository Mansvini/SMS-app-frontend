import React from "react";
import { Link } from "react-router-dom";

const ContactCard=({name, phone})=>{
	return(
		<div className='w-100 bg-light-red tc dib br3 pa3 ma2 grow bw2 shadow-5'>
				<h2 className= 'f1 link dim black db pointer'>
					<Link to="/ContactInfo" state={{ name: {name}, phone: {phone} }}>{name}</Link>
				</h2>
		</div>
		);
	}

export default ContactCard;