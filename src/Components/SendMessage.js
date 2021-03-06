import React from "react";
import { useLocation } from 'react-router-dom';

const OTP= Math.floor((Math.random() * 900000) + 100000);

const sendOTP=(number)=>{
	//connect to backend to send msg
	fetch('https://sms-app-backend-mansvini.herokuapp.com/SendMessage', {
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
  	const {name,  phone } = location.state;

	return(
		<div>
			<h1><div className='f2 tc white'>Message</div>
			 <div className='f2 tc white i'>{name.name.name}</div></h1>
			<h2 className='ba b--white center pa4 lightest-blue shadow-5 form'>
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
