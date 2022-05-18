import React from "react";
import contacts from "./Contacts";
import ContactCard from "./ContactCard";
	
const Contactlist=()=>{
	return (
	<div>
	{
		contacts.map((user,i)=>{
		return(
			<ContactCard 
			key={i}
            id={contacts[i].id}
			name={contacts[i].name} 
			phone={contacts[i].phone}
			/>
			);
		})
	}
	</div>
    );
}

export default Contactlist;

