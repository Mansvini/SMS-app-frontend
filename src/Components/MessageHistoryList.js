import React, { Component } from "react";
import MessageHistoryCard from "./MessageHistoryCard";
	
class Contactlist extends Component {
	constructor(value){
		super()
		this.state={
		  messages:[]
		}
	}

	componentDidMount(){
		fetch('https://sms-app-backend-mansvini.herokuapp.com/MessageHistory')
		.then(response=> response.json())
		.then(messagesArray=>this.setState({messages:messagesArray}));
	} 

	render(){
		return (
			<div>
				<h1 className='f2 tc white'>Message History</h1>
			{
				this.state.messages.map((message,i)=>{
				return(
					<MessageHistoryCard 
					key={i}
					number={this.state.messages[i].to} 
					time={this.state.messages[i].dateSent}
					message={this.state.messages[i].body}
					/>
					);
				})
			}
			</div>
		);
	}
}

export default Contactlist;