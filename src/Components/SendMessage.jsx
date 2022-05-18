import React from "react";
import { useLocation } from 'react-router-dom';

const OTP= Math.floor((Math.random() * 900000) + 100000);

const sendOTP=(number)=>{
	//connect to backend to send msg
	fetch('http://localhost:3001/SendMessage', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
		message: `Hi, your OTP is ${OTP}`,
        phone: number
      })
    })
}

const SendMessage=()=>{
	const location = useLocation()
  	const { phone } = location.state;

	return(
		<div>
			<h2 className='center pa4 br3 black-50 shadow-5 form'>
				" Hi, your OTP is {OTP}"
			</h2>
			<button
				className='center grow f4 link ph3 pv2 dib white bg-blue'
				onClick={()=>sendOTP(phone.phone.phone)}
			>Send OTP message
			</button>
		</div>
		);
	}

export default SendMessage;
